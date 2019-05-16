import React from 'react';
import ReactDOM from 'react-dom';
// import { Counter } from './App.js';
import { createStore } from "redux";



const initialState = { count: 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case "INC": return { count: state.count + action.amount };
        case "DEC": return { count: state.count + action.amount };
        case "RES": return { count: 0 };
        default: return state;
    }
}

const incrementAcrion = { type: "INC", amount: 1 }
const decrementAction = { type: "DEC", amount: 1 }
const resetAction = { type: "RES" }

const store = createStore(reducer, initialState)

class Counter extends React.Component {
    constructor(props) {
      super(props)
  
      
  
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.resetAction = this.reset.bind(this);
    }
    
    componentDidMount() {
        store.subscribe(() => this.forceUpdate())
    }
  
    increment() {
        store.dispatch(incrementAcrion); 
    }
  
    decrement() {
        store.dispatch(decrementAction);
    } 

    reset() {
        store.dispatch(resetAction);
    }
    render () {
        const count = store.getState().count;
      return (
        <div>
          <span> {count} </span>
          <div>
            <button onClick={this.decrement} >-</button>
            <button onClick={this.reset} >RES</button>
            <button onClick={this.increment}>+</button>
          </div>
        </div>
      );
    }
  }
  

ReactDOM.render(< Counter />, document.getElementById('root'));


