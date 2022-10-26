import React, { Component } from 'react'
    
class StateClass extends Component { 
  constructor(props){ 
    super(props) 
        
    this.state = [1,2,4,54,5,6]
        
    this.updateState = this.updateState.bind(this) 
  } 
    
  updateState(){ 
    this.setState([...this.state, 7]) 
  } 
      
  render(){ 
    return ( 
      <div> 
       <h2>Greetings Portal</h2>   
       <p>{this.state.greeting}</p>
      
        <button onClick={this.updateState}> 
          Click me!
        </button> 
      </div> 
    ) 
  } 
} 

export default StateClass
    