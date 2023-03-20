import React, { Component } from "react";
import { RxGithubLogo } from "react-icons/rx";
import "./App.css";
import { Navbar, UsersCard } from "./components/componentsIndex";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar title="Github Search" icon={<RxGithubLogo />} />
        <UsersCard />
      </div>
    );
  }
}

export default App;
