import React from 'react';
import { Grid, List, ChevronDown } from 'lucide-react';

const FilterPanel = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-gray-100 border-b border-gray-300 space-y-3 md:space-y-0">
      
      {/* Left section: Item count + Filters */}
      <div className="flex items-center space-x-6">
        {/* Item Count */}
        <span className="text-gray-700 text-sm font-medium">13 Items</span>

        {/* Sort By Dropdown */}
        <div className="flex items-center space-x-2">
          <span className="text-gray-600 text-sm font-medium">Sort By:</span>
          <div className="relative">
            <select
              className="appearance-none bg-white border border-gray-300 rounded-md py-1.5 pl-3 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              defaultValue="Name"
            >
              <option>Name</option>
              <option>Price</option>
              <option>Newest</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Show Dropdown */}
        <div className="flex items-center space-x-2">
          <span className="text-gray-600 text-sm font-medium">Show:</span>
          <div className="relative">
            <select
              className="appearance-none bg-white border border-gray-300 rounded-md py-1.5 pl-3 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              defaultValue="12"
            >
              <option>6</option>
              <option>12</option>
              <option>24</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Right section: View toggles */}
      <div className="flex items-center space-x-2">
        {/* Grid View Button */}
        <button className="p-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-200 transition-colors">
          <Grid className="h-5 w-5" />
        </button>
        {/* List View Button */}
        <button className="p-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-200 transition-colors">
          <List className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
