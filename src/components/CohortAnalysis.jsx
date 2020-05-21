import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import { Grid, Dropdown, Segment, Input} from 'semantic-ui-react'
import '../css/firstpage.css'
import '../css/cohortanalysis.css'
class CustomerCohortAnalysis extends Component {
    constructor (props) {
        super()
        this.state = {
            selected: '',
            column: '',
            operation: '',
            condition: '',
        }
    }

    render() {
        let values = [
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

        let operations = [
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

        this.runQuery = e => {
            let parameter_string = 'field='+this.state.field+'&operation='+this.state.operation+'&condition='+this.state.condition
            this.setState({
                parameterString: parameter_string, 
                showTable: true,
            })
        }

        this.fieldChange = (e, {value}) => {
            this.setState({
                field: value
            })
        }

        this.operationChange = (e, {value}) => {
            this.setState({
                operation: value
            })
        }

        this.conditionChange = (e, item) => {
            this.setState({
                condition: item.value
            })
        }

        let component
        if (this.state.showTable) {
            component = <div>
                <img src={'http://localhost:5000/CohortAnalysisRetention?' + this.state.parameterString}  alt='first'/>
            </div>
        }

        return (
           
            <div className = 'cohortAnalysis'>
                <div className="secondSection">
                    <Dropdown
                        placeholder='Add a condition'
                        selection
                        options={values}
                        onChange={this.fieldChange}
                    />
                    <Dropdown
                        placeholder='operations'
                        selection
                        options={operations}
                        onChange={this.operationChange}
                    />
                    <Input onChange={this.conditionChange}/>
                </div>
                <div className='button' onClick={this.runQuery}>
                    Run Query
                </div>
                {component}
            </div>
        )
    }
}

export default CustomerCohortAnalysis;