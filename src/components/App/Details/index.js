// @flow

import * as React from 'react'
import { connect } from 'react-redux'
import { Badge } from 'reactstrap'

type Props = {
	searchVia: string,
}

const Details = ({ searchVia }: Props): React.Node => {
	return (
		<div>
			<small>Keyword</small>{`  "${searchVia}"   `} <Badge>Non - branded</Badge>
		</div>
	)
}

const mapStateToProps = state => ({
	searchVia: state.getIn(['AppReducer', 'searchVia']),
})

export default connect(mapStateToProps, null)(React.memo(Details))
