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

const TagBtn = styled.button`
	display: inline-block;
	font-weight: 400;
	color: #212529;
	text-align: center;
	vertical-align: middle;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;
	background-color: transparent;
	border: 1px solid transparent;
	padding: 0.375rem 0.75rem;
	font-size: 1rem;
	line-height: 1.5;
	border-radius: 0.25rem;
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
		border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

	&.active {
		color: #fff;
		background-color: #6c757d;
		border-color: #6c757d;
	}
`

type Props = {
	countMap: Object,
	setFilterByFunc: Function,
	selectedFilterBy: string,
}

const PropertyTag = ({ countMap, setFilterByFunc, selectedFilterBy }: Props): React.Node => {
	return (
		<ListContainer>
			{Object.keys(countMap).map(key => (
				<TagBtn
					key={key}
					className={`mr-3 ${selectedFilterBy === key ? 'active' : ''}`}
					onClick={() => setFilterByFunc(key)}
				>{`${key}: ${countMap[key]}`}</TagBtn>
			))}
		</ListContainer>
	)
}

const mapStateToProps = state => ({
	countMap: propertiesCountByImportance(state),
	selectedFilterBy: state.getIn(['AppReducer', 'filterBy']),
})

const mapDispatchToProps = dispatch => ({
	setFilterByFunc: keyWord => dispatch(setFilterBy(keyWord)),
})

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(PropertyTag))
