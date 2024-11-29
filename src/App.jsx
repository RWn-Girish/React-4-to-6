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
      {/* <UseState /> */}
      {/* <Eventhandel /> */}
      {/* <ListComp list={list} />
      <DynamicComp list={list} /> */}
      {/* <Controll />
      <UnControll /> */}
      <MultiControll />
      {/* <HOCApp isLoading={isLoading} list={list} /> */}
      {/* <Boot /> */}
    </React.Fragment>
  )
}

export default App
