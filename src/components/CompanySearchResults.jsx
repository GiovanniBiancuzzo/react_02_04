import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Job from './Job'
import uniqid from 'uniqid'

export default class CompanySearchResults extends React.Component {

    state = {
        jobs: []
    }

    componentDidMount() {
        this.getJobs()
    }

    baseEndpoint = 'https://strive-jobs-api.herokuapp.com/jobs?company='

    getJobs = async () => {
        const response = await fetch(this.baseEndpoint + this.props.match.params.companyName)
        const { data } = await response.json()

        this.setState({ jobs: data })
    }

    render() {
        return <Container>
            <Row>
                <Col>
                    {
                        this.state.jobs.map(jobData => <Job key={uniqid()} data={jobData} />)
                    }
                </Col>
            </Row>
        </Container>
    }
}