import React from 'react';

export const HowToUse: React.FC = () => {
  return (
    <section style={{
      margin: '80px 0',
      position: 'relative'
    }}>
      {/* Section Title */}
      <div style={{
        textAlign: 'center',
        marginBottom: '48px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h2 className="headline-lg" style={{ margin: '0 0 12px 0' }}>HOW TO USE</h2>
        <div style={{
          width: '80px',
          height: '6px',
          backgroundColor: '#000000',
          borderRadius: 'var(--rounded-full)'
        }}></div>
      </div>

      {/* Sticky Deck Cards */}
      <div className="sticky-deck">
        
        {/* Step 1: Lime green card */}
        <div 
          className="sticky-card" 
          style={{
            top: '80px',
            backgroundColor: 'var(--primary-container)',
            color: '#000000',
            zIndex: 10
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '32px',
            flexWrap: 'wrap-reverse',
            gap: '24px'
          }}>
            {/* Left Content */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '24px',
              flex: 1,
              minWidth: '280px'
            }}>
              <div 
                className="brutalist-border label-md" 
                style={{
                  backgroundColor: '#000000',
                  color: '#ffffff',
                  width: '56px',
                  height: '56px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  borderRadius: 'var(--rounded-default)',
                  flexShrink: 0
                }}
              >
                1
              </div>
              <div style={{ textAlign: 'left' }}>
                <h3 className="headline-lg" style={{ fontSize: '24px', marginBottom: '8px' }}>
                  COPY TIKTOK VIDEO URL
                </h3>
                <p className="body-md" style={{ fontWeight: 600 }}>
                  Open the TikTok app or website. Find the video you want to save, click on the "Share" button, and select "Copy Link".
                </p>
              </div>
            </div>

            {/* Right SVG graphic */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '120px',
              height: '120px',
              backgroundColor: '#ffffff',
              borderRadius: 'var(--rounded-default)',
              border: '3px solid #000000',
              boxShadow: '4px 4px 0px #000000',
              flexShrink: 0
            }}>
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="2" width="14" height="20" rx="3" stroke="#000" strokeWidth="2.5" />
                <path d="M12 18H12.01" stroke="#000" strokeWidth="3" strokeLinecap="round" />
                <rect x="8" y="5" width="8" height="10" rx="1" fill="var(--secondary-container)" stroke="#000" strokeWidth="2" />
                {/* TikTok logo symbol simplified */}
                <path d="M13 7V10C13 11 12.5 12 11.5 12C10.5 12 10 11 10 10C10 9 10.5 8 11.5 8V6C9.5 6 8 7.5 8 10C8 12.5 9.5 14 11.5 14C13.5 14 15 12.5 15 10V7H13Z" fill="#000" />
              </svg>
            </div>
          </div>
        </div>

        {/* Step 2: Pink card */}
        <div 
          className="sticky-card" 
          style={{
            top: '120px',
            backgroundColor: 'var(--secondary-container)',
            color: '#000000',
            zIndex: 11
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '32px',
            flexWrap: 'wrap',
            gap: '24px'
          }}>
            {/* Left SVG graphic */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '120px',
              height: '120px',
              backgroundColor: '#ffffff',
              borderRadius: 'var(--rounded-default)',
              border: '3px solid #000000',
              boxShadow: '4px 4px 0px #000000',
              flexShrink: 0
            }}>
              <svg width="85" height="85" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="#000" strokeWidth="2.5" />
                <path d="M3 10H21" stroke="#000" strokeWidth="2" />
                <rect x="6" y="12" width="12" height="4" rx="1" fill="var(--primary-container)" stroke="#000" strokeWidth="2" />
                <circle cx="6" cy="7.5" r="1" fill="#000" />
                <circle cx="9" cy="7.5" r="1" fill="#000" />
                <circle cx="12" cy="7.5" r="1" fill="#000" />
              </svg>
            </div>

            {/* Right Content */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '24px',
              flex: 1,
              minWidth: '280px'
            }}>
              <div style={{ textAlign: 'left' }}>
                <h3 className="headline-lg" style={{ fontSize: '24px', marginBottom: '8px' }}>
                  PASTE INTO NEXT SAVE
                </h3>
                <p className="body-md" style={{ fontWeight: 600 }}>
                  Head back to Next Save. Paste your URL into the input field at the top of the page. We will handle the link processing automatically.
                </p>
              </div>
              <div 
                className="brutalist-border label-md" 
                style={{
                  backgroundColor: '#000000',
                  color: '#ffffff',
                  width: '56px',
                  height: '56px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  borderRadius: 'var(--rounded-default)',
                  flexShrink: 0
                }}
              >
                2
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Lavender/Gray card */}
        <div 
          className="sticky-card" 
          style={{
            top: '160px',
            backgroundColor: 'var(--surface-container-highest)',
            color: '#000000',
            zIndex: 12
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '32px',
            flexWrap: 'wrap-reverse',
            gap: '24px'
          }}>
            {/* Left Content */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '24px',
              flex: 1,
              minWidth: '280px'
            }}>
              <div 
                className="brutalist-border label-md" 
                style={{
                  backgroundColor: '#000000',
                  color: '#ffffff',
                  width: '56px',
                  height: '56px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  borderRadius: 'var(--rounded-default)',
                  flexShrink: 0
                }}
              >
                3
              </div>
              <div style={{ textAlign: 'left' }}>
                <h3 className="headline-lg" style={{ fontSize: '24px', marginBottom: '8px' }}>
                  GRAB YOUR FILE
                </h3>
                <p className="body-md" style={{ fontWeight: 600 }}>
                  Choose your resolution or audio track, click on the download link, and save it onto your local device memory instantly.
                </p>
              </div>
            </div>

            {/* Right SVG graphic */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '120px',
              height: '120px',
              backgroundColor: '#ffffff',
              borderRadius: 'var(--rounded-default)',
              border: '3px solid #000000',
              boxShadow: '4px 4px 0px #000000',
              flexShrink: 0
            }}>
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6C5 2 4 3 4 4V20C4 21 5 22 6 22H18C19 22 20 21 20 20V8L14 2Z" stroke="#000" strokeWidth="2.5" strokeLinejoin="miter"/>
                <path d="M14 2V8H20" stroke="#000" strokeWidth="2" strokeLinejoin="miter"/>
                <path d="M12 11V17M12 17L9 14M12 17L15 14" stroke="#000" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"/>
              </svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
