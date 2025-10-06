import React from 'react';

// --- Dummy Data for Testimonials ---
const TESTIMONIAL_DATA = [
  {
    id: 1,
    name: 'Sarah M.',
    title: 'Wedding Planner',
    feedback: "Flora Blyss designed the most breathtaking floral archway for our clients' wedding. Their attention to detail and ability to match our vision was outstanding.",
    avatarClass: 'bg-pink-100', // Placeholder avatar background
  },
  {
    id: 2,
    name: 'Ravi P.',
    title: 'Corporate Client',
    feedback: 'We use Flora Blyss for all our office arrangements. They are always fresh, delivered on time, and completely transform the space.',
    avatarClass: 'bg-emerald-100',
  },
  {
    id: 3,
    name: 'Lisa K.',
    title: 'Individual Customer',
    feedback: 'The "Rose Dream Bouquet" was perfect for my mother. The quality was exceptional, and the handwritten note was a lovely touch. Highly recommend!',
    avatarClass: 'bg-stone-100',
  },
];

/**
 * Section displaying customer testimonials in a responsive grid.
 */
function Testimonials() {
  return (
    <section className="py-20 bg-white" aria-labelledby="testimonial-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 id="testimonial-heading" className="text-4xl font-bold text-emerald-800 font-serif mb-3">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by wedding planners, businesses, and flower enthusiasts alike.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {TESTIMONIAL_DATA.map((t) => (
            <div 
              key={t.id} 
              className="bg-stone-50 p-8 rounded-2xl shadow-lg border border-gray-100 transition duration-300 hover:shadow-xl"
            >
              <blockquote className="italic text-gray-700 mb-6 relative">
                {/* Quote Icon */}
                <svg className="w-8 h-8 text-pink-500 absolute -top-4 -left-3 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.25 10c0-1.77-1.48-3.25-3.25-3.25s-3.25 1.48-3.25 3.25 1.48 3.25 3.25 3.25c1.77 0 3.25-1.48 3.25-3.25zm5.75 0c0-1.77-1.48-3.25-3.25-3.25s-3.25 1.48-3.25 3.25 1.48 3.25 3.25 3.25c1.77 0 3.25-1.48 3.25-3.25z"/>
                </svg>
                <p className="pl-5 text-lg leading-relaxed">
                    "{t.feedback}"
                </p>
              </blockquote>
              
              <div className="flex items-center pt-4 border-t border-gray-200">
                {/* Avatar Placeholder */}
                <div className={`w-12 h-12 rounded-full mr-4 ${t.avatarClass} flex items-center justify-center text-gray-600 font-bold uppercase`}>
                  {t.name.charAt(0)}
                </div>
                
                <div>
                  <p className="font-semibold text-emerald-800">{t.name}</p>
                  <p className="text-sm text-pink-600">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
