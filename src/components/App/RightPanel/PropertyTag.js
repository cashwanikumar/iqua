// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'
import styled from 'styled-components/macro'
import { setFilterBy } from '../../../containers/AppContainer/actions'
import { propertiesCountByImportance } from '../../../containers/AppContainer/selectors'

const ListContainer = styled.div`
	display: flex;
    flex-direction: row;
`

type Props = {
	countMap: Object,
	setFilterByFunc: Function
}

const PropertyTag = ({ countMap, setFilterByFunc }: Props): React.Node => {
	return (
		<ListContainer>
			{Object.keys(countMap).map(key => (
				<Button key={key} className="mr-3" onClick={() => setFilterByFunc(key)}>{`${key}: ${countMap[key]}`}</Button>
			))}
		</ListContainer>
	)
}

const mapStateToProps = state => ({
	countMap: propertiesCountByImportance(state),
})

const mapDispatchToProps = dispatch => ({
	setFilterByFunc: keyWord => dispatch(setFilterBy(keyWord)),
})

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(PropertyTag))
