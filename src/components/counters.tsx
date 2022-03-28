import * as React from "react";
import { Component } from "react";
import Counter from "./counter";

interface CountersProps {}

interface CountersState {
  counters: Count[];
}

class Counters extends React.Component<CountersProps, CountersState> {
  state = {
    counters: [
      {
        id: 1,
        value: 1,
      },
      {
        id: 2,
        value: 2,
      },
      {
        id: 3,
        value: 3,
      },
      {
        id: 4,
        value: 4,
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <h1>Counters</h1>
        {this.state.counters.map((counter) => {
          return <Counter key={counter.id}></Counter>;
        })}
      </React.Fragment>
    );
  }
}

interface Count {
  id: number;
  value: number;
}

export default Counters;
