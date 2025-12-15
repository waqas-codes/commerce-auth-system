import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {

    const token = localStorage.getItem("token")
    console.log(`token is : ${token}`)
    if(!token) toast.error("please loggin first!")

    axios.get("http://localhost:3001/api/products", {
      headers: {
        "token-auth": token
      }
    })
      .then(res => {
        setProducts(res.data)
        console.log(res.data)
      }).catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
  <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
    Products
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {products.map(product => (
      <div
        key={product._id}
        className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-2xl transition duration-300"
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-40 object-cover rounded-xl mb-4"
        />

        <h3 className="text-lg font-semibold text-gray-800 mb-2 ">
          <Link to={'/product/'+product.id}>{product.title}</Link>
        </h3>

        <p className="text-xl font-bold text-green-600">
          ${product.price}
        </p>
      </div>
    ))}
  </div>
</div>

  
)}

export default Products