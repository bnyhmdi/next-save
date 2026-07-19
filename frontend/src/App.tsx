import { useEffect } from 'react';
import { animate } from 'framer-motion';
import { Header } from './components/Header';
import { Downloader } from './components/Downloader';
import { HowToUse } from './components/HowToUse';
import { GlobalImpact } from './components/GlobalImpact';
import { ReadyToSave } from './components/ReadyToSave';
import { Footer } from './components/Footer';
import { FloatingParticles } from './components/FloatingParticles';

function App() {
  // Custom velocity kinetic scrolling handler for desktop viewports
  useEffect(() => {
    // Only run inertia scroll on desktop devices for best compatibility
    if (window.innerWidth <= 768) return;

    let targetY = window.scrollY;
    let currentY = window.scrollY;
    let isMoving = false;
    let animationFrameId: number | null = null;

    const onWheel = (e: WheelEvent) => {
      // Prevent sudden jumpy native scrolls
      e.preventDefault();

      // Speed multiplier for smooth momentum scrolling
      targetY += e.deltaY * 0.95;

      // Restrict target limits
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetY = Math.max(0, Math.min(targetY, maxScroll));

      if (!isMoving) {
        isMoving = true;
        animationFrameId = requestAnimationFrame(updateScroll);
      }
    };

    const updateScroll = () => {
      // Interpolation speed (lower = smoother/more glide)
      const lerp = 0.08;
      const diff = targetY - currentY;

      currentY += diff * lerp;

      // Native scroll update (maintaining sticky layout rendering)
      window.scrollTo(0, currentY);

      if (Math.abs(diff) > 0.4) {
        animationFrameId = requestAnimationFrame(updateScroll);
      } else {
        currentY = targetY;
        isMoving = false;
      }
    };

    // Keep state in sync with manual scrolling (like scrollbar drags or page keys)
    const onScroll = () => {
      if (!isMoving) {
        targetY = window.scrollY;
        currentY = window.scrollY;
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', onScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const handleStartNowClick = () => {
    const currentScroll = window.scrollY;
    animate(currentScroll, 0, {
      type: 'spring',
      stiffness: 80,
      damping: 15,
      mass: 0.8,
      onUpdate: (value) => {
        window.scrollTo(0, value);
      },
      onComplete: () => {
        const inputEl = document.querySelector('input');
        if (inputEl) {
          inputEl.focus();
        }
      }
    });
  };

  return (
    <div className="blueprint-grid" style={{ minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      
      {/* Section Stacking stylesheet variables/classes override */}
      <style>{`
        @media (max-width: 1024px) {
          .cartoon-shape {
            display: none !important;
          }
        }
      `}</style>

      {/* OVERLAPPING SECTION 1: HERO / DOWNLOADER */}
      <section className="panel-section panel-section-1 blueprint-grid">
        
        {/* Section 1 Decorations */}
        {/* Star Top-Left */}
        <div 
          className="cartoon-shape" 
          style={{
            top: '40px',
            left: '40px',
            color: '#555'
          }}
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#000" strokeWidth="2"/>
          </svg>
        </div>

        {/* Circle Top-Right */}
        <div 
          className="cartoon-shape" 
          style={{
            top: '120px',
            right: '80px',
            color: 'var(--secondary-container)'
          }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke="#000" strokeWidth="2.5" fill="none"/>
          </svg>
        </div>

        {/* Triangle Middle-Left */}
        <div 
          className="cartoon-shape" 
          style={{
            top: '280px',
            left: '60px',
            color: 'var(--primary-container)'
          }}
        >
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
            <path d="M12 3L22 21H2L12 3Z" stroke="#000" strokeWidth="2.5" fill="currentColor"/>
          </svg>
        </div>

        {/* Lightning Bolt Mid-Right */}
        <div 
          className="cartoon-shape" 
          style={{
            top: '340px',
            right: '60px',
            color: 'var(--primary)'
          }}
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#000" strokeWidth="2" />
          </svg>
        </div>

        <FloatingParticles count={25} />

        <div className="container-desktop" style={{ position: 'relative', zIndex: 10 }}>
          <Header />
          <Downloader />
        </div>
      </section>

      {/* OVERLAPPING SECTION 2: HOW TO USE */}
      <section className="panel-section panel-section-2 blueprint-grid">
        
        {/* Section 2 Decorations */}
        {/* Large overlapping outline flower */}
        <div 
          className="cartoon-shape" 
          style={{
            top: '20px',
            right: '-40px',
            opacity: 0.15,
            color: '#000000'
          }}
        >
          <svg width="220" height="220" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M18 12C19.1046 12 20 11.1046 20 10C20 8.89543 19.1046 8 18 8C16.8954 8 16 8.89543 16 10C16 11.1046 16.8954 12 18 12Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M18 16C19.1046 16 20 15.1046 20 14C20 12.8954 19.1046 12 18 12C16.8954 12 16 12.8954 16 14C16 15.1046 16.8954 16 18 16Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 20C13.1046 20 14 19.1046 14 18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18C10 19.1046 10.8954 20 12 20Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M6 16C7.10457 16 8 15.1046 8 14C8 12.8954 7.10457 12 6 12C4.89543 12 4 12.8954 4 14C4 15.1046 4.89543 16 6 16Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M6 12C7.10457 12 8 11.1046 8 10C8 8.89543 7.10457 8 6 8C4.89543 8 4 8.89543 4 10C4 11.1046 4.89543 12 6 12Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Pentagon Bottom-Left */}
        <div 
          className="cartoon-shape" 
          style={{
            bottom: '20px',
            left: '50px',
            opacity: 0.25,
            color: '#000000'
          }}
        >
          <svg width="45" height="45" viewBox="0 0 24 24" fill="none">
            <path d="M12 2.5L21.5 9L18 19.5H6L2.5 9L12 2.5Z" stroke="currentColor" strokeWidth="2.5" fill="none"/>
          </svg>
        </div>

        <FloatingParticles count={25} />

        <div className="container-desktop" style={{ position: 'relative', zIndex: 10 }}>
          <HowToUse />
        </div>
      </section>

      {/* OVERLAPPING SECTION 3: GLOBAL IMPACT */}
      <section className="panel-section panel-section-3">
        <FloatingParticles count={20} />
        <GlobalImpact />
      </section>

      {/* OVERLAPPING SECTION 4: READY TO SAVE */}
      <section className="panel-section panel-section-4 blueprint-grid-white">
        <FloatingParticles count={20} />
        <ReadyToSave onStartClick={handleStartNowClick} />
      </section>

      {/* OVERLAPPING SECTION 5: FOOTER */}
      <section className="panel-section panel-section-5">
        <FloatingParticles count={15} />
        <Footer />
      </section>

    </div>
  );
}

export default App;
