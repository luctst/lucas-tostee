import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from "./state/store/appStore";
import { Container } from "./styles/Container";
import Loader from './components/Loader/Loader';
import * as serviceWorker from './serviceWorker';
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
const Projects = React.lazy(() => import("./container/Projects/Projects"));

render(
	<Provider store={store}>
		<Container as="main">
			<React.Suspense fallback={<div><Loader /></div>}>
				<About/>
				<Projects/>
				<Contact/>
			</React.Suspense>
		</Container>
	</Provider>
	,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
