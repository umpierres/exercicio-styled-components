import React from "react"
import styled from "styled-components"

const WrapperIconStyled = styled.section`
	text-align: center;
	width: 20%;

	svg {
		font-size: 50px;
		color: ${(props) => props.theme.color};
		margin-bottom: 20px;
	}
`

export default WrapperIconStyled
