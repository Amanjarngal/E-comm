import React from "react";
import Sidebar from "./Sidebar";
import ProductBanner from "./ProductBanner";
import FilterPanel from "./FilterPanel";
import ProductCard from "./ProductCard";

const Body = () => {
    const dummyProducts = [
  {
    id: 1,
    name: 'Nike Air Max 270 React',
    price: 634.33,
    discountPrice: 299.43,
    discountPercent: 24,
    ratingValue: 4,
    ratingCount: 124,
    isHot: true,
    colors: ['blue', 'black'],
    category: 'Sneakers',
    imageUrl: 'https://m.media-amazon.com/images/I/41iWFl52nuL._SR290,290_.jpg',
  },
  {
    id: 2,
    name: 'Designer Crossbody Bag',
    price: 520.00,
    discountPrice: 389.99,
    discountPercent: 15,
    ratingValue: 5,
    ratingCount: 89,
    isHot: true,
    colors: ['red', 'maroon'],
    category: 'Bags',
    imageUrl: 'https://m.media-amazon.com/images/I/41iWFl52nuL._SR290,290_.jpg',
  },
  {
    id: 3,
    name: 'Tan Leather Bag',
    price: 450.00,
    discountPrice: 349.99,
    discountPercent: 22,
    ratingValue: 3,
    ratingCount: 55,
    isHot: true,
    colors: ['tan'],
    category: 'Bags',
    imageUrl: 'https://m.media-amazon.com/images/I/41iWFl52nuL._SR290,290_.jpg',
  },
  {
    id: 4,
    name: 'Urban Backpack',
    price: 150.00,
    discountPrice: 120.00,
    discountPercent: 20,
    ratingValue: 4,
    ratingCount: 201,
    isHot: false,
    colors: ['gray', 'black'],
    category: 'Bags',
    imageUrl: 'https://m.media-amazon.com/images/I/41iWFl52nuL._SR290,290_.jpg',
  },
  {
    id: 5,
    name: 'Classic White Sneakers',
    price: 90.00,
    discountPrice: 75.00,
    discountPercent: 16,
    ratingValue: 5,
    ratingCount: 345,
    isHot: true,
    colors: ['white'],
    category: 'Sneakers',
    imageUrl: 'https://m.media-amazon.com/images/I/41iWFl52nuL._SR290,290_.jpg',
  },
  {
    id: 6,
    name: 'Hiking Boots',
    price: 180.00,
    discountPrice: 150.00,
    discountPercent: 17,
    ratingValue: 4,
    ratingCount: 98,
    isHot: false,
    colors: ['brown', 'green'],
    category: 'Boots',
    imageUrl: 'https://m.media-amazon.com/images/I/41iWFl52nuL._SR290,290_.jpg',
  },
  {
    id: 7,
    name: 'Leather Wallet',
    price: 60.00,
    discountPrice: 45.00,
    discountPercent: 25,
    ratingValue: 5,
    ratingCount: 150,
    isHot: true,
    colors: ['black', 'brown'],
    category: 'Accessories',
    imageUrl: 'https://m.media-amazon.com/images/I/41iWFl52nuL._SR290,290_.jpg',
  },
  {
    id: 8,
    name: 'Stylish Watch',
    price: 250.00,
    discountPrice: 200.00,
    discountPercent: 20,
    ratingValue: 4,
    ratingCount: 76,
    isHot: false,
    colors: ['silver', 'gold'],
    category: 'Accessories',
    imageUrl: 'https://m.media-amazon.com/images/I/41iWFl52nuL._SR290,290_.jpg',
  },
  {
    id: 9,
    name: 'Fitness Tracker',
    price: 120.00,
    discountPrice: 99.00,
    discountPercent: 18,
    ratingValue: 5,
    ratingCount: 400,
    isHot: true,
    colors: ['black', 'pink'],
    category: 'Gadgets',
    imageUrl: 'https://m.media-amazon.com/images/I/41iWFl52nuL._SR290,290_.jpg',
  },
  {
    id: 10,
    name: 'Aviator Sunglasses',
    price: 85.00,
    discountPrice: 70.00,
    discountPercent: 17,
    ratingValue: 4,
    ratingCount: 220,
    isHot: false,
    colors: ['black', 'gold'],
    category: 'Accessories',
    imageUrl: 'https://m.media-amazon.com/images/I/41iWFl52nuL._SR290,290_.jpg',
  },
  {
    id: 11,
    name: 'Running Shorts',
    price: 40.00,
    discountPrice: 30.00,
    discountPercent: 25,
    ratingValue: 4,
    ratingCount: 180,
    isHot: true,
    colors: ['blue', 'gray'],
    category: 'Apparel',
    imageUrl: 'https://m.media-amazon.com/images/I/41iWFl52nuL._SR290,290_.jpg',
  },
  {
    id: 12,
    name: 'Casual T-Shirt',
    price: 25.00,
    discountPrice: 19.99,
    discountPercent: 20,
    ratingValue: 5,
    ratingCount: 500,
    isHot: false,
    colors: ['white', 'black'],
    category: 'Apparel',
    imageUrl: 'https://m.media-amazon.com/images/I/41iWFl52nuL._SR290,290_.jpg',
  },
  {
    id: 13,
    name: 'Hoodie',
    price: 70.00,
    discountPrice: 55.00,
    discountPercent: 21,
    ratingValue: 4,
    ratingCount: 90,
    isHot: true,
    colors: ['gray', 'navy'],
    category: 'Apparel',
    imageUrl: 'https://m.media-amazon.com/images/I/41iWFl52nuL._SR290,290_.jpg',
  },
  {
    id: 14,
    name: 'Smart Speaker',
    price: 100.00,
    discountPrice: 80.00,
    discountPercent: 20,
    ratingValue: 5,
    ratingCount: 300,
    isHot: false,
    colors: ['white', 'black'],
    category: 'Gadgets',
    imageUrl: 'https://m.media-amazon.com/images/I/41iWFl52nuL._SR290,290_.jpg',
  },
  {
    id: 15,
    name: 'Wireless Headphones',
    price: 190.00,
    discountPrice: 140.00,
    discountPercent: 26,
    ratingValue: 4,
    ratingCount: 110,
    isHot: true,
    colors: ['black'],
    category: 'Gadgets',
    imageUrl: 'https://m.media-amazon.com/images/I/41iWFl52nuL._SR290,290_.jpg',
  },
];
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside >
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1  p-6">
        <ProductBanner/>
        <div className="mt-8">
          <FilterPanel/>
        </div>
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {dummyProducts.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
      </main>
    </div>
  );
};

export default Body;
