import React from "react"
import BoxStyled from "./BoxStyled"
import TitleStyled from "./TitleStyled"
import WrapperContentTextStyled from "./WrapperContentTextStyled"

interface ContentProps {
	title: string
	description: string
	imgSrc: string
	imgAlt: string
	rowDirection?: "row-reverse" | "row"
}

const Content: React.FC<ContentProps> = ({
	title,
	description,
	imgSrc,
	imgAlt,
	rowDirection,
}) => {
	return (
		<BoxStyled
			widthSize="100%"
			heightSize="min-content"
			rowDirection={rowDirection}
		>
			<WrapperContentTextStyled>
				<TitleStyled fontSize="24px">{title}</TitleStyled>
				<p>{description}</p>
			</WrapperContentTextStyled>
			<figure>
				<img src={imgSrc} alt={imgAlt} />
			</figure>
		</BoxStyled>
	)
}
export default Content
