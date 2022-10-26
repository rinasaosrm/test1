// import React, { useContext } from 'react'

// const AppContext = React.createContext();

// const AppProvider=({children})=>{

// return <AppContext.Provider value="Rina">{children}</AppContext.Provider>
// }

// const useGlobalContext = ()=>{
//     return 
//     (AppContext)
// }
// export {AppContext, AppProvider, useGlobalContext};

import React, { useContext } from 'react'
import { UserContext } from './Home'
const UseContext = () => {
    const user = useContext(UserContext)
    console.log(user)
  return (
    <div>
       { user?.map((emp)=>{
         return(
          <div key={emp.id} className="col-10 col-md-2 mt-5">
          <div className="card">
            <div className="card-header">{emp.id}</div>
            <div className="card-header">{emp.login}</div>
          </div>
        </div>
      )
  }
      )}
    </div>
  )
}

export default UseContext
