import React from 'react'
import styled from "styled-components"

const IconContainer = styled.div`
	display: flex;

	img {
		margin-right: 5px;
	}
`

function CounterIcon(props) {
	return <IconContainer>
		<img alt={'Icon'} src={props.icon} onClick={props.onClickIcon} />
		<p>{props.countValue}</p>
	</IconContainer>
}

export default CounterIcon