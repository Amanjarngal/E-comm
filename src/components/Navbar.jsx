// Navbar.jsx
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
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

        {/* Menu */}
        <ul className="flex space-x-8 text-sm font-medium">
          <li className="text-blue-500 cursor-pointer">HOME</li>
          <li className="cursor-pointer hover:text-blue-500">BAG</li>
          <li className="cursor-pointer hover:text-blue-500">SNEAKERS</li>
          <li className="cursor-pointer hover:text-blue-500">BELT</li>
          <li className="cursor-pointer hover:text-blue-500">CONTACT</li>
        </ul>

        {/* Cart */}
        <div className="flex items-center space-x-2">
          <ShoppingCart size={20} />
          <span className="text-sm">Items</span>
          <span className="text-gray-500 text-sm">$0.00</span>
        </div>
      </nav>
    </header>
  );
}
