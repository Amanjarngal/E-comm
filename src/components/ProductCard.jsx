import React from 'react';
const ProductCard = ({ product }) => {
  if (!product) return null; // prevents crash if product is undefined

  const [userRating, setUserRating] = React.useState(null);
  const [message, setMessage] = React.useState('');

  const handleRatingClick = (rating) => {
    setUserRating(rating);
    setMessage(`You gave this product a rating of ${rating}.`);
  };

  const renderStars = (ratingValue) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`cursor-pointer text-xl ${i <= ratingValue ? 'text-yellow-400' : 'text-gray-300'}`}
          onClick={() => handleRatingClick(i)}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      {product.isHot && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          HOT
        </span>
      )}
      <div className="p-4 flex flex-col items-center">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-contain mb-4"
        />
        <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">
          {product.name}
        </h3>

        {/* Rating Section */}
        <div className="flex items-center justify-center space-x-1 mb-2">
          {renderStars(userRating || product.ratingValue)}
        </div>

        {message && (
          <p className="text-green-500 text-sm font-medium text-center mt-1 mb-2">
            {message}
          </p>
        )}

        <span className="text-xs text-gray-500 text-center mb-2">
          ({product.ratingCount} ratings)
        </span>

        {/* Price Section */}
        <div className="flex items-center justify-center space-x-2">
          <span className="text-xl font-bold text-gray-900">
            ${product.discountPrice.toFixed(2)}
          </span>
          <span className="text-sm line-through text-gray-400">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-xs font-semibold text-red-500">
            {product.discountPercent}% Off
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
