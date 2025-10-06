import React from 'react';
// Assuming you are using an external CSS file for global styles like Tailwind imports
import "./App.css"; 

// Import all required components and sections
import NavBar from './components/NavBar';
import HeroSlider from './sections/HeroSlider';
import ProductsShowcase from './sections/ProductsShowcase';
import FutureFavouritesSlider from './sections/FutureFavouritesSlider';

// Import remaining section components
import SloganMarquee from './sections/SloganMarquee';
import Testimonials from './sections/Testimonials';
import Footer from './sections/Footer';


function App() {
  return (
    // The main app container uses a clean, light background color matching the theme
    <div className="bg-white text-gray-800 antialiased min-h-screen">
      
      {/* 1. Top Bar Menu (Sticky) */}
      <NavBar />
      
      {/* Main Content Area */}
      <main>
        
        {/* 2. Hero Section with Slider */}
        <HeroSlider />
        
        {/* 3. Products Showcase with Filters */}
        <ProductsShowcase />
        
        {/* 4. Future Favourites (Slider) */}
        <FutureFavouritesSlider />
        
        {/* 5. Marquee-like Section for Slogan */}
        <SloganMarquee />
        
        {/* 6. Testimonial / Target Audience */}
        <Testimonials />
        
      </main>
      
      {/* 7. Footer Section with Quick Call */}
      <Footer />
    </div>
  );
}

export default App;
