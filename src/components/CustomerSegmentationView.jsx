import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import { Grid, Dropdown, Segment, Input} from 'semantic-ui-react'
import top from '../res/top.png'
import middle from '../res/middle.png'
import bottom from '../res/bottom.png'
import facebook from '../res/facebook-logo.png'
import google from '../res/google.png'
import email from '../res/email.png'
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

import '../css/firstpage.css'

class CustomerSegment extends Component {
    constructor (props) {
        super()
    }

    render () {
        return (
        <div className='customer_segment' style={{'backgroundColor':this.props.color}}>
            {/*<Grid columns={3} divided stretched>
                <Grid.Row>
                    <Grid.Column>
                        <h1>Power User</h1>
                        <img src={this.props.image} alt='row'/>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>Age = {this.props.user.age} </Segment>
                        <Segment>Age = {this.props.user.age} </Segment>
                        <Segment>Age = {this.props.user.age} </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>Age = {this.props.user.age} </Segment>
                        <Segment>Age = {this.props.user.age} </Segment>
                        <Segment>Age = {this.props.user.age} </Segment>
                    </Grid.Column>
                </Grid.Row>
        </Grid> */}
                <div className='left'>
                    <h1>{this.props.title}</h1>
                    <img src={this.props.image} alt='row'/>
                </div>
                <div className='right'>
                <h1 className='heading'>Metrics</h1>
                <div className='grid'>
                <Grid columns={3} compact>
                    <Grid.Row>
                        <Grid.Column>
                            AOV = {this.props.user.AOV}
                        </Grid.Column>
                        <Grid.Column>
                            LTV: {this.props.user.LTV}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            Referral Rate = {this.props.user.RR}
                        </Grid.Column>
                        <Grid.Column>
                            Churn Rate = {this.props.user.CR}
                        </Grid.Column>
                    </Grid.Row> 
                </Grid>
                </div>
                </div>
        </div>
        )
    }

}


class CustomerSegmentationView extends Component {
    constructor (props) {
        super()
        this.state = {
            selected: '',
            input: '',
            operation: '',
            value: '',
            startDate: new Date(),
            endDate: new Date(),  
        }
         
    }


    handleStartDateChange = date => {
        this.setState({
          startDate: date
        });
      };

    handleEndDateChange = date => {
        this.setState({
          endDate: date
        });
      };

    handleChange = (e, {value}) => {
        this.setState({
            selected: value,
        })
        console.log(this.state.selected)
    }

    InputChange =(e, {value}) => {
        this.setState({
            input: value,
            condition: this.state.column + this.state.operation + value
        })
        console.log(this.state.condition)
    }

    OperationChange =(e, {value}) => {
        this.setState({
            operation: value,
            condition: this.state.column + value + this.state.input
        })
    }

    ColumnChange = (e, {value}) => {
        this.setState( {
            column: value, 
            condition: value + this.state.operation + this.state.input
        })
    }

    runQuery = (e) => {
        console.log(e)
    }
    
    render () {
        const values = [
            {
                key: 'Marketing Channel',
                text: 'Marketing Channel',
                value: 'Marketing Channel',
            },
            {
                key: 'Age',
                text: 'Age',
                value: 'Age',
            },
            {
                key: 'Location',
                text: 'Location',
                value: 'Location',
            },
            {
                key: 'First Impression Channel',
                text: 'First Impression Channel',
                value: 'First Impression Channel',
            },
            {
                key: 'Behavior',
                text: 'Behavior',
                value: 'Behavior',
            },
        ]

        const operations = [
            {
                key: '=',
                text: '=',
                value: '=',
            },
            {
                key: '<',
                text: '<',
                value: '<',
            },
            {
                key: '>',
                text: '>',
                value: '>',
            },
        ]


        return (
            <div className="firstPage">
                <Dropdown
                    placeholder='Choose what to segment your customers by'
                    selection
                    options={values}
                    onChange={this.handleChange}
                />
                <div className="secondSection">
                    <Dropdown
                        placeholder='Add a condition'
                        selection
                        options={values}
                        onChange={this.ColumnChange}
                    />
                    <Dropdown
                        placeholder='operations'
                        selection
                        options={operations}
                        onChange={this.OperationChange}
                    />
                    <Input onChange={this.InputChange}/>
                </div>
                <div className="dateSection">
                    <DatePicker selected={this.state.startDate} onChange={date => this.setStartDate(date)} />
                </div>
                <div className='button' onClick='runQuery'>
                    Run Query
                </div>
            </div>
        )
    }
}

export default CustomerSegmentationView;