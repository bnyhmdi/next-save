import React, { useState } from 'react';

const API_BASE = window.location.hostname === 'localhost' 
  ? 'http://localhost:5000' 
  : '';

export const Downloader: React.FC = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [videoData, setVideoData] = useState<any>(null);

  const handleDownloadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setIsSuccess(false);
    setVideoData(null);

    if (!url.trim()) {
      setErrorMsg('Error: Please enter a video URL to save.');
      return;
    }

    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      setErrorMsg('Error: Invalid URL. Make sure it starts with http:// or https://');
      return;
    }

    setLoading(true);
    setProgress(15);
    setStatusText('Contacting Next Save local backend server...');

    // Dynamic label changes to keep the user engaged
    const textInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 40) {
          setStatusText('Resolving TikTok redirection URL parameters...');
          return prev + 10;
        } else if (prev < 70) {
          setStatusText('Extracting high-definition media stream segments...');
          return prev + 8;
        } else if (prev < 90) {
          setStatusText('Watermark stripping and server cache validation...');
          return prev + 4;
        }
        return prev;
      });
    }, 900);

    try {
      // Query the backend server
      const response = await fetch(`${API_BASE}/api/download?url=${encodeURIComponent(url.trim())}`);
      
      clearInterval(textInterval);

      if (response.ok) {
        const data = await response.json();
        
        setProgress(100);
        setStatusText('Extraction successful! File compiled.');
        setVideoData(data);

        // Hold success screen for a fraction of a second to show 100% completion
        setTimeout(() => {
          setLoading(false);
          setIsSuccess(true);
        }, 600);
      } else {
        let msg = 'Failed to extract video. Please verify the URL.';
        try {
          const errorData = await response.json();
          msg = errorData.error || msg;
        } catch (e) {
          msg = `Server Error (${response.status}): The backend returned an invalid response.`;
        }
        setErrorMsg(msg);
        setLoading(false);
      }
    } catch (err: any) {
      clearInterval(textInterval);
      console.error(err);
      setErrorMsg(`Connection Error: ${err.message || 'Cannot reach the backend downloader server.'}`);
      setLoading(false);
    }
  };

  const handleReset = () => {
    setUrl('');
    setIsSuccess(false);
    setProgress(0);
    setLoading(false);
    setErrorMsg('');
    setVideoData(null);
  };


  return (
    <section style={{
      margin: '40px 0',
      position: 'relative',
      zIndex: 5
    }}>
      <div className="card-brutalist" style={{
        backgroundColor: '#ffffff',
        padding: '32px 24px',
        textAlign: 'center'
      }}>
        {!loading && !isSuccess ? (
          <form onSubmit={handleDownloadSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Input Label container */}
            <div style={{ position: 'relative', width: '100%' }}>
              {/* Floating bubble text tag */}
              <div 
                className="brutalist-border label-md"
                style={{
                  backgroundColor: 'var(--secondary-container)',
                  padding: '4px 12px',
                  borderRadius: 'var(--rounded-sm)',
                  position: 'absolute',
                  top: '-18px',
                  right: '16px',
                  boxShadow: '2px 2px 0px #000',
                  transform: 'rotate(2deg)',
                  fontSize: '11px',
                  zIndex: 2
                }}
              >
                PASTE LINK HERE
              </div>

              {/* TextInput */}
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://www.tiktok.com/@user/video/..."
                className="brutalist-border"
                style={{
                  width: '100%',
                  height: '64px',
                  padding: '0 20px',
                  fontSize: '16px',
                  fontFamily: 'var(--font-mono)',
                  borderRadius: 'var(--rounded-default)',
                  outline: 'none',
                  backgroundColor: '#ffffff',
                  boxShadow: 'var(--shadow-offset) var(--shadow-offset) 0px var(--black-pure)',
                  transition: 'box-shadow 0.1s ease, transform 0.1s ease'
                }}
                onFocus={(e) => {
                  e.target.style.boxShadow = 'var(--shadow-offset) var(--shadow-offset) 0px var(--primary-container)';
                }}
                onBlur={(e) => {
                  e.target.style.boxShadow = 'var(--shadow-offset) var(--shadow-offset) 0px var(--black-pure)';
                }}
              />
            </div>

            {/* Error Notification */}
            {errorMsg && (
              <div 
                className="brutalist-border label-md"
                style={{
                  backgroundColor: 'var(--error-container)',
                  color: 'var(--on-error-container)',
                  padding: '12px',
                  borderRadius: 'var(--rounded-default)',
                  boxShadow: '3px 3px 0px var(--black-pure)',
                  textAlign: 'left',
                  marginTop: '10px'
                }}
              >
                ⚠ {errorMsg}
              </div>
            )}

            {/* Action Button */}
            <button
              type="submit"
              className="btn-brutalist btn-brutalist-primary"
              style={{
                width: '100%',
                height: '64px',
                fontSize: '22px'
              }}
            >
              DOWNLOAD NOW
            </button>
          </form>
        ) : loading ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
            <h3 className="headline-lg">SAVING YOUR MEDIA...</h3>
            
            {/* Stepped Progress Bar Container */}
            <div className="progress-bar-container">
              <div 
                className="progress-bar-fill" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            {/* Progress Status Metadata Label */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center',
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              fontWeight: 700
            }}>
              <span style={{ textTransform: 'uppercase' }}>{statusText}</span>
              <span className="badge-brutalist" style={{ padding: '2px 8px', boxShadow: 'none' }}>{progress}%</span>
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', textAlign: 'center' }}>
            
            {/* Success Icon */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
              <div 
                className="brutalist-border" 
                style={{
                  backgroundColor: 'var(--primary-container)',
                  borderRadius: '50%',
                  width: '64px',
                  height: '64px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '4px 4px 0px #000000'
                }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#000" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter"/>
                </svg>
              </div>
            </div>
            
            <h3 className="headline-lg">DOWNLOAD READY!</h3>

            {/* Dynamic Metadata Card */}
            {videoData && (
              <div 
                className="brutalist-border"
                style={{
                  backgroundColor: 'var(--surface-container-low)',
                  borderRadius: 'var(--rounded-default)',
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  textAlign: 'left',
                  flexWrap: 'wrap',
                  boxShadow: '3px 3px 0px #000'
                }}
              >
                {/* Video Cover Thumbnail */}
                {videoData.cover && (
                  <img 
                    src={videoData.cover} 
                    alt="Video thumbnail"
                    className="brutalist-border"
                    style={{
                      width: '80px',
                      height: '80px',
                      objectFit: 'cover',
                      borderRadius: 'var(--rounded-sm)',
                      boxShadow: '2px 2px 0px #000'
                    }}
                  />
                )}
                
                {/* Title & Author Description */}
                <div style={{ flex: 1, minWidth: '180px' }}>
                  <div 
                    className="label-md" 
                    style={{ 
                      fontSize: '11px', 
                      color: 'var(--on-surface-variant)', 
                      marginBottom: '4px' 
                    }}
                  >
                    @{videoData.author?.uniqueId || 'creator'} • {videoData.duration ? `${videoData.duration}s` : 'Video'}
                  </div>
                  <h4 
                    className="body-md" 
                    style={{ 
                      fontWeight: 800, 
                      color: 'var(--black-pure)',
                      margin: 0,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      lineHeight: '1.3'
                    }}
                  >
                    {videoData.title}
                  </h4>
                  
                  {/* Quality Badges */}
                  <div style={{ marginTop: '8px', display: 'flex', gap: '6px' }}>
                    {videoData.isHD ? (
                      <span 
                        className="badge-brutalist" 
                        style={{ 
                          backgroundColor: 'var(--primary-container)', 
                          fontSize: '10px', 
                          padding: '2px 6px',
                          boxShadow: 'none'
                        }}
                      >
                        HD QUALITY
                      </span>
                    ) : (
                      <span 
                        className="badge-brutalist" 
                        style={{ 
                          backgroundColor: 'var(--secondary-container)', 
                          fontSize: '10px', 
                          padding: '2px 6px',
                          boxShadow: 'none'
                        }}
                      >
                        SD COMPATIBLE
                      </span>
                    )}
                    <span 
                      className="badge-brutalist" 
                      style={{ 
                        fontSize: '10px', 
                        padding: '2px 6px',
                        boxShadow: 'none'
                      }}
                    >
                      NO WATERMARK
                    </span>
                  </div>
                </div>
              </div>
            )}

             <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '12px',
              marginTop: '10px'
            }}>
              <a 
                href={`${API_BASE}/api/stream?url=${encodeURIComponent(videoData.videoUrl)}&title=${encodeURIComponent(videoData.title)}&type=mp4`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brutalist btn-brutalist-primary"
                style={{ width: '100%', textDecoration: 'none' }}
              >
                DOWNLOAD VIDEO (MP4) {videoData?.isHD ? 'HD' : ''}
              </a>
              
              {videoData?.audioUrl && (
                <a 
                  href={`${API_BASE}/api/stream?url=${encodeURIComponent(videoData.audioUrl)}&title=${encodeURIComponent(videoData.title + '_audio')}&type=mp3`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-brutalist btn-brutalist-secondary"
                  style={{ width: '100%', textDecoration: 'none' }}
                >
                  DOWNLOAD AUDIO (MP3)
                </a>
              )}

              <button 
                onClick={handleReset}
                className="btn-brutalist btn-brutalist-black"
                style={{ width: '100%', marginTop: '8px' }}
              >
                START NEW DOWNLOAD
              </button>
            </div>

            {/* iOS Helper Tooltip */}
            <div 
              className="brutalist-border"
              style={{
                backgroundColor: 'var(--tertiary-container)',
                padding: '14px 18px',
                borderRadius: 'var(--rounded-default)',
                fontSize: '13px',
                textAlign: 'left',
                boxShadow: '4px 4px 0px #000',
                marginTop: '20px',
                fontFamily: 'var(--font-mono)',
                color: 'var(--black-pure)',
                lineHeight: '1.5'
              }}
            >
              <strong style={{ display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Tips iPhone / iOS:
              </strong>
              <p style={{ margin: '0 0 8px 0' }}>
                1. Tekan lama (long press) tombol download di atas, lalu pilih <strong>"Unduh File yang Ditautkan"</strong> (Download Linked File).
              </p>
              <p style={{ margin: 0 }}>
                2. Atau jika video sudah terlanjur berputar di layar, ketuk tombol <strong>Bagikan</strong> di bagian bawah Safari, lalu pilih <strong>"Simpan ke File"</strong> (Save to Files).
              </p>
            </div>
          </div>
        )}

        <div className="body-md" style={{
          marginTop: '24px',
          color: 'var(--on-surface-variant)',
          fontSize: '13px',
          lineHeight: '1.5'
        }}>
          No registration. High quality. Extremely fast.<br/>
          Just paste and grab your content in seconds.
        </div>
      </div>
    </section>
  );
};
