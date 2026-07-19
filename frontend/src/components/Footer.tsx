import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer 
      style={{
        backgroundColor: 'var(--black-pure)',
        color: '#ffffff',
        padding: '32px 0',
        width: '100%',
        borderTop: 'var(--border-width) solid var(--black-pure)'
      }}
    >
      <div className="container-desktop" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '24px'
      }}>
        {/* Brand block */}
        <div style={{ textAlign: 'left' }}>
          <h2 className="headline-lg" style={{ 
            color: 'var(--primary-container)', 
            margin: 0,
            fontSize: '28px',
            letterSpacing: '-0.02em',
            fontWeight: 900
          }}>
            NEXT SAVE
          </h2>
          <div style={{
            fontSize: '11px',
            color: 'var(--surface-dim)',
            marginTop: '4px',
            fontFamily: 'var(--font-mono)'
          }}>
            © 2026 NEXT SAVE — ALL RIGHTS RESERVED.
          </div>
        </div>

        {/* Links & Socials block */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
          flexWrap: 'wrap'
        }}>
          {/* Text Links */}
          <div style={{
            display: 'flex',
            gap: '16px',
            fontSize: '13px',
            fontWeight: 600,
            fontFamily: 'var(--font-body)'
          }}>
            <a href="#privacy" style={{ color: '#ffffff', textDecoration: 'none' }} className="pulse-hover">Privacy Policy</a>
            <a href="#terms" style={{ color: '#ffffff', textDecoration: 'none' }} className="pulse-hover">Terms of Service</a>
            <a href="#contact" style={{ color: '#ffffff', textDecoration: 'none' }} className="pulse-hover">Contact</a>
          </div>

          {/* Social icons */}
          <div style={{
            display: 'flex',
            gap: '8px'
          }}>
            {/* Share button */}
            <button 
              style={{
                backgroundColor: 'transparent',
                border: '2px solid #ffffff',
                width: '36px',
                height: '36px',
                borderRadius: 'var(--rounded-default)',
                color: '#ffffff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onClick={() => alert('Simulated: Share menu opened.')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 5.1259 15.0078 5.24997 15.0229 5.37181L8.08375 8.84139C7.30501 8.3204 6.36838 8 5.33333 8C3.49238 8 2 9.49238 2 11.3333C2 13.1743 3.49238 14.6667 5.33333 14.6667C6.36838 14.6667 7.30501 14.3463 8.08375 13.8253L15.0229 17.2949C15.0078 17.4167 15 17.5408 15 17.6667C15 19.5076 16.4924 21 18.3333 21C20.1743 21 21.6667 19.5076 21.6667 17.6667C21.6667 15.8257 20.1743 14.3333 18.3333 14.3333C17.2983 14.3333 16.3617 14.6537 15.5829 15.1747L8.64375 11.7051C8.65889 11.5833 8.66667 11.4592 8.66667 11.3333C8.66667 11.2075 8.65889 11.0834 8.64375 10.9616L15.5829 7.49202C16.3617 8.01301 17.2983 8.33333 18.3333 8.33333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {/* Globe button */}
            <button 
              style={{
                backgroundColor: 'transparent',
                border: '2px solid #ffffff',
                width: '36px',
                height: '36px',
                borderRadius: 'var(--rounded-default)',
                color: '#ffffff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onClick={() => alert('Language options: EN, ID, JP')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path d="M12 2C12 2 16 6 16 12C16 18 12 22 12 22C12 22 8 18 8 12C8 6 12 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
