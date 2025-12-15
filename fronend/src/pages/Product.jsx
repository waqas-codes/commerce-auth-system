import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
const Product = () => {
    const navigate = useNavigate()
    const param = useParams()
    const [product, setProduct] = React.useState()

    useEffect(() => {

        const token = localStorage.getItem("token")
        if (!token) toast.error("please login fisrt!")
        axios.get("http://localhost:3001/api/product?pid=" + param.id, {
            headers: {
                "token-auth": token
            }
        })
            .then(res => {
                console.log(res.data)
                setProduct(res.data)
            }).catch(err => {
                console.log(err)
            })
    }, [])

    return (

        product ?
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 flex items-center justify-center px-6 py-10">

                <div className="max-w-6xl w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

                    {/* Image Section */}
                    <div className="bg-black/30 flex items-center justify-center p-10">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full max-w-md rounded-2xl shadow-xl object-cover hover:scale-105 transition duration-300"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="p-10 text-white flex flex-col justify-between">

                        <div>
                            <span className="inline-block bg-emerald-500/20 text-emerald-400 px-4 py-1 rounded-full text-sm font-medium mb-4">
                                {product.category}
                            </span>

                            <h1 className="text-4xl font-extrabold mb-4">
                                {product.title}
                            </h1>

                            <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                {product.description}
                            </p>

                            <div className="flex items-center gap-6 mb-6">
                                <h2 className="text-4xl font-bold text-emerald-400">
                                    ${product.price}
                                </h2>

                                <span className="text-sm text-gray-400">
                                    Stock: <span className="text-white font-semibold">{product.stock}</span>
                                </span>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4 mt-8">
                            <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 hover:cursor-pointer text-white py-4 rounded-xl font-semibold text-lg transition"
                            onClick={() => navigate("/products")}
                            >
                                back to Products
                            </button>

                            <button className="flex-1 border border-white/30 hover:bg-white/10 text-white py-4 rounded-xl font-semibold text-lg transition">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            : <p>product not!</p>

    )
}

export default Product