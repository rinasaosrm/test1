import React, { useState } from 'react'

const UseState = () => {
    const[count, setCount] = useState(0)
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Inc</button>
      {count}
      <button onClick={()=>
        (count === 0)?setCount(0):setCount(count-1)}>Dec</button>

    </div>
  )
}

export default UseState
