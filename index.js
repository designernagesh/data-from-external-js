import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import employees from './data'
import './style.css';

class App extends Component {
  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        { employees.map( item =>
          <h4> My Name is {item.name} and email is {item.email}. </h4>
          )}      
      </>
    );
  }
}

ReactDOM.render(<App title='Show Data from External JSON File'/>, document.getElementById('root'));
