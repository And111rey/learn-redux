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



const increment = ( amount ) => {
  return { type: "INC", amount }
}
const decrement = ( amount ) => {
  return { type: "DEC", amount }
}
const reset = () => {
  return {type: "RES"}
}

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
    let amount = parseInt(this.refs.amount.valuel || 1);
    store.dispatch(increment(amount));
  }
  decrement() {
    let amount = parseInt(this.refs.amount.value || 1);
    store.dispatch(decrement(amount));
  }
  reset() {
    store.dispatch(reset());
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
        <input type="text" ref="amount" defaultValue="1"/>
       </div>
     )
   }
  
}


export { Counter };
