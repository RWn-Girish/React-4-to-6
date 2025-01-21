import { Route, Routes } from 'react-router'
import './App.css'
import Home from './Components/Home'
import AddComp from './Components/AddComp'
import Header from './Components/Header'
import EditComp from './Components/EditComp'
import SignUp from './Components/Auth/SignUp'
import SignIn from './Components/Auth/SignIn'

function App() {


  return (
    <>
    <Header />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/add' element={<AddComp />} />
        <Route path='/edit/:id' element={<EditComp />} />
      </Routes>

    </>
  )
}

export default App
