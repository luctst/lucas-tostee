import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from "./appStore";
import { Container } from "./styles/layout/Container";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeaderLeft from "./components/HeaderLeft/HeaderLeft";
import HeaderRight from './container/Header-right/HeaderRight';
import Loader from './components/Loader/Loader';
import * as serviceWorker from './serviceWorker';
const About = React.lazy(() => import("./components/About/About"));
const ProjectHandler = React.lazy(() => import("./container/ProjectHandler/ProjectHandler"));
const Notfound = React.lazy(() => import("./components/NotFound/NotFound"));

render(
	<Provider store={store}>
		<Container as="section">
			<BrowserRouter>
				<HeaderLeft />
				<HeaderRight />
				<React.Suspense fallback={<div><Loader /></div>}>
					<Switch>
						<Route exact strict sensitive path="/" component={About} />
						<Route exact strict sensitive path="/projects" component={ProjectHandler} />
						<Route component={Notfound} />
					</Switch>
				</React.Suspense>
			</BrowserRouter>
		</Container>
	</Provider>
	,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
