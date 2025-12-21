import React from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'

const Navbar = () => {

    const navigate = useNavigate()

    const handleLogin = () => {
        const token = localStorage.getItem("token")

        if (token) {
            toast.info("User already logged in")
        } else {
            navigate("/login")
        }
    }

    const handleLogout = () => {
        const token = localStorage.getItem("token")

        if (!token) {
            toast.error("Already logged out")
            navigate("/login")
            return
        }

        localStorage.removeItem("token")
        toast.success("Logged out successfully")
        navigate("/login")
    }

    return (
        <div className="bg-[#0B2E33] h-20 flex items-center shadow-md">
            <nav className="w-full px-10 flex justify-between items-center text-white">

                <h1 className="text-2xl font-semibold">MyStore</h1>

                <ul className="flex gap-10 text-lg">
                    {["home", "products", "about", "contact"].map((item) => (
                        <li key={item}>
                            <NavLink
                                to={`/${item}`}
                                className={({ isActive }) =>
                                    `relative pb-1 transition
                                     after:absolute after:left-0 after:bottom-0 after:h-[2px]
                                     after:bg-[#10B981] after:transition-all
                                     ${isActive ? "text-[#10B981] after:w-full" : "after:w-0 hover:after:w-full"}`
                                }
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* ✅ BOTH BUTTONS ALWAYS VISIBLE */}
                <div className="flex gap-4">
                    <button
                        onClick={handleLogin}
                        className="px-5 py-2 rounded-md border hover:bg-[#0fa66f] transition"
                    >
                        Login
                    </button>

                    <button
                        onClick={handleLogout}
                        className="px-5 py-2 rounded-md border hover:bg-[#0fa66f] transition"
                    >
                        Logout
                    </button>
                </div>

            </nav>
        </div>
    )
}

export default Navbar
