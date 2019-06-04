import React from 'react';
import {Container} from "../styles/layout/Container";
import Navigation from "../components/Navigation/Navigation";
import {BrowserRouter, Route, Switch} from "react-router-dom";
const About = React.lazy(() => import("../components/About/About"));
const ProjectHandler = React.lazy(() => import("./ProjectHandler/ProjectHandler"));
const Notfound = React.lazy(() => import("../components/NotFound/NotFound"));


function App() {
  return (
		<Container as="section">
			<BrowserRouter>
				<Navigation/>
				<React.Suspense fallback={<div>Loading...</div>}>
					<Switch>
							<Route exact strict sensitive path="/" component={About}/>
							<Route exact strict sensitive path="/projects" component={ProjectHandler}/>
							<Route component={Notfound}/>
					</Switch>
				</React.Suspense>
			</BrowserRouter>
		</Container>
  );
}

export default App;
