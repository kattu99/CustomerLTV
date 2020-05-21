import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import { Grid, Dropdown, Segment, Input} from 'semantic-ui-react'
import top from '../res/top.png'
import middle from '../res/middle.png'
import bottom from '../res/bottom.png'
import facebook from '../res/facebook-logo.png'
import google from '../res/google.png'
import email from '../res/email.png'
import DatePicker from "react-date-picker";
 
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css'

import '../css/firstpage.css'

const axios = require('axios');

class CustomerSegment extends Component {
    constructor (props) {
        super()
    }

    render () {
        return (
        <div className='customer_segment' style={{'backgroundColor':this.props.color}}>
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
                            AOV: {this.props.AOV}
                        </Grid.Column>
                        <Grid.Column>
                            LTV: {this.props.LTV}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            Referral Rate: {this.props.RR}
                        </Grid.Column>
                        <Grid.Column>
                            Churn Rate: {this.props.CR}
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
            items: [],  
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

    handleSecondChange = (e, {value}) => {
        this.setState({
            sortSelected: value,
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
        let data = {
            "param": this.state.selected,
            "sortSelected": this.state.sortSelected
        }
        let jsondata = JSON.stringify(data)
        fetch('http://localhost:5000/LTVChurn', {
            method: 'POST',
            body: jsondata,
        })
        .then(response => 
            response.json())
        .then(data => {
            //do something with response
            console.log(data)
            this.setState({items: data})
          })
          .catch(err => {
            console.log(err)
          })
    }

    

    render () {
        const values = [
            {
                key: 'location',
                text: 'location',
                value: 'province',
            },
            {
                key: 'Behavior',
                text: 'Behavior',
                value: 'behavior',
            },
            {
                key: 'Discount Code',
                text: 'Discount Code',
                value: 'discount_codes',
            },
            {
                key: 'First Purchase',
                text: 'First Purchase',
                value: 'first_product',
            },
            {
                key: 'Discount Type',
                text: 'Discount Type',
                value: 'discount_type',
            }
        ]


        const sortby = [
            {
                key: 'churn',
                text: 'churn',
                value: 'churn',
            },
            {
                key: 'LTV',
                text: 'LTV',
                value: 'LTV',
            },
            {
                key: 'Frequency',
                text: 'Frequency',
                value: 'frequency',
            },
            {
                key: 'AOV',
                text:'AOV',
                value: 'AOV'
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

        let lst = []
        let count = 0
        for (var i=0; i < this.state.items.length; i++) {
            let item = this.state.items[i]
            console.log(item)
            if (count % 3 == 0) {
                lst.push(
                    <CustomerSegment title={item['heading']} image={top} LTV={item['LTV']} AOV={item['AOV']} CR={item['churn']} RR={item['frequency']} color='#1ECE96'/>
                )
            }
            else if (count % 3 == 1) {
                lst.push(
                    <CustomerSegment title={item['heading']} image={middle} LTV={item['LTV']} AOV={item['AOV']} CR={item['churn']} RR={item['frequency']} color='#4C71F4'/>
                )
            }
            else if (count % 3 == 2) {
                lst.push(
                    <CustomerSegment title={item['heading']} image={bottom} LTV={item['LTV']} AOV={item['AOV']} CR={item['churn']} RR={item['frequency']} color='#FF7067'/>
                )
            }
            count = count + 1
        }

        return (
           
            <div className="firstPage">
                <Dropdown
                    placeholder='Choose what to segment your customers by'
                    selection
                    options={values}
                    onChange={this.handleChange}
                />
                <p className='chooseDate'>Choose Date Range</p>
                <div className="dateSection">
                    <DatePicker value={this.state.startDate} onChange={date => this.handleStartDateChange(date)} />
                    <DatePicker value={this.state.endDate} onChange={date => this.handleEndDateChange(date)} />
                </div>
                <p className='chooseDate'>Prioritize By</p>
                <Dropdown 
                    placeholder='Choose what metric to sort by'
                    selection
                    options={sortby}
                    onChange={this.handleSecondChange}
                />
                <div className='button' onClick={this.runQuery}>
                    Run Query
                </div>
                {lst.map((item) => 
                    item
                )}
            </div>
        )
    }
}

export default CustomerSegmentationView;