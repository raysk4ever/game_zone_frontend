import React, { Component } from 'react';
import Landing from './components/landingComponent/landing';
import Categories from './components/landingComponent/categories';
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing></Landing>
        <Categories></Categories>
       {/* <p>App</p> */}
      </div>
    );
  }
}

export default App;
