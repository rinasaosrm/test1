import React, { useEffect } from 'react'

const useUpdateLogger = (value) => {
    useEffect(()=>{
        console.log(value)
    },[value])
  return (
    <div>
      
    </div>
  )
}

export default useUpdateLogger
