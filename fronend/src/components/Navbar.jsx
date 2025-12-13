import React from 'react'
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="bg-[#0B2E33] h-20 flex items-center shadow-md">
            <nav className="w-full px-10 flex justify-between items-center text-white">

                {/* Logo */}
                <h1 className="text-2xl font-semibold tracking-wide">MyStore</h1>

                {/* Menu */}
                <ul className="flex gap-10 text-lg">

                    <li>
                        <NavLink
                            to="/home"
                            className={({ isActive }) =>
                                `
                                relative pb-1 transition duration-300
                                after:content-[''] after:absolute after:left-0 after:bottom-0
                                after:h-[2px] after:bg-[#10B981] after:transition-all after:duration-300
                                ${isActive ? "text-[#10B981] after:w-full" : "text-white after:w-0 hover:after:w-full"}
                                `
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/products"
                            className={({ isActive }) =>
                                `
                                relative pb-1 transition duration-300
                                after:content-[''] after:absolute after:left-0 after:bottom-0
                                after:h-[2px] after:bg-[#10B981] after:transition-all after:duration-300
                                ${isActive ? "text-[#10B981] after:w-full" : "text-white after:w-0 hover:after:w-full"}
                                `
                            }
                        >
                            Products
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `
                                relative pb-1 transition duration-300
                                after:content-[''] after:absolute after:left-0 after:bottom-0
                                after:h-[2px] after:bg-[#10B981] after:transition-all after:duration-300
                                ${isActive ? "text-[#10B981] after:w-full" : "text-white after:w-0 hover:after:w-full"}
                                `
                            }
                        >
                            About
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `
                                relative pb-1 transition duration-300
                                after:content-[''] after:absolute after:left-0 after:bottom-0
                                after:h-[2px] after:bg-[#10B981] after:transition-all after:duration-300
                                ${isActive ? "text-[#10B981] after:w-full" : "text-white after:w-0 hover:after:w-full"}
                                `
                            }
                        >
                            Contact
                        </NavLink>
                    </li>

                </ul>

                {/* Logout Button */}
                <button className="bg-transparent border-1 px-5 py-2 rounded-md font-medium hover:bg-[#0fa66f] hover: cursor-pointer transition duration-200">
                    Logout
                </button>

            </nav>
        </div>
    )
}

export default Navbar
