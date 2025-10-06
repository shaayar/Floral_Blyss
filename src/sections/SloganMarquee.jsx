import React from 'react';

// The slogan content repeated multiple times for a seamless loop
const SLOGAN = "FRESHNESS GUARANTEED • HAND-TIED PERFECTION • SAME-DAY DELIVERY • ";
const REPEATED_SLOGAN = SLOGAN.repeat(3); // Reduced repetition - CSS handles the rest

/**
 * Creates a horizontally scrolling text banner (marquee effect) using CSS animations.
 * Features pause-on-hover and improved accessibility.
 */
function SloganMarquee() {
  return (
    <section 
      className="relative w-full overflow-hidden bg-emerald-800 py-6 md:py-8" 
      aria-label="Brand Slogan Marquee"
    >
      {/* Marquee Content Wrapper */}
      <div className="marquee-wrapper flex">
        {/* First copy of the slogan */}
        <div className="marquee-content flex-shrink-0">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase text-white tracking-widest inline-block">
            {REPEATED_SLOGAN}
          </p>
        </div>
        
        {/* Second copy of the slogan - creates seamless loop */}
        <div className="marquee-content flex-shrink-0" aria-hidden="true">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase text-white tracking-widest inline-block">
            {REPEATED_SLOGAN}
          </p>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .marquee-wrapper {
          display: flex;
          width: fit-content;
          animation: marquee-scroll 10s linear infinite;
        }

        .marquee-wrapper:hover {
          animation-play-state: paused;
        }

        .marquee-content {
          padding-right: 2rem;
        }

        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Smooth performance optimization */
        .marquee-wrapper {
          will-change: transform;
        }
      `}</style>
    </section>
  );
}

export default SloganMarquee;