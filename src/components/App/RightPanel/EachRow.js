// @flow
import * as React from 'react'
import styled from 'styled-components/macro'

const RowWrapper = styled.div`
	background: #f8f8f8;
    display: flex;
    margin-bottom: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
`

type Props = {
	displayText: string,
	value: number,
	isPositiveCorrelation: boolean,
}

const EachRow = ({ displayText, value, isPositiveCorrelation }: Props) => {
	return (
		<RowWrapper>
			<div>{displayText}</div>
			<div
				style={{
					color: isPositiveCorrelation ? 'green' : 'red',
				}}
			>
				{value}
			</div>
		</RowWrapper>
	)
}

export default EachRow
