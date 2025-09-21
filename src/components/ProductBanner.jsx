import React from 'react';

const ProductBanner = () => {
  return (
    <div className="relative bg-blue-400 px-6 max-w-4xl mx-auto flex flex-col md:flex-row items-center shadow-lg rounded-lg">
      {/* Text Content */}
      <div className="text-white text-center md:text-left mb-4 md:mb-0 md:mr-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">Adidas Men Running Sneakers</h2>
        <p className="text-sm md:text-base mb-4">Performance and design. Taken right to the edge.</p>
        <span className="text-white underline cursor-pointer text-sm md:text-base font-semibold">
          SHOP NOW
        </span>
      </div>

      {/* Shoe Image */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        <img 
          src="https://png.pngtree.com/png-vector/20250327/ourmid/pngtree-adidas-men-s-sneakers-stylish-sports-shoes-for-comfort-and-performance-png-image_15878848.png" 
          alt="Adidas Men Running Sneakers" 
          className="w-full max-w-xs md:max-w-sm object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

export default ProductBanner;
