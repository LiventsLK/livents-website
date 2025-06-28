import { useState } from 'react'
import './app.scss'
import Navbar from './components/navbar'
import Hero from './components/hero-section'
import AboutUs from './components/aboutUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutUs></AboutUs>
    </div>
  )
}

export default App
