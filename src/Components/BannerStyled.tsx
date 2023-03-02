import React from "react"
import styled, { StyledComponent } from "styled-components"

interface BannerStyledProps {
	bannerHeight?: string
}

const BannerStyled = styled.div<BannerStyledProps>`
	height: ${(props) => (props.bannerHeight ? props.bannerHeight : "30vh")};
	background-image: url(./assets/images/ocean.jpg);
	background-position: center;

	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	h1 {
	}
`

export default BannerStyled
