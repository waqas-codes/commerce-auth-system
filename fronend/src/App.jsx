import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Products from './pages/Products'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
function App() {



  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
