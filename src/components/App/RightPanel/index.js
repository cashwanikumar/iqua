// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import { Card, CardBody } from 'reactstrap'
import styled from 'styled-components/macro'
import { propertyViaFilter } from '../../../containers/AppContainer/selectors'
import EachRow from './EachRow'
import PropertyTag from './PropertyTag'

const ListContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 20px;
`

const RightPanel = ({ modelList }) => {
	console.log(modelList)
	return (
		<Card>
			<CardBody>
				<PropertyTag />
				<ListContainer>
					{modelList.size === 0 && <h3>No Record Found</h3>}
					{modelList.map((each, index) => (
						<EachRow
							key={`e-${index}`}
							displayText={each.get('display_text')}
							value={each.get('value')}
							isPositiveCorrelation={each.get('is_positive_correlation')}
						/>
					))}
				</ListContainer>
			</CardBody>
		</Card>
	)
}

const mapStateToProps = state => ({
	modelList: propertyViaFilter(state),
})

export default connect(mapStateToProps, null)(React.memo(RightPanel))
