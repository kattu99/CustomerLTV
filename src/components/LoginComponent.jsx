import React, { Component } from 'react';
import CustomerSegmentationView from './CustomerSegmentationView' 
import CustomerCohortAnalysis from './CohortAnalysis'
import Insights from './InsightView'
import {Input} from 'semantic-ui-react'
import history from '../history';

import {
  BrowserRouter as Router,
Redirect,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";


class LoginComponent extends Component {
    constructor (props) {
        super()
        this.state = {
            user: '',
            pass: '',
            auth: false,
        }
    }

    User = (e, item) => {
        this.setState({
            user: item.value, 
        })
    }

    Password = (e, item) => {
        this.setState({
            pass: item.value, 
        })
    }

    auth = (e) => {
        let data = {
            "user": this.state.user,
            "pass": this.state.pass
        }
        let jsondata = JSON.stringify(data)
        fetch('https://lucyltv.herokuapp.com/password', {
            method: 'POST',
            body: jsondata,
        })
        .then(response => 
            response.json())
        .then(data => {
            //do something with response
            if (data['resp'] == 'true') {
                this.setState({
                    auth: true, 
                });
                history.push('/customersegments');
            }
          })
          .catch(err => {
            console.log(err)
          })
    }

    render () {
        return (
            <div>
                    <Router>
                        <div className = 'navbar'>
                        <div className='left'>
                            <p className='workOSheading'>Query</p>
                        </div>
                        <div className='right'>
                            <Link to="/customersegments" style={{ textDecoration: 'none',color:'#fdfdfd'}}><p className='datasources'>Customer Segments</p></Link>
                            <Link to="/customercohorts" style={{ textDecoration: 'none', color:'#fdfdfd'}}><p className='explorer'>Cohort Analysis</p></Link>
                            <Link to="/insights" style={{ textDecoration: 'none', color:'#fdfdfd'}}><p className='explorer'>Insights</p></Link>
                        </div>
                        </div>
                        <Switch>
                            <Route path="/customersegments">
                                {this.state.auth ? <CustomerSegmentationView /> : null}
                            </Route>
                            <Route path="/customercohorts">
                                {this.state.auth ? <CustomerCohortAnalysis/> : null}
                            </Route>
                            <Route path="/insights">
                                {this.state.auth ? <Insights/> : null}
                            </Route>
                        </Switch> 
                    </Router>
                    { this.state.auth ? null : <div className='login'>
                        <Input placeholder="User Name" onChange={this.User}/>
                        <Input type='password' placeholder="Password" onChange={this.Password}/>
                        <div className='button' onClick={this.auth}>Submit</div>
                    </div> }
            </div>
        )
    }
}

export default LoginComponent;