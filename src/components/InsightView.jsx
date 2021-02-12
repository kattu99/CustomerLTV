import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import { Divider, Dropdown, Header, Icon } from 'semantic-ui-react'
import '../css/insights.css'

class InsightCard extends Component {
    constructor (props) {
        super()
    }

    render () {
        return (
            <div className='insightCard'>
                <div className='titleWrapper'>
                    <p className='title'>{this.props.title}</p>
                </div>
                <Divider />
                <div className='insightCardInfo'>
                    <Icon style={{'fontSize': '70px'}} name={this.props.icon} />
                    <div className='insightCardInfoText'>
                        <p>{this.props.description}</p>
                        <p className='actionable'>{this.props.margin}</p>
                    </div>
                </div>
            </div>
        )
    }
}

class Insights extends Component {
    constructor (props) {
        super()
        this.state = {
            metric: '',
            time:'',
            segment:'',
        }
    }

    metricChange = (e, {value}) => {
        this.setState({
            metric: value
        })
    }
    
    timeChange = (e, {value}) => {
        this.setState({
            time: value
        })
    }
    
    segmentChange = (e, {value}) => {
        this.setState({
            segment: value
        })
    }

    render () {

        const timeOptions = [
            {
                key: 'week',
                text: 'week',
                value: 'week',
            },
            {
                key: 'day',
                text: 'day',
                value: 'day',
            },
            {
                key: 'month',
                text: 'month',
                value: 'month',
            },
        ]

        const segmentOptions = [
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
        let component;
        if (this.state.metric == 'churn' && this.state.segment == 'location') {
            component = <div className='insightsPage'>
                            <InsightCard 
                                icon='tag'
                                title='Discount Code'
                                description='The discount codes that have the format "FRIEND-" have the highest LTV on average.'
                                margin='LTV Increase: $50'
                            />
                            <InsightCard 
                                icon='location arrow'
                                title='Location'
                                description='Your customers from Arizona, California and New York have significantly higher retention than your other customers'
                                margin='Retention Increase: 5%'
                            />
                            <InsightCard 
                                icon='shopping cart'
                                title='First Product'
                                description='Customers who started with the Mint Flavor for their subscription are less likely to churn.'
                                margin='Retention Increase: 10%'
                            />
                        </div>
        }
        else if (this.state.metric == 'churn' && this.state.segment == 'first_product') {
            component = <div className='insightsPage'>
                            <InsightCard 
                                icon='shopping cart'
                                title='First Product'
                                description='Customers who started with the Mint Flavor for their subscription are less likely to churn.'
                                margin='Retention Increase: 10%'
                            />
                        </div>
        }
        else if (this.state.metric == 'churn' && this.state.segment == 'province') {
            component = <div className='insightsPage'>
                            <InsightCard 
                                icon='location arrow'
                                title='Location'
                                description='Your customers from Arizona, California and New York have significantly higher retention than your other customers'
                                margin='Retention Increase: 5%'
                            />
                        </div>
        }
        else if (this.state.metric == 'LTV' && this.state.segment == 'discount_codes') {
            component = <div className='insightsPage'>
                            <InsightCard 
                                icon='tag'
                                title='Discount Code'
                                description='The discount codes that have the format "FRIEND-" have the highest LTV on average.'
                                margin='LTV Increase: $50'
                            />

                        </div>
        }
        else if (this.state.metric == '' && this.state.segment == '') {
            component = <div className='insightsPage'>
                            <InsightCard 
                                icon='tag'
                                title='Discount Code'
                                description='The discount codes that have the format "FRIEND-" have the highest LTV on average.'
                                margin='LTV Increase: $50'
                            />
                            <InsightCard 
                                icon='location arrow'
                                title='Location'
                                description='Your customers from Arizona, California and New York have significantly higher retention than your other customers'
                                margin='Retention Increase: 5%'
                            />
                            <InsightCard 
                                icon='shopping cart'
                                title='First Product'
                                description='Customers who started with the Mint Flavor for their subscription are less likely to churn.'
                                margin='Retention Increase: 10%'
                            />
                        </div>
        }
        else if (this.state.metric == 'churn') {
            component = <div className='insightsPage'>
                            <InsightCard 
                                icon='location arrow'
                                title='Location'
                                description='Your customers from Arizona, California and New York have significantly higher retention than your other customers'
                                margin='Retention Increase: 5%'
                            />
                            <InsightCard 
                                icon='shopping cart'
                                title='First Product'
                                description='Customers who started with the Mint Flavor for their subscription are less likely to churn.'
                                margin='Retention Increase: 10%'
                            />
                        </div>
        }
        else if (this.state.metric == 'LTV') {
            component = <div className='insightsPage'>
                            <InsightCard 
                                icon='tag'
                                title='Discount Code'
                                description='The discount codes that have the format "FRIEND-" have the highest LTV on average.'
                                margin='LTV Increase: $50'
                            />
                        </div>
        }


        return (
            <div className='container'>
                <div className='topBar'>
                    <div className='dropdown1'>
                        <Dropdown
                            placeholder='Segment'
                            icon='filter'
                            floating
                            labeled
                            button
                            className='icon'
                            options={segmentOptions}
                            onChange={this.segmentChange}
                        />
                    </div>
                    <div className='dropdown2'>
                        <Header as='h4'>
                            <Icon name='trophy'/>
                            <Header.Content>
                            Insights of{' '}
                            <Dropdown
                                inline
                                header='Adjust time span'
                                options={timeOptions}
                                defaultValue={timeOptions[0].value}
                                onChange={this.timeChange}
                            />
                            </Header.Content>
                        </Header>
                    </div>
                    <div className='dropdown3'>
                        <Dropdown
                            placeholder='Metric'
                            icon='chart line'
                            floating
                            labeled
                            button
                            className='icon'
                            options={sortby}
                            onChange={this.metricChange}
                        />
                    </div>
                </div>
                {component}
            </div>
        )
    }
}

export default Insights;