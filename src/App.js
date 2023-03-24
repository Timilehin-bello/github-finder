import axios from "axios";
import React, { Component } from "react";
import { RxGithubLogo } from "react-icons/rx";
import "./App.css";
import { Navbar, Users } from "./components/componentsIndex";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
    this.setState({ loading: true });

    const response = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: response.data, loading: false });

    console.log(response.data);
  }

  render() {
    return (
      <div className="App">
        <Navbar title="Github Search" icon={<RxGithubLogo />} />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
