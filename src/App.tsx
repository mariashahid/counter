import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import { Count } from "./components/counters";
interface AppProps {}

interface AppState {
  counters: Count[];
}

class App extends React.Component<AppProps, AppState> {
  state: AppState = {
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

  handleDelete = (counterId: number) => {
    this.setState({
      counters: this.state.counters.filter(
        (counter) => counter.id !== counterId
      ),
    });
  };

  handleReset = () => {
    this.setState({
      counters: this.state.counters.map((counter) => {
        counter.value = 0;
        return counter;
      }),
    });
  };

  handleIncrement = (counter: Count) => {
    const counters = [...this.state.counters];
    const index = this.state.counters.indexOf(counter);

    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter: Count) => {
    const counters = [...this.state.counters];
    const index = this.state.counters.indexOf(counter);

    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        ></NavBar>
        <div className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          ></Counters>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
