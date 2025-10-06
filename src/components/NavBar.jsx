import React, { useState } from 'react';

// New, elegant navigation links
const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Bouquets', href: '#' },
  { name: 'Plants', href: '#' },
  { name: 'About', href: '#' }, // Added About back for completeness
];

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Color Palette: Cream background, Deep Green Text, Dusty Rose/Pink Accent for CTA

  return (
    // Sticky Nav Container
    <header className="sticky top-0 z-50 w-full bg-transparent shadow-md backdrop-blur-sm transition-all duration-300">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main Navigation">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo/Branding: FLORA BLYSS (Deep Emerald) */}
          <div className="flex-shrink-0">
            <a href="#" className="text-3xl font-serif font-bold tracking-wide text-emerald-800 hover:text-emerald-600 transition duration-200" aria-label="FLORA BLYSS Home">
              FLORAL BLYSS
            </a>
          </div>

          <div className="flex items-center">
            {/* Desktop Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-pink-100 hover:text-emerald-800 transition duration-150"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:ml-6 md:block">
                <button
                    type="button"
                    className="rounded-full bg-pink-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition duration-200"
                >
                    Order Now
                </button>
            </div>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-emerald-800 hover:bg-pink-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-800"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                // Close Icon (X)
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Icon
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Content (Includes CTA at the bottom) */}
      {isMenuOpen && (
        <div className="md:hidden bg-pink-50" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-pink-200 hover:text-emerald-800 transition duration-150"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
            {/* Mobile CTA Button */}
            <div className="pt-2">
                <button
                    type="button"
                    className="w-full rounded-md bg-pink-600 px-3 py-2 text-base font-semibold text-white shadow-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition duration-200"
                    onClick={() => setIsMenuOpen(false)} // Close menu on click
                >
                    Order Now (Mobile)
                </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default NavBar;