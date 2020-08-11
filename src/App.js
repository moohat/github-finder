import React, { Component } from 'react';

class App extends Component {
  render() {
    const name = "John Doe";
    return (
      <div className="App">
      <h1>Hello {name.toUpperCase()}</h1>
      <h1>Goodbye!</h1>
      </div>
    );
    
  }
}

export default App;
