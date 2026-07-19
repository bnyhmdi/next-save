import React, { useMemo } from 'react';

interface Particle {
  id: number;
  shape: 'star' | 'triangle' | 'circle' | 'square' | 'cross';
  color: string;
  size: number;
  top: number; // percentage
  left: number; // percentage
  animationName: string;
  duration: number; // seconds
  delay: number; // seconds
}

interface FloatingParticlesProps {
  count?: number;
}

export const FloatingParticles: React.FC<FloatingParticlesProps> = ({ count = 20 }) => {
  const shapes: Particle['shape'][] = ['star', 'triangle', 'circle', 'square', 'cross'];
  
  const colors = [
    'var(--primary-container)',    // Lime Green
    'var(--secondary-container)',  // Pink
    '#ffffff',                     // White
    '#5e5d69',                     // Gray
    'var(--black-pure)'            // Black
  ];

  const animationNames = ['float-drift-a', 'float-drift-b', 'float-drift-c'];

  const particlesList = useMemo(() => {
    const list: Particle[] = [];
    for (let i = 0; i < count; i++) {
      list.push({
        id: i,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.floor(Math.random() * 16) + 10, // 10px to 25px
        top: Math.floor(Math.random() * 90) + 5,   // 5% to 95%
        left: Math.floor(Math.random() * 90) + 5,  // 5% to 95%
        animationName: animationNames[Math.floor(Math.random() * animationNames.length)],
        duration: Math.floor(Math.random() * 20) + 15, // 15s to 35s (low frequency)
        delay: Math.floor(Math.random() * -35)       // start animation instantly with delay
      });
    }
    return list;
  }, [count]);

  const renderShapeSvg = (shape: Particle['shape'], color: string, size: number) => {
    switch (shape) {
      case 'star':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="#000" strokeWidth="2.5" strokeLinejoin="miter">
            <path d="M12 2L15 9H22L16 14L18 21L12 17L6 21L8 14L2 9H9L12 2Z" />
          </svg>
        );
      case 'triangle':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="#000" strokeWidth="2.5" strokeLinejoin="miter">
            <path d="M12 3L22 20H2L12 3Z" />
          </svg>
        );
      case 'circle':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3">
            <circle cx="12" cy="12" r="8" fill={color === 'var(--black-pure)' ? 'none' : color} />
          </svg>
        );
      case 'square':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="#000" strokeWidth="3">
            <rect x="4" y="4" width="16" height="16" rx="1" />
          </svg>
        );
      case 'cross':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color === 'var(--black-pure)' ? '#000000' : color} strokeWidth="4.5" strokeLinecap="square">
            <path d="M12 4V20M4 12H20" stroke="#000" strokeWidth="6" />
            <path d="M12 4V20M4 12H20" stroke="currentColor" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      overflow: 'hidden',
      zIndex: 1
    }}>
      {particlesList.map((p) => (
        <div
          key={p.id}
          className="particle-item"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            animationName: p.animationName,
            animationDuration: `${p.duration}s`,
            animationIterationCount: 'infinite',
            animationTimingFunction: 'ease-in-out',
            animationDelay: `${p.delay}s`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {renderShapeSvg(p.shape, p.color, p.size)}
        </div>
      ))}
    </div>
  );
};
