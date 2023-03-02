import React from "react"
import BannerStyled from "../Components/BannerStyled"
import Icons from "../Components/Icons"
import { BsAlarmFill } from "react-icons/bs"
import { BsFillBasketFill } from "react-icons/bs"
import { BsFillBellFill } from "react-icons/bs"
import BoxStyled from "../Components/BoxStyled"

const Home: React.FC = () => {
	return (
		<>
			<BannerStyled bannerHeight="40vh">
				<h1>Minha primeira pagina React</h1>
			</BannerStyled>
			<BoxStyled>
				<Icons
					title="Somente para desktop"
					paragraph="Vamos aprender, como utilizar um framework"
					icons={<BsAlarmFill />}
				/>
				<Icons
					title="Criado com componentes"
					paragraph="Utilizamos o Styled Components"
					icons={<BsFillBasketFill />}
				/>
				<Icons
					title="Facil aproveitamento"
					paragraph="Estamos no caminho"
					icons={<BsFillBellFill />}
				/>
			</BoxStyled>
		</>
	)
}

export default Home
