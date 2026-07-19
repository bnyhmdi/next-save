import React from 'react';

export const GlobalImpact: React.FC = () => {
  return (
    <section 
      style={{
        backgroundColor: 'var(--black-pure)',
        color: '#ffffff',
        padding: '60px 0',
        width: '100%',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Graphic (Lightning Bolt) */}
      <div 
        className="cartoon-shape" 
        style={{
          left: '5%',
          top: '15%',
          opacity: 0.15,
          color: '#ffffff'
        }}
      >
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor" stroke="#fff" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="container-desktop" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '40px',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Left Side Info */}
        <div style={{
          flex: '1',
          minWidth: '280px',
          textAlign: 'left'
        }}>
          <h2 className="headline-lg" style={{ color: '#ffffff', marginBottom: '12px' }}>
            GLOBAL IMPACT
          </h2>
          <p className="body-md" style={{ color: 'var(--surface-dim)', maxWidth: '380px' }}>
            Providing high-speed downloader services for users all over the globe, daily.
          </p>
        </div>

        {/* Right Side Stats */}
        <div style={{
          display: 'flex',
          gap: '24px',
          flexWrap: 'wrap'
        }}>
          {/* Stat 1: 2M+ */}
          <div 
            className="brutalist-border" 
            style={{
              backgroundColor: 'var(--primary-container)',
              color: 'var(--black-pure)',
              padding: '24px 32px',
              borderRadius: 'var(--rounded-default)',
              boxShadow: 'var(--shadow-offset) var(--shadow-offset) 0px #ffffff',
              minWidth: '180px',
              textAlign: 'center'
            }}
          >
            <div className="display-lg" style={{ fontSize: '48px', margin: 0, fontWeight: 900 }}>
              2M+
            </div>
            <div className="label-md" style={{ fontSize: '12px', marginTop: '4px' }}>
              VIDEO DOWNLOADS
            </div>
          </div>

          {/* Stat 2: 99% */}
          <div 
            className="brutalist-border" 
            style={{
              backgroundColor: 'var(--secondary-container)',
              color: 'var(--black-pure)',
              padding: '24px 32px',
              borderRadius: 'var(--rounded-default)',
              boxShadow: 'var(--shadow-offset) var(--shadow-offset) 0px #ffffff',
              minWidth: '180px',
              textAlign: 'center'
            }}
          >
            <div className="display-lg" style={{ fontSize: '48px', margin: 0, fontWeight: 900 }}>
              99%
            </div>
            <div className="label-md" style={{ fontSize: '12px', marginTop: '4px' }}>
              SATISFACTION RATE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
