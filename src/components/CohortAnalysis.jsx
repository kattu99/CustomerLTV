import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import { Grid, Dropdown, Segment, Input} from 'semantic-ui-react'
import '../css/firstpage.css'
import '../css/cohortanalysis.css'
import { Line } from 'react-chartjs-2';


class CustomerCohortAnalysis extends Component {
    constructor (props) {
        super()
        this.state = {
            selected: '',
            column: '',
            operation: '',
            condition: '',
            metric: '',
            data: [],
            options: [],
            showTable: false, 
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

        let metrics = [
            {
                key: 'AOV',
                text: 'Average Order Value',
                value: 'AOV'
            },
            {
                key: 'lifetime',
                text: 'Lifetime',
                value: 'lifetime'
            },
            {
                key: 'retention_rate',
                text: 'Retention Rate',
                value: 'retention_rate'
            },
            {
                key: 'revenue',
                text: 'Revenue',
                value: 'revenue'
            }
        ]

        this.runQuery = (e) => {
            console.log(this.state.metric)
            let data = {
                "field": this.state.field,
                "operation": this.state.operation,
                "metric": this.state.metric, 
                "condition": this.state.condition,
            }
            let jsondata = JSON.stringify(data)
            fetch('https://lucyltv.herokuapp.com/CohortAnalysis', {
                method: 'POST',
                body: jsondata,
            })
            .then(response => 
                response.json())
            .then(data => {
                //do something with response
                const options={
                    scales: {
                        yAxes: [{
                          scaleLabel: {
                            display: true,
                            labelString: this.state.metric
                          }
                        }],
                        xAxes: [{
                            scaleLabel: {
                              display: true,
                              labelString: 'Cohort Group'
                            }
                          }]
                      }  
                }
                const item = {
                    labels: data['X'],
                    datasets: [
                      {
                        label: this.state.metric,
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: data['Y']
                      }
                    ]
                  };
                  
                this.setState({
                    data: item, 
                    options: options,
                    showTable: true,
                })
              })
              .catch(err => {
                console.log(err)
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

        this.metricChange = (e, {value}) => {
            this.setState({
                metric: value
            })
        }

        let component
        if (this.state.showTable) {
            component = <div className='graph'>
                            <Line data={this.state.data} options={this.state.options} width={600} height={300} />
                        </div>
        }
        return (
           
            <div className = 'cohortAnalysis'>
                <div className='cohortAnalysisOptions'>
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
                    <Dropdown 
                        placeholder = 'Choose metric to analyze'
                        selection
                        options={metrics}
                        onChange = {this.metricChange}
                    />
                    <div className='button' onClick={this.runQuery}>
                        Run Query
                    </div>
                </div>
                {component}
            </div>
        )
    }
}

export default CustomerCohortAnalysis;