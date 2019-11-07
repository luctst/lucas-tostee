import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from "./state/store/appStore";
import { Container } from "./styles/Container";
import Loader from './components/Loader/Loader';
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
const Projects = React.lazy(() => import("./container/Projects/Projects"));


it("Should render the app without crashing", () => {
	const divTest = document.createElement("div");
	render(
		<Provider store={store}>
			<Container as="main">
				<React.Suspense fallback={<div><Loader /></div>}>
					<About />
					<Projects />
					<Contact />
				</React.Suspense>
			</Container>
		</Provider>
		, divTest
	);
});
