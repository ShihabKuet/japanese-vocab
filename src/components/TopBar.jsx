/**
 * TopBar — shared fixed header used by every screen.
 *
 * Layout:  [ ← Back (optional) ]  [ title ]  [ ☰ Menu ]
 *
 * Why a shared bar instead of per-page top rows:
 *   • Hamburger lives here, so it can never overlap page content
 *   • Handles Android safe-area-inset-top (notch / status bar)
 *   • Consistent look on every screen
 *
 * Usage:
 *   <TopBar title="Browse Vocabulary" onBack={onBack} />
 *   <TopBar title="みんなの日本語" />   ← no back button on home
 */
import HamburgerMenu from './HamburgerMenu';

export default function TopBar({ title, subtitle, onBack, rightSlot }) {
  return (
    <div style={{
      position:   'fixed',
      top:        0,
      left:       0,
      right:      0,
      zIndex:     1000,
      // Respect Android status bar / notch
      paddingTop: 'env(safe-area-inset-top, 0px)',
      background: 'rgba(254,243,226,0.97)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1.5px solid #f0ddd0',
      boxShadow: '0 2px 12px rgba(181,52,26,0.08)',
    }}>
      <div style={{
        height:     52,
        display:    'flex',
        alignItems: 'center',
        padding:    '0 8px',
        gap:        4,
      }}>

        {/* ── Back button ── */}
        {onBack ? (
          <button
            onClick={onBack}
            style={{
              flexShrink:   0,
              display:      'flex',
              alignItems:   'center',
              gap:          4,
              background:   '#b5341a',
              color:        'white',
              border:       'none',
              borderRadius: 10,
              padding:      '8px 14px',
              cursor:       'pointer',
              fontFamily:   'Georgia, serif',
              fontSize:     14,
              fontWeight:   'bold',
              minWidth:     64,
              whiteSpace:   'nowrap',
            }}>
            ← Back
          </button>
        ) : (
          /* placeholder so title stays centred */
          <div style={{ minWidth: 64, flexShrink: 0 }} />
        )}

        {/* ── Title ── */}
        <div style={{
          flex:       1,
          textAlign:  'center',
          overflow:   'hidden',
        }}>
          <div style={{
            fontFamily:   'Georgia, serif',
            fontWeight:   'bold',
            fontSize:     16,
            color:        '#b5341a',
            whiteSpace:   'nowrap',
            overflow:     'hidden',
            textOverflow: 'ellipsis',
          }}>
            {title}
          </div>
          {subtitle && (
            <div style={{ fontSize: 10, color: '#9a6040', marginTop: 1, letterSpacing: 1 }}>
              {subtitle}
            </div>
          )}
        </div>

        {/* ── Right slot (optional extra button) + Hamburger ── */}
        <div style={{
          flexShrink: 0,
          display:    'flex',
          alignItems: 'center',
          gap:        6,
          minWidth:   64,
          justifyContent: 'flex-end',
        }}>
          {rightSlot}
          <HamburgerMenu />
        </div>

      </div>
    </div>
  );
}
