// Footer.jsx
import { Facebook, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-blue-200 text-gray-800 pt-12 pb-6">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                {/* Top Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Left - About */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
                                <span className="text-white font-bold text-lg">◆</span>
                            </div>
                            <h2 className="font-bold text-xl">E-Comm</h2>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed max-w-xs">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry&apos;s standard dummy
                            text ever since the 1500s, when an unknown printer.
                        </p>
                    </div>

                    {/* Middle - Follow Us */}

                    <div>
                        <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
                        <p className="text-sm text-gray-700 leading-relaxed mb-4 max-w-xs">
                            Since the 1500s, <br />
                            when an unknown printer took <br />
                            a galley of type and scrambled.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-700 hover:text-blue-600">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-700 hover:text-blue-600">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>


                    {/* Right - Contact Us */}
                    <div>
                        <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            E-Comm, 4578 <br />
                            Marmora Road, <br />
                            Glasgow D04 89GR
                        </p>
                    </div>
                </div>

                {/* Bottom Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                    <div>
                        <h4 className="font-semibold text-base mb-3">Information</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li className="hover:text-blue-600 cursor-pointer">About Us</li>
                            <li className="hover:text-blue-600 cursor-pointer">Information</li>
                            <li className="hover:text-blue-600 cursor-pointer">Privacy Policy</li>
                            <li className="hover:text-blue-600 cursor-pointer">Terms & Conditions</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-base mb-3">Service</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li className="hover:text-blue-600 cursor-pointer">About Us</li>
                            <li className="hover:text-blue-600 cursor-pointer">Information</li>
                            <li className="hover:text-blue-600 cursor-pointer">Privacy Policy</li>
                            <li className="hover:text-blue-600 cursor-pointer">Terms & Conditions</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-base mb-3">My Account</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li className="hover:text-blue-600 cursor-pointer">About Us</li>
                            <li className="hover:text-blue-600 cursor-pointer">Information</li>
                            <li className="hover:text-blue-600 cursor-pointer">Privacy Policy</li>
                            <li className="hover:text-blue-600 cursor-pointer">Terms & Conditions</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-base mb-3">Our Offers</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li className="hover:text-blue-600 cursor-pointer">About Us</li>
                            <li className="hover:text-blue-600 cursor-pointer">Information</li>
                            <li className="hover:text-blue-600 cursor-pointer">Privacy Policy</li>
                            <li className="hover:text-blue-600 cursor-pointer">Terms & Conditions</li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-300 mt-10 pt-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-600">
                    <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
                    <div className="flex space-x-4 mt-3 md:mt-0">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/American_Express_logo.svg/120px-American_Express_logo.svg.png"
                            alt="American Express"
                            className="h-6 object-contain"
                        />

                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                            alt="MasterCard"
                            className="h-5"
                        />
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                            alt="PayPal"
                            className="h-5"
                        />
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                            alt="Visa"
                            className="h-5"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}
