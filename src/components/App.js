import React from "react";
import {ThemeProvider} from "styled-components";
import theme from "../utils/theme";
import {Container} from "../utils/Container";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export const Context = React.createContext()

function App() {
	const [themeLight, setThemeLight] = React.useState(true)

	const switchTheme = () => setThemeLight(!themeLight)

	if (themeLight) {
		document.querySelector("body").style = "background-color: #fff;padding:0;margin:0;"
	} else {
		document.querySelector("body").style = "background-color: #192735;padding:0;margin:0;"
	}

	return (
		<ThemeProvider theme={theme}>
			<Container as="main">
				<Context.Provider value={themeLight}>
					<About switchTheme={switchTheme}/>
					<Projects />
					<Contact />
				</Context.Provider>
			</Container>
		</ThemeProvider>
	)
}

export default App;
