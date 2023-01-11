import './App.css';

import { App } from 'photowall/lib/index'
import React from 'react';
import logo from './logo.svg';

// window.React = React

function App1() {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <div className="App">
      <App />
      <span>I am in child one</span>
    </div>
  );
}

export default App1;
