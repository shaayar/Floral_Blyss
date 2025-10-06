import React, { useState, useEffect, useCallback } from 'react';

// 1. Define Slide Data outside the component to prevent re-creation on re-render.
const SLIDE_DATA = [
    {
        id: 1,
        title: "BLOOMING ELEGANCE",
        subtitle: "FRESH ROSES",
        caption: "DISCOVER THE BEAUTY OF NATURE",
        backgroundImageUrl: "/bouquet-1.jpg",
        buttonText: "SHOP ROSES",
        link: "#"
    },
    {
        id: 2,
        title: "SEASONAL COLLECTION",
        subtitle: "SPRING BOUQUETS",
        caption: "HANDCRAFTED WITH LOVE",
        backgroundImageUrl: "/bouquet-2.jpg",
        buttonText: "VIEW COLLECTION",
        link: "#"
    },
    {
        id: 3,
        title: "WEDDING FLORALS",
        subtitle: "ELEGANT ARRANGEMENTS",
        caption: "MAKE YOUR DAY SPECIAL",
        backgroundImageUrl: "/bouquet-3.jpg",
        buttonText: "EXPLORE WEDDING",
        link: "/flowers/wedding"
    },
    {
        id: 4,
        title: "EXOTIC ORCHIDS",
        subtitle: "PREMIUM SELECTION",
        caption: "LUXURY BLOOMS FOR YOU",
        backgroundImageUrl: "/bouquet-4.jpg",
        buttonText: "SHOP ORCHIDS",
        link: "/flowers/orchids"
    },
    {
        id: 5,
        title: "GIFT BOUQUETS",
        subtitle: "EXPRESS YOUR FEELINGS",
        caption: "PERFECT FOR EVERY OCCASION",
        backgroundImageUrl: "/bouquet-5.jpg",
        buttonText: "SEND FLOWERS",
        link: "/flowers/gifts"
    }
];

const SLIDE_INTERVAL = 3000; // 3 seconds interval for auto-play

const FutureFavouritesSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = SLIDE_DATA.length;

    // 2. Optimized Handler for manual dot navigation using useCallback
    const goToSlide = useCallback((index) => {
        // Ensures the index is within bounds before setting state
        if (index >= 0 && index < totalSlides) {
            setCurrentSlide(index);
        }
    }, [totalSlides]);

    // 3. Auto-play functionality with functional update for efficiency
    useEffect(() => {
        const interval = setInterval(() => {
            // Functional update: uses the previous state, no need to include 'currentSlide' in dependencies
            setCurrentSlide(prevSlide => (prevSlide + 1) % totalSlides);
        }, SLIDE_INTERVAL);

        // Cleanup: critical for performance to stop interval on unmount
        return () => clearInterval(interval);
    }, [totalSlides]); // Only depends on totalSlides, which is constant here.

    // 4. Render the component structure
    return (
        <section className="relative w-full h-screen overflow-hidden" role="region" aria-label="Flower Shop Showcase Slider">
            {/* The slide rendering part */}
            {SLIDE_DATA.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out flex items-center justify-center ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    style={{ backgroundImage: `url(${slide.backgroundImageUrl})` }}
                    // A11y: Mark only the active slide as visible/current for screen readers
                    aria-hidden={index !== currentSlide}
                    aria-current={index === currentSlide ? "page" : undefined}
                >
                    {/* Dark overlay for better text readability */}
                    {/* <div className="absolute inset-0 bg-black bg-opacity-10"></div> */}
                    
                    {/* Content Overlay/Container */}
                    <div className="text-center text-white z-10 px-4">
                        {/* Use role="status" for live updates in screen readers (optional but good for dynamic content) */}
                        <div className="mb-8" role="status" aria-live="polite">
                            <p className="text-lg uppercase tracking-wider">{slide.caption}</p>
                            <h1 className="text-5xl md:text-6xl font-bold my-4">{slide.title}</h1>
                            <h2 className="text-3xl md:text-4xl font-light">{slide.subtitle}</h2>
                        </div>
                        <a href={slide.link} className="inline-block bg-pink-500 hover:bg-pink-600 text-white py-3 px-8 rounded-full font-bold no-underline transition-colors duration-300">
                            {slide.buttonText}
                        </a>
                    </div>
                </div>
            ))}

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex z-20" role="tablist" aria-label="Slider Navigation">
                {SLIDE_DATA.map((_, index) => (
                    <button
                        key={index}
                        className={`border-none rounded-full w-3 h-3 mx-1.5 cursor-pointer transition-all duration-300 ${index === currentSlide ? 'bg-white w-8' : 'bg-white bg-opacity-50 hover:bg-opacity-75'}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}: ${SLIDE_DATA[index].subtitle}`}
                        // A11y: Standard tablist/tab pattern for interactive controls
                        role="tab"
                        aria-selected={index === currentSlide}
                        tabIndex={index === currentSlide ? 0 : -1} // Only active dot is focusable by default
                    />
                ))}
            </div>
        </section>
    );
};

export default FutureFavouritesSlider;