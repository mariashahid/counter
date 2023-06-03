import * as React from "react";
import { Component } from "react";
import { Count } from "./counters";

interface CounterProps {
  counter: Count;
  onDelete: (id: number) => void;
  onIncrement: (counter: Count) => void;
  onDecrement: (counter: Count) => void;
}

interface CounterState {
  tags: String[];
}

class Counter extends React.Component<CounterProps, CounterState> {
  state: CounterState = {
    tags: ["tag1"],
  };

  formatCount = () => {
    let { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };

  getBadgeClasses = () => {
    let classes = "badge bg-";
    return (classes += this.props.counter.value === 0 ? "warning" : "primary");
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
    const { onDelete, onIncrement, onDecrement } = this.props;

    return (
      <React.Fragment>
        <div>
          <div className="row">
            <div className="col-1">
              <span className={this.getBadgeClasses()}>
                {this.formatCount()}
              </span>
            </div>
            <div className="col-md-3">
              <button
                onClick={() => onIncrement(this.props.counter)}
                className="btn btn-primary m-2"
              >
                +
              </button>
              <button
                onClick={() => onDecrement(this.props.counter)}
                className="btn btn-secondary m-2"
                disabled={this.props.counter.value == 0 ? true : false}
              >
                -
              </button>
              <button
                onClick={() => onDelete(this.props.counter.id)}
                className="btn btn-danger m-2"
              >
                X
              </button>
            </div>
          </div>
        </div>
        {this.state.tags.length === 0 && "There are no tags"}
      </React.Fragment>
    );
  }
}

export default Counter;
