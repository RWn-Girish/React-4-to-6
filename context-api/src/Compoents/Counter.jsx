import React, { useReducer } from 'react'
import { Button, Container } from 'react-bootstrap'
import { myReducer } from '../Reducer/Action';
import { useDispatch, useSelector } from 'react-redux';
import { dec, incrementVal } from '../services/actions/counter.action';

function Counter() {
    // let initalState = {
    //     count: 0,
    //     name: "John"
    // }
    // const [data, dispatch] = useReducer(myReducer, initalState);
    const dispatch = useDispatch();
    const { count } = useSelector(state => state.counterReducer)
    const handelInc = () => {
        dispatch(incrementVal())
    }
    const handelDec = () => {
        dispatch(dec())
    }

    return (
        <>
            <Container>
                <h2> Counter App </h2>
                <Button variant='info' onClick={handelInc}>Increment</Button>
                <h3>{count}</h3>
                <Button variant='info' onClick={handelDec}>Decrement</Button>
            </Container>
        </>
    )
}

export default Counter
