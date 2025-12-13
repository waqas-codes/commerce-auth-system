import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios'
import { toast } from "react-toastify";
const Signin = ({setLogin}) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = axios.post('http://localhost:3001/api/user/register', {
            name,
            email,
            password,
            address
        }).then(res => {
            toast.success(`${res.data.email} : is sucessfully registered!`)
            setLogin(true)
            setName("")
            setEmail("")
            setPassword("")
            setAddress("")
            navigate("/home");
        })
            .catch(err => {
                toast.error(err.response.data);;
            });

    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-slate-800 to-gray-900 p-4">
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl p-8 rounded-2xl w-full max-w-md">

                <h2 className="text-3xl font-bold text-center text-white mb-6">
                    Welcome
                </h2>

                <form className="space-y-5" onSubmit={handleSubmit}>

                    {/* Name */}
                    <div>
                        <label className="text-gray-200 text-sm">Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full mt-1 px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            required
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="text-gray-200 text-sm">Email Address</label>
                        <input
                            type="email"
                            placeholder="example@gmail.com"
                            className="w-full mt-1 px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
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
                            className="w-full mt-1 px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>

                    {/* Address */}
                    <div>
                        <label className="text-gray-200 text-sm">Address</label>
                        <textarea
                            placeholder="Enter your address"
                            rows="3"
                            className="w-full mt-1 px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            onChange={(e) => setAddress(e.target.value)}
                            value={address}
                        ></textarea>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition shadow-lg hover:shadow-blue-600/30"
                    >
                        Sign in
                    </button>
                    <p className="text-gray-300 text-sm text-center">
                        Already have an account?
                        <NavLink to="/login" className="text-blue-400 underline hover:text-blue-300 ml-1">
                            Login
                        </NavLink>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signin;
