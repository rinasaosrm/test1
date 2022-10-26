import React from 'react'
import Counter from './Counter'
const B = (props) => {
    const {count, increment} = props
  return (
    <div>
      <button onMouseOver={increment}>B Component {count} On Mouse Over</button>
    </div>
  )
}

export default Counter(B)
