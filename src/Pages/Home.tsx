import React from "react"
import BannerStyled from "../Components/BannerStyled"
import Icons from "../Components/Icons"
import { BsAlarmFill } from "react-icons/bs"
import { BsFillBasketFill } from "react-icons/bs"
import { BsFillBellFill } from "react-icons/bs"
import BoxStyled from "../Components/BoxStyled"
import TitleStyled from "../Components/TitleStyled"
import Content from "../Components/Content"
import Footer from "../Components/Footer"

const Home: React.FC = () => {
	return (
		<>
			<BannerStyled bannerHeight="70vh">
				<TitleStyled fontSize="60px">
					Minha primeira pagina com React
				</TitleStyled>
			</BannerStyled>
			<BoxStyled heightSize="40vh">
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

			<Content
				title="Lorem Ipsum"
				description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
				imgAlt="Camera de um celular"
				imgSrc="\assets\images\img1card.jpg"
			></Content>

			<Content
				title="Lorem Ipsum"
				description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
				imgAlt="Imagem de um codigo"
				imgSrc="\assets\images\img2card.jpg"
				rowDirection="row-reverse"
			></Content>

			<Content
				title="Lorem Ipsum"
				description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
				imgAlt="Criança fazendo uma torre de blocos"
				imgSrc="\assets\images\img3card.jpg"
			></Content>

			<BannerStyled bannerHeight="40vh">
				<TitleStyled fontSize="40px">Contato</TitleStyled>
			</BannerStyled>

			<Footer></Footer>
		</>
	)
}

export default Home
