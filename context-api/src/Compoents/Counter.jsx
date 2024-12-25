import React, { useReducer } from 'react'
import { Button, Container } from 'react-bootstrap'
import { myReducer } from '../Reducer/Action';

function Counter() {
    let initalState = {
        count: 0,
        name: "John"
    }
    const [data, dispatch] = useReducer(myReducer, initalState);

    const handelInc = () => {
        dispatch({
            type: "INCREMENT"
        })
    }
    const handelDec = () => {
        dispatch({
            type: "DECREMENT"
        })
    }

  return (
    <>
        <Container>
        <h2> Counter App {data.name}</h2>
        <Button variant='info' onClick={handelInc}>Increment</Button>
        <h3>{data.count}</h3>
        <Button variant='info' onClick={handelDec}>Decrement</Button>
        </Container>
    </>
  )
}

export default Counter
