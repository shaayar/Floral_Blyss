import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Using a popular icon library for simplicity

// --- Dummy Data for Slider Content ---
const SLIDER_DATA = [
  { 
    id: 1, 
    title: 'ELEGANCE IN BLOOM', 
    subtitle: 'Crafting Your Perfect Moment', 
    image: 'bg-[url("./bouquet-1.jpg")]' 
  },
  { 
    id: 2, 
    title: 'FRESHNESS GUARANTEED', 
    subtitle: 'Hand-Tied Perfection, Delivered Daily', 
    image: 'bg-[url("./bouquet-2.jpg")]' 
  },
  { 
    id: 3, 
    title: 'WEDDING & EVENTS', 
    subtitle: 'Designing Dreams, One Petal at a Time', 
    image: 'bg-[url("./bouquet-3.jpg")]' 
  },
];

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = SLIDER_DATA.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };
  
  // Tailwind class for the accent button color (Dusty Rose)
  const CTA_STYLE = 'bg-pink-600 hover:bg-pink-700 focus:ring-pink-500';

  return (
    // Outer container: Full width, set height, relative for absolute children
    <div className="relative h-[85vh] overflow-hidden">
      
      {/* --- Slider Content Container --- */}
      <div 
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }} // Horizontal translation for animation
      >
        {SLIDER_DATA.map((slide, index) => (
          // Individual Slide Item: Full width/height, background image, content overlay
          <div
            key={slide.id}
            className={`min-w-full h-full bg-cover bg-center ${slide.image} flex items-center justify-center`}
            role="group"
            aria-label={`Slide ${index + 1} of ${totalSlides}`}
          >
            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-black/40"></div>
            
            {/* Text Content */}
            <div className="relative z-10 text-center p-6 max-w-4xl text-white">
              <p className="text-xl font-light tracking-widest uppercase mb-4 text-pink-200">
                {slide.subtitle}
              </p>
              <h1 className="text-5xl md:text-7xl font-bold font-serif leading-tight mb-8">
                {slide.title}
              </h1>
              <button
                type="button"
                className={`px-8 py-3 rounded-full text-lg font-semibold uppercase tracking-wider shadow-xl transition duration-300 ${CTA_STYLE}`}
              >
                Shop Collections
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* --- Slider Navigation Controls (Arrows) --- */}
      {['left', 'right'].map((direction) => (
        <button
          key={direction}
          onClick={direction === 'left' ? prevSlide : nextSlide}
          className={`absolute top-1/2 -translate-y-1/2 p-3 bg-white/30 text-white rounded-full hover:bg-white/50 transition duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-pink-500 ${direction === 'left' ? 'left-4' : 'right-4'}`}
          aria-label={`${direction === 'left' ? 'Previous' : 'Next'} Slide`}
        >
          {direction === 'left' ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
        </button>
      ))}

      {/* --- Pagination Dots --- */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {SLIDER_DATA.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition duration-300 border-2 border-white ${
              index === currentSlide ? 'bg-pink-600 border-pink-600 transform scale-125' : 'bg-transparent hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSlider;