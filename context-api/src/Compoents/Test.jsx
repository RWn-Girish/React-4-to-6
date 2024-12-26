import React from 'react'
import { useSelector } from 'react-redux'

function Test() {
    const {count} = useSelector(state => state.counterReducer)
  return (
    <div>
      <h2>Test {count}</h2>
    </div>
  )
}

export default Test
