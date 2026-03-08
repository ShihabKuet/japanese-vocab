import { useState, useEffect, useRef } from 'react';
import { APP_VERSION, GITHUB_REPO } from '../version';

/**
 * HamburgerMenu
 *
 * A fixed ☰ button visible on every screen (top-right corner).
 * Opens a slide-in panel with:
 *   1. Version  — displays current installed app version
 *   2. Check for Updates — manually polls GitHub Releases API
 *
 * Update states:
 *   idle        → "Check for Updates" button
 *   checking    → spinner while fetching
 *   up_to_date  → green tick "You're up to date!"
 *   available   → shows new version + Download button
 *   error       → "Could not check. Try again."
 */

// ── helpers ───────────────────────────────────────────────────
function semverNewer(local, remote) {
  const parse = v => v.replace(/^v/, '').split('.').map(Number);
  const [lA, lB, lC] = parse(local);
  const [rA, rB, rC] = parse(remote);
  if (rA !== lA) return rA > lA;
  if (rB !== lB) return rB > lB;
  return rC > lC;
}

async function openUrl(url) {
  try {
    const { Browser } = await import('@capacitor/browser');
    await Browser.open({ url });
  } catch {
    window.open(url, '_blank');
  }
}

// ── sub-components ────────────────────────────────────────────
function Divider() {
  return <div style={{ height: 1, background: '#f0ddd0', margin: '4px 0' }} />;
}

function MenuItem({ icon, label, sublabel, onClick, children, accent }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: '100%', background: 'none', border: 'none',
        padding: '12px 20px', cursor: onClick ? 'pointer' : 'default',
        textAlign: 'left', fontFamily: 'Georgia, serif',
        display: 'flex', alignItems: 'flex-start', gap: 12,
        borderRadius: 10, transition: 'background 0.15s',
      }}
      onMouseEnter={e => { if (onClick) e.currentTarget.style.background = '#fef0e8'; }}
      onMouseLeave={e => { e.currentTarget.style.background = 'none'; }}
    >
      <span style={{ fontSize: 20, flexShrink: 0, marginTop: 1 }}>{icon}</span>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, color: accent || '#3a1a0a', fontWeight: 'bold' }}>
          {label}
        </div>
        {sublabel && (
          <div style={{ fontSize: 12, color: '#9a6040', marginTop: 2, lineHeight: 1.4 }}>
            {sublabel}
          </div>
        )}
        {children}
      </div>
    </button>
  );
}

