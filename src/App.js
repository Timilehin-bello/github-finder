import React, { Component } from "react";
import { RxGithubLogo } from "react-icons/rx";
import "./App.css";
import { Navbar, Users } from "./components/componentsIndex";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar title="Github Search" icon={<RxGithubLogo />} />

        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
