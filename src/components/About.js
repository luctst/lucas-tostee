import React from "react";
import talkToApi from "../utils/talkToApi";
import SCMainAbout from "../styles/About.style";
import Loader from "./Loader";

const About = React.memo(() => {
	const [repoLength, setRepoLenght] = React.useState(0);

	React.useEffect(() => {
		talkToApi("/user/repos?sort=pushed&per_page=100", "get", {
			headers: {
				Authorization: `token ${process.env.REACT_APP_APIKEY}`,
				"User-Agent": "luctst"
			}
		})
		.then(response => setRepoLenght(response.length))
	}, []);

	return (
		<SCMainAbout>
			<h1>
				Hello{" "}
				<span role="img" aria-label="Hello emoji">
					👋
				</span>
			</h1>
			<h2>
				Welcome to my website, my name is Lucas I live in Paris I'm working as a
				full-stack JavaScript developer, I also{" "}
				<span role="img" aria-label="Heart green emoji">
					{" "}
					💚
				</span>{" "}
				open source.
			</h2>
			<h2>
				I currently maintain more than {repoLength === 0 ? <Loader /> : repoLength}{" "}
				projects on Github, most of the time I use JavaScript.
			</h2>
			<h2>
				Click on the link below to see more{" "}
				<span role="img" aria-label="Go down emoji">
					👇
				</span>
			</h2>
		</SCMainAbout>
	);
});

export default About;