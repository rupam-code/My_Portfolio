import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Skills from './Components/Skills'
import Footer from './Components/Footer'
import Contact from './Components/Contact'

export default function App() {
  return (
    <>
    <div>
    <Navbar/>
    <Home/>
    <About/>
    <Portfolio/>
    <Skills/>
    <Contact/>
    <Footer/>
    </div>
      
    </>
  )
}
