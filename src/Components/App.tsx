import React from 'react';
import './App.css';
import HeaderContainer from './HeaderContainer';
import BodyContainer from './BodyContainer';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer/>
        <BodyContainer/>
      </div>
    );
  }
};
