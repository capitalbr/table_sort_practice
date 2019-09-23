import React, {Component} from 'react';
import Filter from './components/Filter';


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <center><h1>Birthday Records</h1></center>
        <Filter></Filter>
      </div>
    );
  }
}

export default App;
