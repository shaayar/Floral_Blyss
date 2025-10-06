import React from 'react';

/**
 * Reusable component to display a single floral product.
 * @param {object} product - Product data including name, price, category, and imageClass.
 */
function ProductCard({ product }) {
  return (
    // Outer container with hover effect and elegant styling
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100">
      
      {/* Product Image Placeholder */}
      <div className={`h-48 ${product.imageClass} flex items-center justify-center bg-cover bg-center`}>
        {/* Placeholder text for actual image */}
        <span className="text-gray-500 text-sm italic p-4 bg-white/70 rounded-lg">
          {product.name} Image
        </span>
      </div>
      
      <div className="p-6 text-center">
        {/* Product Name */}
        <h3 className="text-xl font-semibold text-gray-800 font-serif mb-1 truncate" title={product.name}>
          {product.name}
        </h3>
        
        {/* Product Category (optional detail) */}
        <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">{product.category}</p>
        
        {/* Product Price */}
        <p className="text-3xl font-extrabold text-emerald-700 mb-4">
          ${product.price ? product.price.toFixed(2) : '0.00'}
        </p>

        {/* CTA Button: Dusty Rose Accent */}
        <button
          type="button"
          className="mt-2 w-full bg-pink-600 text-white py-2.5 rounded-full font-medium uppercase text-sm tracking-wider shadow-md hover:bg-pink-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;