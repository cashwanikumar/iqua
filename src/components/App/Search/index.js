// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import { Button, Card, CardBody, Col, FormGroup, Input, Row, Spinner } from 'reactstrap'
import { getKeywordBox, getKeyWordModal } from '../../../containers/AppContainer/actions'

type Props = {
	getKeywordBoxFunc: Function,
	getKeyWordModalFunc: Function,
	loading: boolean,
}

const Search = ({ getKeywordBoxFunc, getKeyWordModalFunc, loading }: Props): React.Node => {
	const [input, setInput] = React.useState('')

	const onSearch = (): void => {
		getKeywordBoxFunc(input)
		getKeyWordModalFunc(input)
	}

	return (
		<Card>
			<CardBody>
				<FormGroup row className="flex-no-wrap m-0 ml-2">
					<Input value={input} onChange={e => setInput(e.target.value)} />
					<Button color="primary" className="ml-4 mr-4" onClick={onSearch}>
						{loading ? <Spinner color="light" /> : 'Go'}
					</Button>
				</FormGroup>
				<small>search for "test" or "auto discount"</small>
			</CardBody>
		</Card>
	)
}

const mapStateToProps = state => ({
	loading: state.getIn(['AppReducer', 'loading']),
})

const mapDispatchToProps = dispatch => ({
	getKeywordBoxFunc: keyWord => dispatch(getKeywordBox({ keyWord })),
	getKeyWordModalFunc: keyWord => dispatch(getKeyWordModal({ keyWord })),
})

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Search))
