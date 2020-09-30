import React, { Component } from 'react'
import { Badge, Col, Container, Row } from 'reactstrap'
import Header from '../Header'
import Search from './Search'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import Details from './Details'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Container>
					<Row className="mt-4">
						<Col sm={12}>
							<Search />
						</Col>
						<Col sm={12} className="mt-3 mb-3">
							<Details />
						</Col>
					</Row>
					<Row>
						<Col sm={12} md={3}>
							<LeftPanel />
						</Col>
						<Col sm={12} md={9}>
							<RightPanel />
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}

export default App
