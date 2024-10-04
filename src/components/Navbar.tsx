// components/Navbar.js
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; 
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full bg-gray-900 text-white">
            <nav className="container mx-auto flex items-center justify-between py-4 px-6">
                {/* Logo or Brand Name */}
                <div className="text-2xl font-bold">MyPortfolio</div>

                {/* Menu Button for Mobile */}
                <button onClick={toggleMenu} className="md:hidden text-2xl focus:outline-none">
                    {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                </button>

                {/* Links for Desktop */}
                <ul className={`md:flex space-x-8 ${isOpen ? "block" : "hidden"} md:block mt-4 md:mt-0`}>
                    <li className="hover:text-teal-400 cursor-pointer">Home</li>
                    <li className="hover:text-teal-400 cursor-pointer">Projects</li>
                    <li className="hover:text-teal-400 cursor-pointer">About</li>
                    <li className="hover:text-teal-400 cursor-pointer">Contact</li>
                </ul>

                {/* Call-to-Action Button */}
                <button className="hidden md:block bg-teal-500 hover:bg-teal-400 text-white font-semibold py-2 px-4 rounded">
                    Hire Me
                </button>
            </nav>
        </div>
    );
};

export default Navbar;
