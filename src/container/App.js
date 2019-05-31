import React from 'react';
import {Container} from "../styles/layout/Container";
import Navigation from "../components/Navigation/Navigation";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import About from "../components/About/About";
import ProjectHandler from "./ProjectHandler/ProjectHandler";
import NotFound from "../components/NotFound/NotFound";


function App() {
  return (
		<Container as="section">
			<BrowserRouter>
				<Navigation/>
				<Switch>
						<Route exact strict sensitive path="/" component={About}/>
						<Route exact strict sensitive path="/projects" component={ProjectHandler}/>
						<Route component={NotFound}/>
				</Switch>
			</BrowserRouter>
		</Container>
  );
}

export default App;
