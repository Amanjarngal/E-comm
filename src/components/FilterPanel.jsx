// src/components/FilterPanel.jsx
import { i } from "framer-motion/client";
import React from "react";
import { FaTh, FaBars } from "react-icons/fa"

const FilterPanel = ({
  sortOrder,
  setSortOrder,
  itemsPerPage,
  setItemsPerPage,
  totalItems,
}) => {
  return (
    <div className="w-full bg-gray-100 shadow p-4 rounded-md flex flex-wrap items-center justify-between gap-6">
      {/* Left section: Items + Sort + Show */}
      <div className="flex items-center gap-6 flex-wrap">
        {/* Total Items */}
        <div className="text-sm text-gray-800 font-medium">
          {totalItems} Items
        </div>

        {/* Sort By */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-black">Sort By</span>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:ring-1 focus:ring-blue-400 focus:outline-none"
          >
            <option value="asc">Name</option>
            <option value="desc">Name (Z - A)</option>
          </select>
        </div>

        {/* Items Per Page */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Show</span>
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:ring-1 focus:ring-blue-400 focus:outline-none"
          >
            <option value={6}>6</option>
            <option value={9}>9</option>
            <option value={12}>12</option>
          </select>
        </div>
      </div>

      {/* Right section: View Icons */}
      <div className="flex items-center overflow-hidden rounded-md">
        <button className="px-3 py-2 bg-blue-50 text-blue-500">
          <FaTh />
        </button>
        <button className="px-3 py-2 text-gray-500 hover:text-blue-500">
          <FaBars />
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
