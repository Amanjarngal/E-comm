// Navbar.jsx
import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-sm bg-white">
      <nav className="max-w-[1500px] mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 rounded-lg bg-blue-500 flex items-center justify-center">
            <span className="text-white font-bold text-lg">◆</span>
          </div>
          <h1 className="text-xl font-bold">E-Comm</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          <li className="text-blue-500 cursor-pointer">HOME</li>
          <li className="cursor-pointer hover:text-blue-500">BAG</li>
          <li className="cursor-pointer hover:text-blue-500">SNEAKERS</li>
          <li className="cursor-pointer hover:text-blue-500">BELT</li>
          <li className="cursor-pointer hover:text-blue-500">CONTACT</li>
        </ul>

        {/* Cart + Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <ShoppingCart size={20} />
            <span className="text-sm">Items</span>
            <span className="text-gray-500 text-sm">$0.00</span>
          </div>

          {/* Hamburger (Mobile) */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 p-4 text-sm font-medium">
            <li className="text-blue-500 cursor-pointer">HOME</li>
            <li className="cursor-pointer hover:text-blue-500">BAG</li>
            <li className="cursor-pointer hover:text-blue-500">SNEAKERS</li>
            <li className="cursor-pointer hover:text-blue-500">BELT</li>
            <li className="cursor-pointer hover:text-blue-500">CONTACT</li>
          </ul>
        </div>
      )}
    </header>
  );
}
