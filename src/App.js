import React, { Component } from 'react';
// import ReactDOM from "react-dom";


class Counter extends Component {
  constructor (props) {
    super(props)

    this.state = { count: 0 }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  
  increment() {
    this.setState({ count: this.state.count +1  })
  }
   decrement() {
     this.setState({ count: this.state.count -1 })
     console.log("decremrnt button  worck")
   }
   render() {
     return(
       <div className="counter">
        <span className="count">{this.state.count}</span>

        <div classNAme="buttons">
          <button onClick={this.increment} className="increment">+</button>
          <button onClick={this.decrement} className="decrement">-</button>
        </div>
       </div>
     )
   }
  
}


export { Counter };
