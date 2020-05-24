import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomerSegmentationView from './components/CustomerSegmentationView' 
import CustomerCohortAnalysis from './components/CohortAnalysis'
import LoginComponent from './components/LoginComponent'
import Insights from './components/InsightView'
import {Input} from 'semantic-ui-react'
import {
  BrowserRouter as Router,

  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  
  return (
    <div className="App">
      <LoginComponent/>
    </div>
  );
}

export default App;
