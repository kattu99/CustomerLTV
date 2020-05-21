import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import { Segment } from 'semantic-ui-react'
import '../css/insights.css'

class Insights extends Component {
    constructor (props) {
        super()
    }

    render () {
        return (
            <div className='container'>
            <div className='insightsPage'>
                <Segment> The discount codes that have the format "FRIEND-" have the highest LTV on average. </Segment>
                <Segment> Your customers from Arizona, California and New York have significantly higher retention than your other customers </Segment>
                <Segment> Customers who started with the Mint Flavor for their subscription are less likely to churn. </Segment>
            </div>
            </div>
        )
    }
}

export default Insights;