import React from "react"
import styled, { StyledComponent } from "styled-components"

interface BannerStyledProps {
	bannerHeight?: string
}

const BannerStyled = styled.div<BannerStyledProps>`
	background-image: url(./assets/images/ocean.jpg);
	background-size: cover;
	background-position: center;
	height: ${(props) => (props.bannerHeight ? props.bannerHeight : "30vh")};
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	color: #fff;
	width: 100%;
`

export default BannerStyled