// ── main component ────────────────────────────────────────────
export default function HamburgerMenu() {
  const [open,        setOpen]        = useState(false);
  const [checkState,  setCheckState]  = useState('idle');
  // checkState: 'idle' | 'checking' | 'up_to_date' | 'available' | 'error'
  const [updateInfo,  setUpdateInfo]  = useState(null); // { version, apkUrl }
  const panelRef  = useRef(null);
  const btnRef    = useRef(null);

  // Close panel when clicking outside
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (
        panelRef.current && !panelRef.current.contains(e.target) &&
        btnRef.current   && !btnRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [open]);

  // ── manual update check ──────────────────────────────────────
  const handleCheckUpdate = async () => {
    if (checkState === 'checking') return;
    setCheckState('checking');
    setUpdateInfo(null);

    if (!GITHUB_REPO) {
      setCheckState('error');
      return;
    }

    try {
      const res = await fetch(
        `https://api.github.com/repos/${GITHUB_REPO}/releases/latest`,
        { headers: { Accept: 'application/vnd.github+json' } }
      );

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data     = await res.json();
      const remote   = data.tag_name || '';
      const apkAsset = (data.assets || []).find(a => a.name.endsWith('.apk'));

      if (apkAsset && semverNewer(APP_VERSION, remote)) {
        setUpdateInfo({ version: remote, apkUrl: apkAsset.browser_download_url });
        setCheckState('available');
      } else {
        setCheckState('up_to_date');
      }
    } catch {
      setCheckState('error');
    }
  };

  const handleDownload = () => {
    if (updateInfo?.apkUrl) openUrl(updateInfo.apkUrl);
  };

  // ── render update section based on state ─────────────────────
  const renderUpdateSection = () => {
    switch (checkState) {

      case 'checking':
        return (
          <MenuItem icon="🔄" label="Checking…" sublabel="Please wait">
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6 }}>
              <div style={{
                width: 16, height: 16, borderRadius: '50%',
                border: '2px solid #e8cdb8', borderTop: '2px solid #b5341a',
                animation: 'hmSpin 0.7s linear infinite', flexShrink: 0,
              }} />
              <span style={{ fontSize: 12, color: '#9a6040' }}>Contacting server…</span>
            </div>
          </MenuItem>
        );

      case 'up_to_date':
        return (
          <MenuItem
            icon="✅"
            label="You're up to date!"
            sublabel={`Version ${APP_VERSION} is the latest`}
            onClick={() => setCheckState('idle')}
          />
        );

      case 'available':
        return (
          <MenuItem icon="🆕" label={`Update ${updateInfo.version} available!`}
            sublabel="Tap Download to get the latest APK" accent="#b5341a">
            <button
              onClick={handleDownload}
              style={{
                marginTop: 8, background: '#b5341a', color: 'white',
                border: 'none', borderRadius: 8, padding: '7px 18px',
                cursor: 'pointer', fontFamily: 'Georgia, serif',
                fontSize: 13, fontWeight: 'bold',
                boxShadow: '0 3px 10px rgba(181,52,26,0.3)',
                display: 'flex', alignItems: 'center', gap: 6,
              }}>
              ⬇ Download Update
            </button>
          </MenuItem>
        );

      case 'error':
        return (
          <MenuItem
            icon="⚠️"
            label="Could not check"
            sublabel="No internet connection? Tap to retry."
            onClick={handleCheckUpdate}
            accent="#c0392b"
          />
        );

      default: // 'idle'
        return (
          <MenuItem
            icon="🔍"
            label="Check for Updates"
            sublabel="Tap to check for a newer version"
            onClick={handleCheckUpdate}
          />
        );
    }
  };

  return (
    <>
      {/* ── CSS animations ── */}
      <style>{`
        @keyframes hmSpin      { to { transform: rotate(360deg); } }
        @keyframes hmSlideIn   { from { opacity:0; transform:translateX(100%); } to { opacity:1; transform:translateX(0); } }
        @keyframes hmFadeIn    { from { opacity:0; } to { opacity:1; } }
      `}</style>

      {/* ── Hamburger button — fixed top-right, above everything ── */}
      <button
        ref={btnRef}
        onClick={() => setOpen(o => !o)}
        aria-label="Menu"
        style={{
          position:   'fixed',
          top:        'calc(10px + env(safe-area-inset-top, 0px))',
          right:      14,
          zIndex:     10000,
          width:      42,
          height:     42,
          borderRadius: 12,
          border:     '2px solid rgba(181,52,26,0.25)',
          background: open ? '#b5341a' : 'rgba(255,248,240,0.95)',
          cursor:     'pointer',
          display:    'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap:        5,
          boxShadow:  '0 2px 12px rgba(181,52,26,0.18)',
          transition: 'all 0.2s',
          backdropFilter: 'blur(6px)',
        }}>
        {/* Three bar lines — animate to X when open */}
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            width:  20,
            height: 2,
            borderRadius: 2,
            background: open ? 'white' : '#b5341a',
            transition: 'all 0.25s',
            transformOrigin: 'center',
            transform: open
              ? i === 0 ? 'translateY(7px) rotate(45deg)'
              : i === 2 ? 'translateY(-7px) rotate(-45deg)'
              : 'scaleX(0)'
              : 'none',
          }} />
        ))}
      </button>

      {/* ── Backdrop ── */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9998,
            background: 'rgba(0,0,0,0.25)',
            animation: 'hmFadeIn 0.2s ease',
            backdropFilter: 'blur(2px)',
          }}
        />
      )}

      {/* ── Slide-in panel ── */}
      {open && (
        <div
          ref={panelRef}
          style={{
            position:   'fixed',
            top:        0,
            right:      0,
            bottom:     0,
            zIndex:     9999,
            width:      290,
            background: 'white',
            boxShadow:  '-4px 0 32px rgba(181,52,26,0.18)',
            display:    'flex',
            flexDirection: 'column',
            animation:  'hmSlideIn 0.25s cubic-bezier(0.34,1.1,0.64,1)',
            borderRadius: '20px 0 0 20px',
            overflow:   'hidden',
          }}>

          {/* Panel header */}
          <div style={{
            background: 'linear-gradient(135deg,#b5341a,#d4502a)',
            padding: '22px 20px 18px',
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <div style={{ fontSize: 32 }}>🇯🇵</div>
            <div>
              <div style={{ color: 'white', fontWeight: 'bold', fontSize: 16, fontFamily: 'Georgia, serif' }}>
                MINNA NO NIHONGO
              </div>
              <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 11, marginTop: 2, letterSpacing: 1 }}>
                VOCABULARY APP
              </div>
            </div>
          </div>

          {/* Menu items */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '8px 0' }}>

            {/* ── Version ── */}
            <MenuItem
              icon="📦"
              label="Version"
              sublabel={`Current version: ${APP_VERSION}`}
            />

            <Divider />

            {/* ── Update checker ── */}
            {renderUpdateSection()}

            <Divider />

            {/* ── Close ── */}
            <MenuItem
              icon="✕"
              label="Close Menu"
              onClick={() => setOpen(false)}
            />
          </div>

          {/* Panel footer */}
          <div style={{
            padding: '12px 20px',
            borderTop: '1px solid #f0ddd0',
            textAlign: 'center',
          }}>
            <p style={{ margin: 0, fontSize: 11, color: '#c0a090', fontFamily: 'Georgia, serif' }}>
              がんばって！ Ganbatte!
            </p>
          </div>
        </div>
      )}
    </>
  );
}
