import React from 'react';

export const Header: React.FC = () => {
  return (
    <header style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 0 20px 0',
      position: 'relative'
    }}>
      {/* Speech bubble banner */}
      <div 
        className="brutalist-border label-md" 
        style={{
          backgroundColor: '#ffffff',
          padding: '6px 16px',
          borderRadius: '9999px',
          boxShadow: '4px 4px 0px #000000',
          marginBottom: '24px',
          position: 'relative',
          display: 'inline-block',
          zIndex: 2,
          fontWeight: 800
        }}
      >
        PASTE • SAVE • DONE
        {/* Speech bubble tail */}
        <div style={{
          position: 'absolute',
          bottom: '-12px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '0',
          height: '0',
          borderLeft: '10px solid transparent',
          borderRight: '10px solid transparent',
          borderTop: '12px solid #000000',
          zIndex: 1
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-8px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '0',
          height: '0',
          borderLeft: '8px solid transparent',
          borderRight: '8px solid transparent',
          borderTop: '9px solid #ffffff',
          zIndex: 2
        }}></div>
      </div>

      {/* Main Logo and Brand Name */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        zIndex: 2,
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        {/* Logo box */}
        <div 
          className="brutalist-border" 
          style={{
            backgroundColor: 'var(--primary-container)',
            width: '80px',
            height: '80px',
            boxShadow: '6px 6px 0px #000000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            overflow: 'hidden'
          }}
        >
          <img 
            src="/icon-192.png" 
            alt="Next Save Logo" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover' 
            }} 
          />
        </div>

        {/* Title */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start'
        }}>
          <h1 className="headline-xl" style={{ 
            margin: 0, 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px', 
            flexWrap: 'wrap',
            lineHeight: 0.95
          }}>
            <span>NEXT</span>
            <span style={{
              backgroundColor: '#000000',
              color: '#ffffff',
              padding: '2px 12px',
              borderRadius: 'var(--rounded-default)',
              display: 'inline-block'
            }}>LEVEL</span>
          </h1>
          <h1 className="headline-xl" style={{ margin: 0, lineHeight: 0.95 }}>
            DOWNLOADS
          </h1>
        </div>
      </div>
    </header>
  );
};
