import React from 'react';

interface ReadyToSaveProps {
  onStartClick?: () => void;
}

export const ReadyToSave: React.FC<ReadyToSaveProps> = ({ onStartClick }) => {
  return (
    <div 
      style={{
        padding: '100px 0',
        width: '100%',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {/* Target/Swirl outline shape top right */}
      <div 
        className="cartoon-shape" 
        style={{
          right: '8%',
          top: '15%',
          opacity: 0.3,
          color: '#000000'
        }}
      >
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5" strokeDasharray="4 4" />
          <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2.5" />
          <path d="M12 2V6M12 18V22M2 12H6M18 12H22" stroke="currentColor" strokeWidth="2.5" />
        </svg>
      </div>

      {/* Chain link outline shape bottom left */}
      <div 
        className="cartoon-shape" 
        style={{
          left: '8%',
          bottom: '15%',
          opacity: 0.3,
          color: '#000000'
        }}
      >
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 15L15 9" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
          <rect x="3" y="13" width="10" height="6" rx="3" transform="rotate(-45 3 13)" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <rect x="11" y="5" width="10" height="6" rx="3" transform="rotate(-45 11 5)" stroke="currentColor" strokeWidth="2.5" fill="none" />
        </svg>
      </div>

      <div className="container-desktop" style={{ position: 'relative' }}>
        
        {/* Main Card Container */}
        <div 
          className="brutalist-border brutalist-shadow" 
          style={{
            backgroundColor: 'var(--primary-container)',
            borderRadius: 'var(--rounded-default)',
            padding: '60px 40px',
            textAlign: 'center',
            position: 'relative'
          }}
        >
          {/* Top-left Star Badge icon */}
          <div 
            className="brutalist-border" 
            style={{
              position: 'absolute',
              top: '-24px',
              left: '-24px',
              backgroundColor: '#ffffff',
              width: '56px',
              height: '56px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 'var(--rounded-default)',
              boxShadow: '4px 4px 0px #000000',
              zIndex: 3
            }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="var(--secondary-container)" stroke="#000" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Heading */}
          <h2 className="display-lg" style={{ 
            fontSize: '56px', 
            marginBottom: '16px',
            color: 'var(--black-pure)' 
          }}>
            READY TO SAVE?
          </h2>

          {/* Subtext */}
          <p className="body-lg" style={{ 
            color: 'var(--black-pure)', 
            maxWidth: '520px', 
            margin: '0 auto 32px auto',
            fontWeight: 600
          }}>
            Stop worrying about internet connections or bookmarks. Get your content offline in seconds.
          </p>

          {/* Start button */}
          <button 
            className="btn-brutalist btn-brutalist-black label-md" 
            style={{ 
              fontSize: '18px', 
              letterSpacing: '0.05em',
              padding: '18px 40px',
              borderRadius: 'var(--rounded-md)',
              marginBottom: '32px'
            }}
            onClick={onStartClick}
          >
            START NOW — FREE
          </button>

          {/* Badges container */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap'
          }}>
            <span className="badge-brutalist"># TIKTOK</span>
            <span className="badge-brutalist"># YT</span>
            <span className="badge-brutalist"># INSTA</span>
          </div>

        </div>

      </div>
    </div>
  );
};
