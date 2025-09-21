// src/components/ProductList.jsx
import React, { useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // ✅ Only 6 per page

  // Calculate pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Slice products for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="w-full">
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-10">
        <div className="flex justify-center items-center w-full bg-gray-50 py-4 flex-wrap gap-3">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-10 h-10 flex items-center justify-center text-sm md:text-base font-medium rounded-md transition-colors
                ${
                  currentPage === i + 1
                    ? "bg-sky-500 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
