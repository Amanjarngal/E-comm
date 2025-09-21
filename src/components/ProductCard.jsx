// src/components/ProductCard.jsx
import React, { useState } from "react";

const ProductCard = ({ product }) => {
  if (!product) return null;

  const [userRating, setUserRating] = useState(product.ratingValue || 0);

  // Render clickable stars
  const renderStars = () => {
    return [...Array(5)].map((_, index) => {
      const ratingValue = index + 1;
      return (
        <span
          key={ratingValue}
          onClick={() => setUserRating(ratingValue)}
          className={`cursor-pointer text-base sm:text-lg md:text-xl ${
            ratingValue <= userRating ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          ★
        </span>
      );
    });
  };

  return (
    <div className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 bg-white">
      {/* HOT Tag */}
      {product.isHot && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs sm:text-sm font-bold px-2 py-1 rounded">
          HOT
        </span>
      )}

      <div className="p-3 sm:p-4 flex flex-col items-center">
        {/* Image Wrapper */}
        <div className="bg-gray-100 w-full h-40 sm:h-48 md:h-56 flex items-center justify-center mb-3 sm:mb-4 rounded-md">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="max-h-32 sm:max-h-40 md:max-h-48 object-contain"
          />
        </div>

        {/* Product Name */}
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 text-center mb-2">
          {product.name}
        </h3>

        {/* Rating Section */}
        <div className="flex items-center justify-center space-x-1 mb-2">
          {renderStars()}
          <span className="text-xs sm:text-sm text-gray-600 ml-1 sm:ml-2">
            ({product.ratingCount || 0})
          </span>
        </div>

        {/* Price Section */}
        <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600">
            ${product.discountPrice.toFixed(2)}
          </span>
          <span className="text-xs sm:text-sm md:text-base line-through text-gray-400">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-xs sm:text-sm font-semibold text-red-500">
            {product.discountPercent}% Off
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
