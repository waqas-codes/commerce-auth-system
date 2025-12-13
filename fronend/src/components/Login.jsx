import axios from 'axios'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";

const Login = ({setLogin}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3001/api/user/login', {
            email,
            password
        }).then(res => {
            toast.success("Login successful!");
            setLogin(true)
            navigate("/home")
        })
        .catch(err => toast.error(err.response?.data || "Invalid email or password"))
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-slate-800 to-gray-900 p-4">
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl p-8 rounded-2xl w-full max-w-md">

                <h2 className="text-3xl font-bold text-center text-white mb-6">
                    Login
                </h2>

                <form className="space-y-5" onSubmit={handleSubmit}>

                    {/* Email */}
                    <div>
                        <label className="text-gray-200 text-sm">Email Address</label>
                        <input
                            type="email"
                            placeholder="example@gmail.com"
                            className="w-full mt-1 px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 
                            border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="text-gray-200 text-sm">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full mt-1 px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 
                            border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold 
                        transition shadow-lg hover:shadow-blue-600/30"
                    >
                        Login
                    </button>

                    {/* Footer */}
                    <p className="text-gray-300 text-sm text-center">
                        Don't have an account?
                        <NavLink to="/" className="text-blue-400 underline hover:text-blue-300 ml-1">
                            Register
                        </NavLink>
                    </p>

                </form>
            </div>
        </div>

    )
}

export default Login