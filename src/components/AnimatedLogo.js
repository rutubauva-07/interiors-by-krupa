import React from 'react';

function AnimatedLogo() {
  return (
    <div style={{ textAlign: 'center', margin: '40px 0', fontFamily: 'Lexend Deca, sans-serif' }}>
      {/* INTERIORS BY – simple typewriter */}
      <h1 style={{ 
        fontSize: '3.5rem', 
        fontWeight: '500', 
        letterSpacing: '8px', 
        margin: '0',
        textTransform: 'uppercase',
        color: '#000'
      }}>
        <span style={{ 
          display: 'inline-block',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          borderRight: '3px solid #d4af37',
          animation: 'typing 2.5s steps(20) forwards, blink 0.7s infinite'
        }}>
          INTERIORS
        </span>{' '}
        <span style={{ 
          display: 'inline-block',
          animation: 'fadeIn 1s forwards 2.5s',
          opacity: 0,
          fontWeight: '400',
          letterSpacing: '4px'
        }}>
          BY
        </span>
      </h1>

      {/* Krupa Handwriting + Underline */}
      <div style={{ marginTop: '-20px' }}>
        <svg width="380" height="100" viewBox="0 0 380 100" style={{ margin: '0 auto', display: 'block' }}>
          <path d="M40 70 Q90 20 150 60 Q210 100 270 50 Q320 10 350 65" 
                stroke="#000" strokeWidth="3" fill="none"
                strokeDasharray="1000" strokeDashoffset="1000"
                style={{ animation: 'draw 3s ease-in-out forwards 3s' }} />
          <path d="M60 65 Q110 35 160 70 Q210 105 260 60 Q300 25 340 75"
                stroke="#000" strokeWidth="2.5" fill="none"
                strokeDasharray="1000" strokeDashoffset="1000"
                style={{ animation: 'draw 3s ease-in-out forwards 3.3s' }} />
          {/* Thin underline under BY Krupa */}
          <line x1="120" y1="82" x2="340" y2="82" 
                stroke="#000" strokeWidth="1.5"
                strokeDasharray="500" strokeDashoffset="500"
                style={{ animation: 'draw 1.5s ease-in-out forwards 4s' }} />
        </svg>
      </div>

      <style jsx>{`
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        @keyframes blink {
          50% { border-color: transparent }
        }
        @keyframes fadeIn {
          to { opacity: 1 }
        }
        @keyframes draw {
          to { stroke-dashoffset: 0 }
        }
      `}</style>
    </div>
  );
}

export default AnimatedLogo;