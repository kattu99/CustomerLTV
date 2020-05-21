import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomerSegmentationView from './components/CustomerSegmentationView' 
import CustomerCohortAnalysis from './components/CohortAnalysis'
import Insights from './components/InsightView'
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
        <div className = 'navbar'>
          <div className='left'>
            <p className='workOSheading'>Lucy Customer Analytics</p>
          </div>
          <div className='right'>
            <Link to="/customersegments" style={{ textDecoration: 'none',color:'#fdfdfd'}}><p className='datasources'>Customer Segments</p></Link>
            <Link to="/customercohorts" style={{ textDecoration: 'none', color:'#fdfdfd'}}><p className='explorer'>Cohort Analysis</p></Link>
            <Link to="/insights" style={{ textDecoration: 'none', color:'#fdfdfd'}}><p className='explorer'>Insights</p></Link>
          </div>
        </div>
        <Switch>
              <Route path="/customersegments">
                  <CustomerSegmentationView />
              </Route>
              <Route path="/customercohorts">
                  <CustomerCohortAnalysis />
              </Route>
              <Route path="/insights">
                  <Insights />
              </Route>
        </Switch> 
      </Router>
    </div>
  );
}

export default App;
