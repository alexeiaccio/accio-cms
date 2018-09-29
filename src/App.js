import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";

const API = `https://raw.githubusercontent.com/`

class App extends Component {
  constructor() {
    super()
    this.state = {
      res: ""
    }
  }
  render() {
    const url = `${API}alexeiaccio/accio-cms/master/README.md`

    const get = async url => 
      await fetch(url)
      .then(res => res.text())

    get(url).then(res => {
      this.setState({res})
    })
    
    return (
      <div className="App">
        <h1> Hello, World! </h1>
        <div>{this.state.res}</div>
      </div>
    );
  }
}

export default hot(module)(App);
