import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './Components/Home'
import AddEmp from './Components/AddEmp'
import Header from './Components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddEmp />} />
      </Routes>
    </>
  )
}

export default App
