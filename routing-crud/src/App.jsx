import { Route, Routes } from 'react-router';
import HomePage from './Components/HomePage';
import AddEmployee from './Components/AddEmployee';
import EditEmployee from './Components/EditEmployee';
import Header from './Components/Header';

const App = () => {


  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/add' element={<AddEmployee />} />
        <Route path='/edit/:id' element={<EditEmployee />} />
      </Routes>
    </>
  )
}

export default App
