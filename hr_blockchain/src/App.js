import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
      super()
        this.state = {
        FirstName: "",
        LastName: ""
      }
  }


  render() {
    return (
      <div className="App">
          <h1 className="App-title">Welcome to BlockChain</h1>
        <p className="App-intro">{this.state.FirstName}</p>
        <p className="App-intro">{this.state.LastName}</p>
      </div>
    );
  }

  componentDidMount() {
    fetch('http://localhost:5000/')
    .then(res => res.json())
    .then(res => this.setState({ FirstName: res.FirstName, LastName: res.LastName }))
  }
}
export default App;
