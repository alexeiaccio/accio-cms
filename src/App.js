import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";

const API = `https://api.github.com/graphql`
const GIT_CONTENT = `https://raw.githubusercontent.com/`
const getJSON = async url => 
      await fetch(url)
      .then(res => res.json())

const query = `
query {
  viewer {
    login
  }
}`

class App extends Component {
  constructor() {
    super()
    this.state = {
      res: ""
    }
  }

  componentDidMount() {
    const url = `${GIT_CONTENT}alexeiaccio/accio-cms/master/data/poop.json`    
  
    getJSON(url).then(res => {
      this.setState({res})
    })

    fetch(`${API}`,{
      method: 'POST',
      headers: {
        'Authorization': `bearer ${process.env.GIT_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: query
      })
    })
    .then(res => res.json())
    .then(console.log)
  }

  render() {

    return (
      <div className="App">
        <h1> Hello, World! </h1>
        <div>{this.state.res.poop}</div>
      </div>
    );
  }
}

export default hot(module)(App);
