import './App.css'
import { Route, Routes } from 'react-router'
import Home from './Components/Home'
import AddEmp from './Components/AddEmp'
import Header from './Components/Header'
import EditEmp from './Components/EditEmp'

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddEmp />} />
        <Route path='/edit/:id' element={<EditEmp />} />
      </Routes>
    </>
  )
}

export default App
