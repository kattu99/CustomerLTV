import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomerSegmentationView from './components/firstpage' 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
            <Link to="/datasources" style={{ textDecoration: 'none',color:'#fdfdfd'}}><p>My Datasources</p></Link>
            <Link to="/builder" style={{ textDecoration: 'none', color:'#fdfdfd'}}><p>Data Explorer</p></Link>
        <Switch>
              <Route path="/segmentView">
                  <CustomerSegmentationView />
              </Route>
              <Route path="/CohortAnalysis">
                  
              </Route>
        </Switch> 
      </Router>






      <FirstPage/>
    </div>
  );
}

export default App;
