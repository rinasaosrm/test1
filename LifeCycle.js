import React from 'react'



class LifeCycle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 1,
      };
    }
    
    render() {
      return (
        <div>
          <button onClick={this._onClick.bind(this)}>
            Bump
          </button>
          <Child 
            extCounter={this.state.counter}
          />
         </div>
      );
    }
    
    _onClick() {
      console.log('clicked');
      this.setState({
        counter: this.state.counter+1,
      });
    }
  }
  
  class Child extends React.Component {
    static defaultProps = {
      extCounter: -100,
    };
    
    state = {
      counter: 100,
    };
  
    constructor(props) {
      super(props);
      
    }
    
    componentWillMount() {
      console.log('componentWillMount');
    }
    
    componentDidMount() {
      console.log('componentDidMount');
    }
    
    componentWillReceiveProps(newProps) {
      console.log('componentWillReceiveProps');
    }
    
    shouldComponentUpdate() {
     console.log('shouldComponentUpdate');
      return true;
    }
    
    componentWillUpdate() {
      console.log('componentWillUpdate');
    }
    
    componentDidUpdate() {
      console.log('componentDidUpdate');
    }
    
    render() {
      console.log('render');
      return (
        <div>
          <div>
            external: {this.props.extCounter}
            <br/>
            internal: {this.state.counter}
          </div>
          <button  onClick={this._onClick.bind(this)} >
            Child Bump
          </button>
        </div>
      );
    }
    _onClick(){
      this.setState({counter: this.state.counter+1});
    }
  }
  
  export default LifeCycle
  
  console.log(Child.defaultProps);