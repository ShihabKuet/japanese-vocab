import { useState, useEffect } from 'react';
import { APP_VERSION, GITHUB_REPO } from '../version';

/**
 * UpdateChecker
 *
 * Handles TWO different update scenarios:
 *
 * 1. NATIVE ANDROID (Capacitor APK)
 *    ─ Fetches GitHub Releases API on mount
 *    ─ If a newer version exists, shows a download banner
 *    ─ "Download" opens the APK asset URL in the device browser
 *
 * 2. PWA / WEB BROWSER
 *    ─ Receives `swUpdate` prop from App.jsx (from vite-plugin-pwa hook)
 *    ─ When service worker has a new version ready, shows a reload banner
 *    ─ "Reload" activates the new service worker immediately
 *
 * Props:
 *   swUpdate    {boolean}   — true when SW has a pending update (web only)
 *   onSwReload  {function}  — call this to activate the new SW (web only)
 */

// ── Semver comparison ──────────────────────────────────────────
// Returns true if `remote` is strictly newer than `local`
function isNewer(local, remote) {
  const parse = v => v.replace(/^v/, '').split('.').map(Number);
  const [lMaj, lMin, lPat] = parse(local);
  const [rMaj, rMin, rPat] = parse(remote);
  if (rMaj !== lMaj) return rMaj > lMaj;
  if (rMin !== lMin) return rMin > lMin;
  return rPat > lPat;
}

// ── Detect Capacitor (native Android) ─────────────────────────
function useIsNative() {
  const [isNative, setIsNative] = useState(false);
  useEffect(() => {
    import('@capacitor/core')
      .then(({ Capacitor }) => setIsNative(Capacitor.isNativePlatform()))
      .catch(() => setIsNative(false));
  }, []);
  return isNative;
}

// ── Shared banner styles ───────────────────────────────────────
const bannerStyle = {
  position:       'fixed',
  top:            0,
  left:           0,
  right:          0,
  zIndex:         9999,
  background:     '#b5341a',
  color:          'white',
  display:        'flex',
  alignItems:     'center',
  justifyContent: 'space-between',
  flexWrap:       'wrap',
  gap:            8,
  padding:        '10px 16px',
  boxShadow:      '0 4px 16px rgba(0,0,0,0.25)',
  fontFamily:     'Georgia, serif',
  fontSize:       13,
};

const btnStyle = (primary) => ({
  padding:      '6px 16px',
  borderRadius: 8,
  border:       primary ? 'none' : '1px solid rgba(255,255,255,0.5)',
  background:   primary ? 'white' : 'transparent',
  color:        primary ? '#b5341a' : 'white',
  cursor:       'pointer',
  fontFamily:   'Georgia, serif',
  fontWeight:   primary ? 'bold' : 'normal',
  fontSize:     12,
  whiteSpace:   'nowrap',
  flexShrink:   0,
});

// ── Native Android update banner ───────────────────────────────
function NativeUpdateBanner({ version, apkUrl, onDismiss }) {
  const handleDownload = async () => {
    try {
      // Use Capacitor Browser plugin on Android for proper download handling
      const { Browser } = await import('@capacitor/browser');
      await Browser.open({ url: apkUrl });
    } catch {
      // Fallback for web or if Browser plugin unavailable
      window.open(apkUrl, '_blank');
    }
  };

  return (
    <div style={bannerStyle}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1 }}>
        <span style={{ fontSize: 18 }}>🆕</span>
        <span>
          <strong>Update {version} available!</strong>
          <span style={{ opacity: 0.85, marginLeft: 6 }}>
            New lessons & features
          </span>
        </span>
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <button style={btnStyle(true)} onClick={handleDownload}>
          ⬇ Download
        </button>
        <button style={btnStyle(false)} onClick={onDismiss}>
          Later
        </button>
      </div>
    </div>
  );
}

// ── PWA web update banner ──────────────────────────────────────
function PWAUpdateBanner({ onReload, onDismiss }) {
  return (
    <div style={bannerStyle}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1 }}>
        <span style={{ fontSize: 18 }}>✨</span>
        <span>
          <strong>App updated!</strong>
          <span style={{ opacity: 0.85, marginLeft: 6 }}>
            Reload to get the latest version
          </span>
        </span>
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <button style={btnStyle(true)} onClick={onReload}>
          ↺ Reload
        </button>
        <button style={btnStyle(false)} onClick={onDismiss}>
          Later
        </button>
      </div>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────
export default function UpdateChecker({ swUpdate, onSwReload }) {
  const isNative = useIsNative();

  // Native update state
  const [nativeUpdate, setNativeUpdate]   = useState(null); // { version, apkUrl }
  const [nativeDismissed, setNativeDismissed] = useState(false);

  // PWA update state
  const [pwaDismissed, setPwaDismissed]   = useState(false);

  // ── Check for native update on mount ────────────────────────
  useEffect(() => {
    if (!isNative) return;         // skip on web
    if (!GITHUB_REPO) return;      // skip if repo not configured

    const checkUpdate = async () => {
      try {
        const res  = await fetch(
          `https://api.github.com/repos/${GITHUB_REPO}/releases/latest`,
          { headers: { Accept: 'application/vnd.github+json' } }
        );
        if (!res.ok) return;

        const data        = await res.json();
        const remoteVer   = data.tag_name || '';          // e.g. "v1.2.0"
        const apkAsset    = (data.assets || []).find(a =>
          a.name.endsWith('.apk')
        );

        if (apkAsset && isNewer(APP_VERSION, remoteVer)) {
          setNativeUpdate({
            version: remoteVer,
            apkUrl:  apkAsset.browser_download_url,
          });
        }
      } catch {
        // Silently ignore — don't disrupt the learning experience
      }
    };

    checkUpdate();
  }, [isNative]);

  // ── Render ───────────────────────────────────────────────────

  // Native Android: show APK download banner
  if (isNative && nativeUpdate && !nativeDismissed) {
    return (
      <NativeUpdateBanner
        version={nativeUpdate.version}
        apkUrl={nativeUpdate.apkUrl}
        onDismiss={() => setNativeDismissed(true)}
      />
    );
  }

  // PWA / Web: show reload banner when SW has a new version
  if (!isNative && swUpdate && !pwaDismissed) {
    return (
      <PWAUpdateBanner
        onReload={onSwReload}
        onDismiss={() => setPwaDismissed(true)}
      />
    );
  }

  return null;
}
