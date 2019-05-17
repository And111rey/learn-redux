import React, { Component} from 'react';
import "./app.css";
import Clock from "./clock";


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      deadLine: "December 25, 2019", 
      newDeadLine: ""
    }
  }

    changeDeadLine() {
      console.log("state is :" , this.state);
      this.setState({
        deadLine: this.state.newDeadLine
      })
    }
  render () {

   
    return (
      <div className="App">
        <div className="App-title">CountDown { this.state.deadLine }</div>  
        <div>
          < Clock 
            deadLine = {this.state.deadLine}
          />
        </div>
        <div>
          <input 
            placeholder="New date"
            onChange = {(event) => this.setState({newDeadLine: event.target.value}) }  
          />
          <button onClick={() => this.changeDeadLine()}>Submit</button> 
        </div>   
      </div>
    );
  }
} 

export { App };