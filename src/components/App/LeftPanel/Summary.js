import * as React from 'react'
import { connect } from 'react-redux'
import { Card, CardBody } from 'reactstrap'

type Props = {
	rank: string | Number,
	themes: Array<string>,
	volume: string | Number,
}

const Summary = ({ rank, volume, themes }) => {
	return (
		<>
			<Card>
				<CardBody>
					<div>HIGEST RANK: {rank || '--'}</div>
					<div>SEARCH VOLUMN: {volume || '--'}</div>
					<div>THEME: {themes ? themes.join(', ') : '--'}</div>
				</CardBody>
			</Card>
		</>
	)
}

const mapStateToProps = state => ({
	rank: state.getIn(['AppReducer', 'info', 'highest_rank']),
	volume: state.getIn(['AppReducer', 'info', 'search_volume']),
	themes: state.getIn(['AppReducer', 'info', 'theme_list']),
})

export default connect(mapStateToProps, null)(React.memo(Summary))
