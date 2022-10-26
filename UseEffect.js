import React, { useEffect, useState } from "react";
import Register from './Register'


const UseEffect = () => {

    const[userData, setUserData] = useState(null)
  
    const employeeList= async()=>{
        const response = await fetch('https://api.github.com/users');
       setUserData(await response.json());
    }

    const generateKey = ()=>{

      const id = userData.map(user=>user.id)

      const maxId = Math.max(...id)
      // console.log(maxId+1)
      
      return maxId+1;
    }
    const id = userData ? generateKey() : '0'
    // console.log("dataaa",id)

const updateData = (updatedData)=>{
  console.log(userData);
  const newUser = [...userData, updatedData]
  console.log(updatedData, "newuserrr")
  setUserData(newUser)
}

  useEffect(() => {
    employeeList();
    
  }, []);
  return (
    <div>
      <Register updateData ={updateData} id={id}/>
      <h1>UseEffect API Call</h1>
      <div className="container-fluid mt-5">
        <div className="row text-center">


        {userData?.map((user, index)=>{
            return(
                <div key={index} className="col-10 col-md-2 mt-5">
                <div className="card">
                  <div className="card-header">{user.id}</div>
                  <div className="card-header">{user.login}</div>
                </div>
              </div>
            )
        })}
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
