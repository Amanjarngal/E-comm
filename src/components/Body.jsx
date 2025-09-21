import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ProductBanner from "./ProductBanner";
import FilterPanel from "./FilterPanel";
import ProductList from "./ProductList";

const Body = () => {
  const dummyProducts = [
  // Sneakers
  {
    id: 1,
    name: "Nike Air Max 270 React",
    price: 634.33,
    discountPrice: 299.43,
    discountPercent: 24,
    ratingValue: 4,
    ratingCount: 124,
    isHot: true,
    colors: ["blue", "black"],
    category: "Sneakers",
    imageUrl:
      "https://png.pngtree.com/png-vector/20250614/ourmid/pngtree-colorful-high-top-nike-sneakers-featuring-bold-blue-red-and-yellow-png-image_16535231.png",
  },
  {
    id: 2,
    name: "Nike Air Zoom Pegasus",
    price: 520.0,
    discountPrice: 389.99,
    discountPercent: 15,
    ratingValue: 5,
    ratingCount: 89,
    isHot: true,
    colors: ["red", "maroon"],
    category: "Sneakers",
    imageUrl:
      "https://png.pngtree.com/png-vector/20230501/ourmid/pngtree-sneakers-running-shoes-color-png-image_7078201.png",
  },
  {
    id: 3,
    name: "Nike React Infinity Run",
    price: 450.0,
    discountPrice: 349.99,
    discountPercent: 22,
    ratingValue: 3,
    ratingCount: 55,
    isHot: true,
    colors: ["white"],
    category: "Sneakers",
    imageUrl:
      "https://png.pngtree.com/png-vector/20250614/ourmid/pngtree-colorful-high-top-nike-sneakers-featuring-bold-blue-red-and-yellow-png-image_16535231.png",
  },
  {
    id: 4,
    name: "Classic White Sneakers",
    price: 90.0,
    discountPrice: 75.0,
    discountPercent: 16,
    ratingValue: 5,
    ratingCount: 345,
    isHot: true,
    colors: ["white"],
    category: "Sneakers",
    imageUrl:
      "https://png.pngtree.com/png-vector/20230501/ourmid/pngtree-sneakers-running-shoes-color-png-image_7078201.png",
  },
  {
    id: 5,
    name: "Urban Sneakers",
    price: 150.0,
    discountPrice: 120.0,
    discountPercent: 20,
    ratingValue: 4,
    ratingCount: 201,
    isHot: false,
    colors: ["gray", "black"],
    category: "Sneakers",
    imageUrl:
      "https://png.pngtree.com/png-vector/20250614/ourmid/pngtree-colorful-high-top-nike-sneakers-featuring-bold-blue-red-and-yellow-png-image_16535231.png",
  },

  // Bags
  {
    id: 6,
    name: "Designer Crossbody Bag",
    price: 520.0,
    discountPrice: 389.99,
    discountPercent: 15,
    ratingValue: 5,
    ratingCount: 89,
    isHot: true,
    colors: ["red", "maroon"],
    category: "Bags",
    imageUrl:
      "https://png.pngtree.com/png-vector/20230501/ourmid/pngtree-sneakers-running-shoes-color-png-image_7078201.png",
  },
  {
    id: 7,
    name: "Tan Leather Bag",
    price: 450.0,
    discountPrice: 349.99,
    discountPercent: 22,
    ratingValue: 3,
    ratingCount: 55,
    isHot: true,
    colors: ["tan"],
    category: "Bags",
    imageUrl:
      "https://png.pngtree.com/png-vector/20250614/ourmid/pngtree-colorful-high-top-nike-sneakers-featuring-bold-blue-red-and-yellow-png-image_16535231.png",
  },
  {
    id: 8,
    name: "Urban Backpack",
    price: 150.0,
    discountPrice: 120.0,
    discountPercent: 20,
    ratingValue: 4,
    ratingCount: 201,
    isHot: false,
    colors: ["gray", "black"],
    category: "Bags",
    imageUrl:
      "https://png.pngtree.com/png-vector/20230501/ourmid/pngtree-sneakers-running-shoes-color-png-image_7078201.png",
  },
  {
    id: 9,
    name: "Classic Travel Bag",
    price: 300.0,
    discountPrice: 240.0,
    discountPercent: 20,
    ratingValue: 5,
    ratingCount: 180,
    isHot: true,
    colors: ["brown"],
    category: "Bags",
    imageUrl:
      "https://png.pngtree.com/png-vector/20250614/ourmid/pngtree-colorful-high-top-nike-sneakers-featuring-bold-blue-red-and-yellow-png-image_16535231.png",
  },
  {
    id: 10,
    name: "Office Handbag",
    price: 220.0,
    discountPrice: 180.0,
    discountPercent: 18,
    ratingValue: 4,
    ratingCount: 99,
    isHot: false,
    colors: ["black"],
    category: "Bags",
    imageUrl:
      "https://png.pngtree.com/png-vector/20230501/ourmid/pngtree-sneakers-running-shoes-color-png-image_7078201.png",
  },

  // Boots
  {
    id: 11,
    name: "Hiking Boots",
    price: 180.0,
    discountPrice: 150.0,
    discountPercent: 17,
    ratingValue: 4,
    ratingCount: 98,
    isHot: false,
    colors: ["brown", "green"],
    category: "Boots",
    imageUrl:
      "https://png.pngtree.com/png-vector/20250614/ourmid/pngtree-colorful-high-top-nike-sneakers-featuring-bold-blue-red-and-yellow-png-image_16535231.png",
  },
  {
    id: 12,
    name: "Leather Ankle Boots",
    price: 220.0,
    discountPrice: 180.0,
    discountPercent: 18,
    ratingValue: 5,
    ratingCount: 178,
    isHot: false,
    colors: ["blue", "red"],
    category: "Boots",
    imageUrl:
      "https://png.pngtree.com/png-vector/20230501/ourmid/pngtree-sneakers-running-shoes-color-png-image_7078201.png",
  },
  {
    id: 13,
    name: "Classic Brown Boots",
    price: 250.0,
    discountPrice: 200.0,
    discountPercent: 20,
    ratingValue: 5,
    ratingCount: 310,
    isHot: true,
    colors: ["brown"],
    category: "Boots",
    imageUrl:
      "https://png.pngtree.com/png-vector/20250614/ourmid/pngtree-colorful-high-top-nike-sneakers-featuring-bold-blue-red-and-yellow-png-image_16535231.png",
  },
  {
    id: 14,
    name: "Snow Boots",
    price: 200.0,
    discountPrice: 160.0,
    discountPercent: 20,
    ratingValue: 4,
    ratingCount: 150,
    isHot: true,
    colors: ["black", "white"],
    category: "Boots",
    imageUrl:
      "https://png.pngtree.com/png-vector/20230501/ourmid/pngtree-sneakers-running-shoes-color-png-image_7078201.png",
  },
  {
    id: 15,
    name: "Chelsea Boots",
    price: 190.0,
    discountPrice: 160.0,
    discountPercent: 15,
    ratingValue: 5,
    ratingCount: 134,
    isHot: true,
    colors: ["black", "green"],
    category: "Boots",
    imageUrl:
      "https://png.pngtree.com/png-vector/20250614/ourmid/pngtree-colorful-high-top-nike-sneakers-featuring-bold-blue-red-and-yellow-png-image_16535231.png",
  },
];


  // states for sorting & pagination
  const [sortOrder, setSortOrder] = useState("asc");
  const [itemsPerPage, setItemsPerPage] = useState(6);

  // apply sorting
  const sortedProducts = [...dummyProducts].sort((a, b) =>
    sortOrder === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  );

  return (
    <div className="flex min-h-screen">
      {/* Sidebar always visible */}
      <aside className="w-72 md:w-80  ">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6">
        <ProductBanner />

        {/* Filter Bar */}
        <div className="mt-4 md:mt-8 flex justify-between items-center">
          <FilterPanel
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
            totalItems={sortedProducts.length}
          />
        </div>

        {/* Product Grid */}
        <div className="mt-6">
          <ProductList products={sortedProducts} itemsPerPage={itemsPerPage} />
        </div>
      </main>
    </div>
  );
};

export default Body;
