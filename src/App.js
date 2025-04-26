import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles/App.scss'

import { HashRouter , Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import Algebra from "./pages/Algebra"

function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/algebra" element={<Algebra />} />
      </Routes>
    </HashRouter >
  )
}

export default App
