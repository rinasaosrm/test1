import React from 'react'
import Counter from './Counter'

const A = (props) => {
    const {count, increment} = props

  return (
    <div>
      <button onClick={increment}>A Component {count} Increment</button>
    </div>
  )
}

export default Counter(A)
