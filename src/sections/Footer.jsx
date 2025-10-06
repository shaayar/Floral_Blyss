import React from 'react';

const quickLinks = [
    { name: 'FAQs', href: '#' },
    { name: 'Delivery Info', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Careers', href: '#' },
];

/**
 * Footer component with contact info, quick links, and a prominent CTA.
 */
function Footer() {
  
  // Icon placeholder component (using Lucide-React equivalent names)
  const SocialIcon = ({ iconName, href }) => (
    <a href={href} className="text-white hover:text-pink-400 transition duration-200" aria-label={iconName}>
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        {/* Simplified SVG paths for generic social icons */}
        {iconName === 'Facebook' && <path d="M12 2C6.477 2 2 6.477 2 12c0 5.084 3.791 9.358 8.75 10.048v-7.048h-2.5V12h2.5V9.5C10.75 6.476 13.5 4.5 16.5 4.5c1.5 0 2.89.13 3.3.076V7.5h-1.5c-1.8 0-2.164.73-2.164 2.118V12h3.5l-.558 3.048h-2.942V22C18.209 21.358 22 17.084 22 12 22 6.477 17.523 2 12 2z" />}
        {iconName === 'Instagram' && <path d="M12 2c-3.196 0-3.593.014-4.85.07c-1.257.056-2.106.315-2.85.603-.75.29-1.378.723-1.996 1.341s-1.051 1.246-1.34 1.996c-.288.744-.547 1.593-.603 2.85C2.014 8.407 2 8.804 2 12s.014 3.593.07 4.85c.056 1.257.315 2.106.603 2.85.29.75.723 1.378 1.341 1.996s1.246 1.051 1.996 1.34c.744.288 1.593.547 2.85.603C8.407 21.986 8.804 22 12 22s3.593-.014 4.85-.07c1.257-.056 2.106-.315 2.85-.603.75-.29 1.378-.723 1.996-1.341s1.051-1.246 1.34-1.996c.288-.744.547-1.593.603-2.85.056-1.257.07-1.654.07-4.85s-.014-3.593-.07-4.85c-.056-1.257-.315-2.106-.603-2.85-.29-.75-.723-1.378-1.341-1.996s-1.246-1.051-1.996-1.34c-.744-.288-1.593-.547-2.85-.603C15.593 2.014 15.196 2 12 2zm0 4.5c3.037 0 5.5 2.463 5.5 5.5S15.037 17.5 12 17.5 6.5 15.037 6.5 12 8.963 6.5 12 6.5zM17.5 7.5c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zM12 8c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z" />}
        {iconName === 'Twitter' && <path d="M22 4.02a9.712 9.712 0 0 1-2.8.76c.74-.44 1.29-.11 1.56-.63a9.728 9.728 0 0 1-3.05 1.16c-.68-.74-1.66-1.2-2.76-1.2C10.7 4.02 8.7 6.04 8.7 8.5v.5c-3.1-.15-5.9-.94-8-3.5-.32.61-.51 1.3-.51 2.07 0 1.45.74 2.76 1.88 3.53a4.922 4.922 0 0 1-2.23-.62c0 1.97 1.45 3.6 3.37 3.96a5.008 5.008 0 0 1-2.23.08c.53 1.66 2.08 2.87 3.86 2.9C6.46 17.6 4.8 18.02 3 18.02c-.34 0-.67-.02-1-.07 2.07 1.34 4.53 2.07 7.15 2.07 8.58 0 14.2-6.57 14.2-12.35 0-.19 0-.39-.01-.58a10.088 10.088 0 0 0 2.44-2.52z" />}
      </svg>
    </a>
  );

  return (
    <footer className="bg-emerald-800 text-white pt-16 pb-8" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
          
          {/* Logo and Contact Info (Column 1 & 2 on mobile) */}
          <div className="col-span-2 md:col-span-2 lg:col-span-3">
            <h3 className="text-3xl font-serif font-bold tracking-wide text-pink-400 mb-4">
                FLORA BLYSS
            </h3>
            <p className="text-sm text-gray-300 mb-4 max-w-sm">
              Your source for elegant, hand-tied bouquets and curated plants. Located in the heart of the city.
            </p>
            <p className="text-sm text-gray-300">
              Email: <a href="mailto:hello@florablyss.com" className="hover:text-pink-400">hello@florablyss.com</a>
            </p>
            <p className="text-sm text-gray-300">
              Address: 123 Bloom Street, City, State 90210
            </p>
          </div>

          {/* Quick Links (Column 3) */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-gray-300 hover:text-pink-400 transition duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media (Column 4) */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
                <SocialIcon iconName="Facebook" href="#" />
                <SocialIcon iconName="Instagram" href="#" />
                <SocialIcon iconName="Twitter" href="#" />
            </div>
          </div>
        </div>

        {/* Quick Call CTA Button (Full width bar) */}
        <div className="mt-12 pt-6 border-t border-emerald-700">
            <a 
                href="tel:+15551234567" 
                className="block w-full text-center bg-pink-600 text-white py-4 rounded-lg text-xl font-bold uppercase tracking-wider shadow-xl hover:bg-pink-700 transition duration-300"
            >
                Call Now: (555) 123-4567
            </a>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} FLORA BLYSS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
