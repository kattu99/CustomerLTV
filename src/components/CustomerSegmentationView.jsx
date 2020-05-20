import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import { Grid, Dropdown, Segment, Input} from 'semantic-ui-react'
import top from '../res/top.png'
import middle from '../res/middle.png'
import bottom from '../res/bottom.png'
import facebook from '../res/facebook-logo.png'
import google from '../res/google.png'
import email from '../res/email.png'

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
            value: ''
        }
    }

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

        const firstUser = {
            'age':'50',
            'origin': 'FB',
            'AOV': '200',
            'LTV': '1000',
            'RR': '15%',
            'CR':'10%',
        }
        const secondUser = {
            'age':'50',
            'origin': 'FB',
            'AOV': '100',
            'LTV': '850',
            'RR': '12%',
            'CR':'10%',
        }
        const thirdUser = {
            'age':'50',
            'origin': 'FB',
            'AOV': '80',
            'LTV': '400',
            'RR': '12',
            'CR':'9',
        }

        const firstUser1 = {
            'age':'50',
            'origin': 'FB',
            'AOV': '200',
            'LTV': '1000',
            'RR': '15%',
            'CR':'10%',
        }
        const secondUser2 = {
            'age':'50',
            'origin': 'FB',
            'AOV': '300',
            'LTV': '5000',
            'RR': '12%',
            'CR':'10%',
        }
        const thirdUser3 = {
            'age':'50',
            'origin': 'FB',
            'AOV': '1000',
            'LTV': '50',
            'RR': '20',
            'CR':'7',
        }

        let component;
        if (this.state.selected === 'Behavior') {
            component = <div>
                            <CustomerSegment title='Power User' image={top} user={firstUser} color='#1ECE96'/>
                            <CustomerSegment title='High Potential' image={middle} user={secondUser} color='#4C71F4'/>
                            <CustomerSegment title='At Risk' image={top} user={thirdUser} color='#FF7067'/>
                        </div>
        }
        else if (this.state.selected === 'Marketing Channel' && this.state.condition === 'Location=CA') {
            component = <div>
                            <CustomerSegment title='Facebook Ads' image={facebook} user={firstUser1} color='#1ECE96'/>
                            <CustomerSegment title='Google Ads' image={google} user={secondUser2} color='#4C71F4'/>
                            <CustomerSegment title='Email' image={email} user={thirdUser3} color='#FF7067'/>
                        </div>
        }
        else if (this.state.selected === 'Age') {
            component = <div>
                            <CustomerSegment title='18-25' image={top} user={firstUser} color='#1ECE96'/>
                            <CustomerSegment title='25-40' image={middle} user={secondUser} color='#4C71F4'/>
                            <CustomerSegment title='40-60' image={bottom} user={thirdUser} color='#FF7067'/>
                        </div>
        }
        else if (this.state.selected === 'Marketing Channel') {
            component = <div>
                            <CustomerSegment title='Facebook Ads' image={facebook} user={firstUser} color='#1ECE96'/>
                            <CustomerSegment title='Google Ads' image={google} user={secondUser} color='#4C71F4'/>
                            <CustomerSegment title='Email' image={email} user={thirdUser} color='#FF7067'/>
                        </div>
        }
        else if (this.state.selected === 'Marketing Channel') {
            component = <div>
                            <CustomerSegment title='Facebook Ads' image={facebook} user={firstUser} color='#1ECE96'/>
                            <CustomerSegment title='Google Ads' image={google} user={secondUser} color='#4C71F4'/>
                            <CustomerSegment title='Email' image={email} user={thirdUser} color='#FF7067'/>
                        </div>
        }
        else if (this.state.selected === 'Marketing Channel') {
            component = <div>
                            <CustomerSegment title='Facebook Ads' image={facebook} user={firstUser} color='#1ECE96'/>
                            <CustomerSegment title='Google Ads' image={google} user={secondUser} color='#4C71F4'/>
                            <CustomerSegment title='Email' image={email} user={thirdUser} color='#FF7067'/>
                        </div>
        }
        else if (this.state.selected === 'First Impression Channel') {
            component = <div>
                            <CustomerSegment title='Facebook Ads' image={facebook} user={firstUser} color='#1ECE96'/>
                            <CustomerSegment title='Google Ads' image={google} user={secondUser} color='#4C71F4'/>
                            <CustomerSegment title='Email' image={email} user={thirdUser} color='#FF7067'/>
                        </div>
        }
        else if (this.state.selected === 'special') {
            component = <div>
                            <CustomerSegment title='Facebook Ads' image={facebook} user={firstUser} color='#1ECE96'/>
                            <CustomerSegment title='Google Ads' image={google} user={secondUser} color='#4C71F4'/>
                            <CustomerSegment title='Email' image={email} user={thirdUser} color='#FF7067'/>
                        </div>
        }
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
                {component}
            </div>
        )
    }
}

export default CustomerSegmentationView;