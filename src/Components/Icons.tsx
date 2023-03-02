import React from "react"
import WrapperIconStyled from "./WrapperIconStyled"

interface IconsProps {
	title: string
	paragraph: string
	icons: React.ReactNode
}

const Icons: React.FC<IconsProps> = ({ icons, paragraph, title }) => {
	return (
		<div>
			<WrapperIconStyled>
				{icons}
				<h2>{title}</h2>
				<p>{paragraph}</p>
			</WrapperIconStyled>
		</div>
	)
}

export default Icons
