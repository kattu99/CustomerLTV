import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomerSegmentationView from './components/CustomerSegmentationView' 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <CustomerSegmentationView />
    </div>
  );
}

export default App;
