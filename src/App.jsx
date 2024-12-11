import React, { useEffect, useState } from 'react'
import './App.css'
import ListComp from './components/List_Key/ListComp'
import Eventhandel from './components/UseState/EventHandel'
import UseState from './components/UseState/UseState'
import DynamicComp from './components/List_Key/DynamicComp'
import Controll from './components/Controlled/Controll'
import UnControll from './components/Controlled/Uncontroll'
import MultiControll from './components/Controlled/multiControll';
import HOC from './components/HOC'
import Boot from './components/Boot'
import { Route, Routes } from 'react-router'
import Header from './components/Header'

const HOCApp = HOC(ListComp);


function App() {
  const [list, setList] = useState(['Home','Work', 'About', 'Contace', 'Service'])

  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
      setTimeout(()=>{
        setIsLoading(true)
      }, 3000)
  }, [])

  return(
    <React.Fragment>
    <Header />
  <Routes>
    <Route path='/' element={<UseState />} />
    <Route path='/about' element={<Controll />} />
    <Route path='/contact/123' element={<h1>Welcome To Contact Page</h1>} />
    <Route path='/*' element={<h1>Page Not Found</h1>} />
  </Routes>

    <h2>Fotter Section</h2>
      {/* <UseState /> */}
      {/* <Eventhandel /> */}
      {/* <ListComp list={list} />
      <DynamicComp list={list} /> */}
      {/* 
      <UnControll /> */}
      {/* <MultiControll /> */}
      {/* <HOCApp isLoading={isLoading} list={list} /> */}
      {/* <Boot /> */}
    </React.Fragment>
  )
}

export default App
