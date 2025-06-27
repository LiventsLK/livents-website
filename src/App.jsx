import { useState } from 'react'
import './app.scss'
import Navbar from './components/navbar'
import Hero from './components/hero-section'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <Navbar></Navbar>
      <Hero></Hero>
      jsdfjhsdbhv
    </div>
  )
}

export default App
