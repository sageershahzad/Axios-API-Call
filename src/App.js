import React, { Component } from "react";
import "./App.css";
import UserDetailForm from "./components/userdetailform";
import axios from "axios";

//https://api.github.com/users/sageershahzad

class App extends Component {
  state = {
    repositories: null
  };
  fetchUserNumberOfRepositories = e => {
    e.preventDefault();
    const userName = e.target.elements.username.value;
    //console.log(userName);
    if (userName) {
      axios.get(`https://api.github.com/users/${userName}`).then(res => {
        //console.log(res);
        const repositories = res.data.public_repos;
        //console.log(repositories);
        this.setState({ repositories });
      });
    } else return;
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">HTTP Calls in React</h1>
        </header>
        <UserDetailForm
          fetchUserNumberOfRepositories={this.fetchUserNumberOfRepositories}
        />
        {this.state.repositories ? (
          <p>Number of Repositories: {this.state.repositories}</p>
        ) : (
          <p>Please enter username</p>
        )}
      </div>
    );
  }
}

export default App;
