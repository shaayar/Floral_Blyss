import React, { useState, useMemo } from 'react';

// --- Dummy Data for Floral Products ---
const FLORAL_PRODUCTS = [
  { id: 1, name: 'Rose Dream Bouquet', price: 49.99, category: 'Bouquets', imageClass: 'bg-rose-100' },
  { id: 2, name: 'Elegant Orchid Pot', price: 79.99, category: 'Plants', imageClass: 'bg-emerald-100' },
  { id: 3, name: 'Sunshine Arrangement', price: 59.99, category: 'Arrangements', imageClass: 'bg-yellow-100' },
  { id: 4, name: 'Small Succulent Set', price: 24.99, category: 'Plants', imageClass: 'bg-green-100' },
  { id: 5, name: 'Lilly Centerpiece', price: 65.00, category: 'Arrangements', imageClass: 'bg-blue-100' },
  { id: 6, name: 'Anniversary Classic', price: 89.99, category: 'Bouquets', imageClass: 'bg-red-100' },
  { id: 7, name: 'Get Well Bloom Box', price: 39.99, category: 'Bouquets', imageClass: 'bg-purple-100' },
  { id: 8, name: 'Fiddle Leaf Fig', price: 120.00, category: 'Plants', imageClass: 'bg-gray-200' },
  { id: 9, name: 'Seasonal Mix Vase', price: 75.00, category: 'Arrangements', imageClass: 'bg-orange-100' },
];

// Define all available categories, including 'All'
const CATEGORIES = ['All', 'Bouquets', 'Arrangements', 'Plants'];

// --- Placeholder for the ProductCard Component ---
// This will be replaced by the actual component in the next step.
const ProductCardPlaceholder = ({ product }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
    {/* Placeholder Image Block */}
    <div className={`h-48 ${product.imageClass} flex items-center justify-center`}>
      <span className="text-gray-500 text-sm">Image Placeholder</span>
    </div>
    <div className="p-5 text-center">
      <h3 className="text-lg font-semibold text-gray-800 font-serif">{product.name}</h3>
      <p className="text-sm text-gray-500 mb-3">{product.category}</p>
      <p className="text-2xl font-bold text-emerald-700">${product.price.toFixed(2)}</p>
      <button className="mt-4 w-full bg-pink-600 text-white py-2 rounded-full hover:bg-pink-700 transition duration-200 text-sm">
        Add to Cart
      </button>
    </div>
  </div>
);


function ProductsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Memoize the filtering process for performance
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') {
      return FLORAL_PRODUCTS;
    }
    return FLORAL_PRODUCTS.filter(product => product.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section className="py-16 bg-stone-50" aria-labelledby="products-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 id="products-heading" className="text-4xl font-bold text-emerald-800 font-serif mb-3">
            Our Floral Collections
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the perfect arrangement for any occasion, hand-tied with care and delivered fresh.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 mb-12">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-5 py-2 rounded-full text-sm font-semibold transition duration-300 ease-in-out
                ${
                  category === selectedCategory
                    ? 'bg-pink-600 text-white shadow-lg' // Active style
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-pink-50 hover:border-pink-300' // Inactive style
                }
              `}
              aria-pressed={category === selectedCategory}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Responsive Product Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {filteredProducts.map(product => (
            // Using the placeholder ProductCard
            <ProductCardPlaceholder key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            No products found in this category.
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductsShowcase;