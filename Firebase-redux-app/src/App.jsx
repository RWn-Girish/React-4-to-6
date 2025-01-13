import { Route, Routes } from 'react-router'
import './App.css'
import Home from './Components/Home'
import AddComp from './Components/AddComp'
import Header from './Components/Header'
import EditComp from './Components/EditComp'

function App() {


  return (
    <>
    <Header />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddComp />} />
        <Route path='/edit/:id' element={<EditComp />} />
      </Routes>

    </>
  )
}

export default App
