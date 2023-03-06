import React from "react"
import AppRoutes from "./Routes/AppRoutes"
import GlobalStyled from "./Config/GlobalStyled"
import { ThemeProvider } from "styled-components"
import theme from "./Config/theme"

function App() {
	return (
		<ThemeProvider theme={theme.dark}>
			<GlobalStyled />
			<AppRoutes />
		</ThemeProvider>
	)
}

export default App
