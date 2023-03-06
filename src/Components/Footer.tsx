import React from "react"
import { Link } from "react-router-dom"
import routes from "../Config/routes"
import { AiFillTwitterSquare } from "react-icons/ai"
import { BsInstagram, BsFacebook } from "react-icons/bs"
import WrapperFooterStyled from "./WrapperFooterStyled"
import WrapperNavStyled from "./WrapperNavStyled"

const Footer: React.FC = () => {
	return (
		<WrapperFooterStyled>
			<WrapperNavStyled>
				<nav>
					<ul>
						{routes.map((route, index) => {
							return (
								<li key={index}>
									<Link to={route.url}> {route.label} </Link>
								</li>
							)
						})}
					</ul>
				</nav>
				<small>&copy; Your WebSite 2020. All Right Reserved</small>
			</WrapperNavStyled>
			<WrapperNavStyled>
				{<BsInstagram />}
				{<BsFacebook />}
				{<AiFillTwitterSquare />}
			</WrapperNavStyled>
		</WrapperFooterStyled>
	)
}

export default Footer
