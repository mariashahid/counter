import * as React from "react";
import { Component } from "react";
import { Count } from "./counters";

interface NavBarProps {
  totalCounters: number;
}

const NavBar = ({ totalCounters }: NavBarProps) => {
  return (
    <nav className="navbar navbar-expand-dk navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Counter
          <span className="badge rounded-pill bg-primary bg-sm m-2">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
