import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Sidebar = () => {
  const [priceRange, setPriceRange] = useState(25.99);
  const [selectedColor, setSelectedColor] = useState("blue");
  const [openSection, setOpenSection] = useState(null);

  const handlePriceChange = (e) => {
    setPriceRange(parseFloat(e.target.value));
  };

  const toggleSection = (index) => {
    if (window.innerWidth < 768) {
      setOpenSection(openSection === index ? null : index);
    }
  };

  const colorOptions = [
    { name: "blue", hex: "#3B82F6" },
    { name: "red", hex: "#EF4444" },
    { name: "black", hex: "#1F2937" },
    { name: "yellow", hex: "#FACC15" },
    { name: "pink", hex: "#EC4899" },
    { name: "lightgray", hex: "#F3F4F6" },
  ];

  const brandOptions = [
    { name: "Nike", count: 99 },
    { name: "Adidas", count: 99 },
    { name: "Siemens", count: 99 },
  ];

  const hotDealsOptions = [
    { name: "Nike", count: 2 },
    { name: "Airmax", count: 48 },
    { name: "Nike", count: 14 },
    { name: "Adidas", count: 15 },
    { name: "Vans", count: 23 },
    { name: "All Stars", count: 1 },
    { name: "Adidas", count: 95 },
  ];

  const sidebarSections = [
    {
      title: "Hot Deals",
      content: (
        <div>
          {hotDealsOptions.map((deal, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-2 text-sm md:text-lg"
            >
              <span className="text-gray-700 cursor-pointer hover:text-blue-500">
                {deal.name}
              </span>
              <span className="text-gray-400">{deal.count}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "PRICES",
      content: (
        <div>
          <p className="text-sm md:text-base text-gray-500 mb-2 md:mb-3">
            Range:{" "}
            <span className="font-semibold text-gray-800">
              $13.99 - ${priceRange.toFixed(2)}
            </span>
          </p>
          <input
            type="range"
            min="13.99"
            max="100"
            step="0.01"
            value={priceRange}
            onChange={handlePriceChange}
            className="w-full h-2 md:h-3 bg-blue-200 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${
                ((priceRange - 13.99) / (100 - 13.99)) * 100
              }%, #E5E7EB ${
                ((priceRange - 13.99) / (100 - 13.99)) * 100
              }%, #E5E7EB 100%)`,
            }}
          />
        </div>
      ),
    },
    {
      title: "COLOR",
      content: (
        <div className="flex flex-wrap gap-3 md:gap-4">
          {colorOptions.map((color) => (
            <div
              key={color.name}
              className={`w-8 h-8 md:w-12 md:h-12 rounded-full border-2 cursor-pointer transition-all duration-200 ${
                selectedColor === color.name
                  ? "ring-2 md:ring-4 ring-offset-1 md:ring-offset-2 ring-blue-500"
                  : "hover:ring-2 hover:ring-offset-1 md:hover:ring-offset-2 hover:ring-gray-300"
              }`}
              style={{ backgroundColor: color.hex, borderColor: color.hex }}
              onClick={() => setSelectedColor(color.name)}
            ></div>
          ))}
        </div>
      ),
    },
    {
      title: "BRAND",
      content: (
        <div>
          {brandOptions.map((brand, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-2 text-sm md:text-lg"
            >
              <span className="text-gray-700 cursor-pointer hover:text-blue-500">
                {brand.name}
              </span>
              <span className="text-gray-400">{brand.count}</span>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <aside className="w-full md:w-80  p-4 md:p-6 font-sans antialiased">
      <div className="space-y-4 md:space-y-6">
        {sidebarSections.map((section, index) => {
          const isOpen = openSection === index;
          return (
            <div
              key={index}
              className="bg-gray-100 rounded-xl md:rounded-2xl shadow p-4 md:p-6"
            >
              {/* Header */}
              <button
                className="w-full flex justify-between items-center text-lg md:text-xl font-bold text-gray-900 md:cursor-default"
                onClick={() => toggleSection(index)}
              >
                {section.title}
                <span className="md:hidden">
                  {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </span>
              </button>

              {/* Content */}
              <div
                className={`mt-3 transition-all duration-300 overflow-hidden 
                  ${
                    isOpen
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0 md:max-h-none md:opacity-100"
                  }`}
              >
                {section.content}
              </div>
            </div>
          );
        })}

        {/* More Button */}
        <div className="flex items-center justify-center p-2 md:p-4">
          <button className="w-full bg-gray-100 rounded-xl md:rounded-2xl shadow py-2 md:py-5 text-sm md:text-lg text-gray-800 font-bold hover:bg-gray-50 transition-colors duration-200">
            MORE
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
