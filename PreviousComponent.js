import React, { useState } from 'react'
import usePrevious from './usePrevious'

const PreviousComponent = () => {
    const [count, setCount] = useState(0)
    const previousCount = usePrevious(count)
  return (
    <div>
      {count} - {previousCount}
      <button onClick={()=>setCount(currentCount=>currentCount+1)}>Increment</button>
    </div>
  )
}

export default PreviousComponent
