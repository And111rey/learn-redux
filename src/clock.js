import React, { Component } from "react";
import "./app.css";
import "./app.css";

class Clock extends Component {

    constructor(props) {
        super(props)
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

componentWillMount() {
    this.getTimeUntil(this.props.deadLine)
}

componentDidMount() {
    setInterval(()=>{ this.getTimeUntil(this.props.deadLine)}, 1000);
}

    getTimeUntil(deadLine) { // this function is intended to return the difference between the set date and the current date 
        const time = Date.parse(deadLine) - Date.parse(new Date());
        const seconds = Math.floor((time/1000) % 60);
        const minutes = Math.floor((time/1000/60) %60);
        const hours = Math.floor(time/(1000*60*60) %24);
        const days = Math.floor(time / (1000*60*60*24));
        console.log("Sec -",seconds, " min- ", minutes, "hours -", hours, " Days- ", days);
        this.setState({
            days: days,
            hours:hours,
            minutes: minutes,
            seconds: seconds
        })
    }

    render(){


        return(
            <div>
            <div className="Clock-days"> {this.state.days} days</div>
            <div className="Clock-hours"> {this.state.hours} hours</div>
            <div className="Clock-minutes"> {this.state.minutes} minutes</div>
            <div className="Clock-saconds"> {this.state.seconds} seconds</div>
        </div>
        )
        
    }

}

export default Clock;