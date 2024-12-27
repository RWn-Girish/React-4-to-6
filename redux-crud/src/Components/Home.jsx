import React from 'react'
import { useSelector } from 'react-redux'

function Home() {
    const { employees } = useSelector(state => state.employeeReducer);
    console.log("EMP ===> ", employees)
    return (
        <>
            <h2> Home page</h2>
        </>
    )
}

export default Home
