import * as React from "react";
import { Component } from "react";

interface CounterProps {}

interface CounterState {
  count: number;
}

class Counter extends React.Component<CounterProps, CounterState> {
  state: CounterState = {
    count: 0,
  };

  formatCount = () => {
    let { count } = this.state;
    return count === 0 ? "Zero" : count;
  };

  getBadgeClasses = () => {
    let classes = "badge bg-";
    return (classes += this.state.count === 0 ? "warning" : "primary");
  };
  render() {
    return (
      <React.Fragment>
        <h1>Counters</h1>
        <div>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button className="btn btn-secondary m-2">Increment</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;
