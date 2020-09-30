// @flow
import * as React from 'react'
import { AngleDownIcon, AngleUpIcon } from 'react-line-awesome'
import { connect } from 'react-redux'
import { Button, Card, CardBody, Collapse } from 'reactstrap'
import styled from 'styled-components/macro'

const ListWrapper = styled.div`
	display: flex;
	flex-direction: column;
`

const ToggleBtn = styled.button`
	width: 100%;
	border: unset;
	padding: 10px;
	text-align: left;
`

type Props = {
	packsList: Object
}

const Packs = ({ packsList }: Props): React.Node => {
	const [isOpen, setOpen] = React.useState(true)

	const toggle = () => setOpen(!isOpen)

	return (
		<>
			<Card>
				<CardBody className="p-0">
					<ToggleBtn color="primary" onClick={toggle}>
						PACKS AVALIABLE
						{isOpen ? <AngleDownIcon/> : <AngleUpIcon />}
					</ToggleBtn>
					<Collapse isOpen={isOpen} className="p-3">
						<ListWrapper>
							{packsList &&
								packsList.map(each => (
									<div key={each}>{each.split('_').join(' ')}</div>
								))}
						</ListWrapper>
					</Collapse>
				</CardBody>
			</Card>
		</>
	)
}

const mapStateToProps = state => ({
	packsList: state.getIn(['AppReducer', 'info', 'serp_packs']),
})

export default connect(mapStateToProps, null)(React.memo(Packs))
