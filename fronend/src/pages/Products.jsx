import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/api/products")
      .then(res => {
        setProducts(res.data)
        console.log(res.data)
      }).catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div>

      <h2>Products</h2>

      {products.map(product => (
        <div key={product.id}>
          <p><strong>ID:</strong> {product._id}</p>
          <p><strong>Title:</strong> {product.title}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <img src={product.image} alt={product.title} width="150" />
          <hr />
        </div>
      ))}
    </div>
  
)}

export default Products