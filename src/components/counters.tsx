import * as React from "react";
import { Component } from "react";
import Counter from "./counter";

interface CountersProps {
  counters: Count[];
  onDelete: (id: number) => void;
  onIncrement: (counter: Count) => void;
  onDecrement: (counter: Count) => void;
  onReset: () => void;
}

interface CountersState {}

class Counters extends React.Component<CountersProps, CountersState> {
  render() {
    const { counters, onReset, onIncrement, onDelete, onDecrement } =
      this.props;

    return (
      <React.Fragment>
        <h1>Counters</h1>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map((counter) => {
          return (
            <React.Fragment>
              <Counter
                key={counter.id}
                counter={counter}
                onDelete={onDelete}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
              ></Counter>
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  }
}

export interface Count {
  id: number;
  value: number;
}

export default Counters;
