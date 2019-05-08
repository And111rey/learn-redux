import React, { Component } from 'react';
import { createStore } from "./redux.js"


const initialState = {count: 0};

let reducer = (state, action) => {
  switch (action.type) {
    case "INC": return { count: state.count + action.amount };
    case "DEC": return { count: state.count - action.amount }
    case "RES": return { count: 0 };
    default: return state;
  }
}

const incrementAction = { type: "INC", amount: 1 };
const decrementAction = { type: "DEC", amount: 1 };
const resetAction = { type: "RES" };


const store = createStore(reducer, initialState)

class Counter extends Component {
  constructor (props) {
    super(props)

    // this.state = { count: 0 }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);

  }

  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  increment() {
    store.dispatch(incrementAction);
  }
  decrement() {
    store.dispatch(decrementAction);
  }
  reset() {
    store.dispatch(resetAction);
  }
   render() {

    const count = store.getState().count;

     return(
       <div className="counter">
        <span className="count">{count}</span>

        <div classNAme="buttons">
          <button onClick={this.increment} className="increment">+</button>
          <button onClick={this.reset} className="increment">reset</button>

          <button onClick={this.decrement} className="decrement">-</button>
        </div>
       </div>
     )
   }
  
}


export { Counter };
