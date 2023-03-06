import React from "react"
import styled from "styled-components"

const WrapperNavStyled = styled.div`
	padding: 0px 100px;
	nav {
		ul {
			display: flex;

			li {
				padding: 0 20px;
				list-style: none;
				a {
					text-decoration: none;
					font-weight: bold;
					color: ${(props) => props.theme.color};
				}
			}
		}
	}
	small {
		padding: 0 10px;
		color: ${(props) => props.theme.fontColor};
	}

	svg {
		font-size: 28px;
		color: ${(props) => props.theme.color};
		margin: 0 20px;
	}
`

export default WrapperNavStyled
