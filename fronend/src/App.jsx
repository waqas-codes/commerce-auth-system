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
import Signin from './components/Signin'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from './components/Login'
function App() {

  const [login ,setLogin] = useState(false)



  return (
    <>
      <ToastContainer />
      { login && <Navbar /> }
      <Routes>
        <Route path='/' element={<Signin setLogin={setLogin} />}/>
        <Route path='/login' element={<Login setLogin={setl} />}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
