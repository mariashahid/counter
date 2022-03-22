import * as React from "react";
import { Component } from "react";

interface CounterProps {}

interface CounterState {
  count: number;
  tags: String[];
}

class Counter extends React.Component<CounterProps, CounterState> {
  state: CounterState = {
    count: 0,
    tags: [],
  };

  formatCount = () => {
    let { count } = this.state;
    return count === 0 ? "Zero" : count;
  };

  getBadgeClasses = () => {
    let classes = "badge bg-";
    return (classes += this.state.count === 0 ? "warning" : "primary");
  };

  displayTags = () => {
    if (this.state.tags.length === 0) return <p>'There are no tags.'</p>;
    else
      return (
        <ul>
          {this.state.tags.map((tag) => (
            <li>{tag}</li>
          ))}
        </ul>
      );
  };

  render() {
    return (
      <React.Fragment>
        <h1>Counters</h1>
        <div>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button className="btn btn-secondary m-2">Increment</button>
        </div>
        {this.state.tags.length === 0 && "There are no tags"}
        {this.displayTags()}
      </React.Fragment>
    );
  }
}

export default Counter;
