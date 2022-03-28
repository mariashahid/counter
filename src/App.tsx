import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/counters";

function App() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Counter
          </a>
        </div>
      </nav>
      <div className="container">
        <Counters></Counters>
      </div>
    </React.Fragment>
  );
}

export default App;
