import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ReduxApp = () => {
    const counter = useSelector((state)=> state.counter)
    const dispatch = useDispatch()
    const increment = () =>{
        dispatch({type:'INC'})
    }
    const decrement = () =>{
        dispatch({type:'DEC'})
    }
    const addBy10 = () =>{
        dispatch({type:'ADD', payload:10})
    }
    const multiplyBy10 = () =>{
        dispatch({type:'MUL', payload:10})
    }
  return (
    <div>
      Counter App
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy10}>Add by 10</button>
      <button onClick={multiplyBy10}>Multiply by 10</button>

    </div>
  )
}

export default ReduxApp
