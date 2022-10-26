import React, { useState } from 'react'
import UseLocaleStorage from './UseLocaleStorage'
import useUpdateLogger from './useUpdateLogger'

const Sampleinput = () => {
    const [name, setName] = UseLocaleStorage('name', '')
    useUpdateLogger(name)
  return (
    <div>
      <input type= "text" value={name} onChange = {e=>setName(e.target.value)}/>
    </div>
  )
}

export default Sampleinput
