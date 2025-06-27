import { useState } from 'react'
import './app.scss'
import Navbar from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <Navbar></Navbar>
    </div>
  )
}

export default App
