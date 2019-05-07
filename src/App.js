import React, { Component } from 'react';
import { Store } from "./store.js"


const initialState = {count: 0};

let updateState = (state, action) => {
  switch (action.type) {
    case "INC": return { count: state.count + action.amount };
    case "DEC": return { count: state.count - action.amount }
    default: return state;
  }
}

const incrementAction = { type: "INC", amount: 1 };
const decrementAction = { type: "DEC", amount: 1 };

const store = new Store(updateState, initialState)

class Counter extends Component {
  constructor (props) {
    super(props)

    // this.state = { count: 0 }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  increment() {
    store.update(incrementAction);
  }
  decrement() {
    store.update(decrementAction);
  }
   render() {
     return(
       <div className="counter">
        <span className="count">{store.state.count}</span>

        <div classNAme="buttons">
          <button onClick={this.increment} className="increment">+</button>
          <button onClick={this.decrement} className="decrement">-</button>
        </div>
       </div>
     )
   }
  
}


export { Counter };
