import React, { createContext, useEffect, useState } from 'react'
import UseContext from './UseContext';

export const UserContext = createContext();
const Home = () => {

  const [userData, setUserData] = useState([])
  const employeeList= async()=>{
    const response = await fetch('https://api.github.com/users');
   setUserData(await response.json());
}
useEffect(()=>{
  employeeList();
},[])
  return (
    <UserContext.Provider value={userData}>
    <div>
      <Comp1 />
    </div>
    </UserContext.Provider>
  )
}

const Comp1 = ()=>{
return(
  <>
  <p>components 1</p>
  <Comp2 />
  </>
)

}
const Comp2 = ()=>{
  return(
    <>
    <p>components 2</p>
    <Comp3 />
    </>
  )
  
  }

  const Comp3 = ()=>{
    return(
      <>
      <p>components 3</p>
      <UseContext />
      </>
    )
    
    }
export default Home
