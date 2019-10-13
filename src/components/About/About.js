import React from "react";
import fetchData from "./../../utils/fetchData";
import SCMainAbout from "./About.style";
import Loader from "./../Loader/Loader";

const About = (React.memo(() => {
	const [repoLength, setRepoLenght] = React.useState(0);

	React.useEffect(() => {
		fetchData("https://api.github.com/user/repos?page=1&per_page=100")
		.then(reponse => setRepoLenght(reponse.length));
	}, []);

	return (
		<SCMainAbout>
			<h1>Hello <span role="img" aria-label="Hello emoji">👋</span></h1>
			<h2>Welcome to my website, my name is Lucas I live in Paris I'm working as a full-stack JavaScript developer, I also <span role="img" aria-label="Heart green emoji"> 💚</span> open source.</h2>
			<h2>I currently maintain more than {repoLength === 0 ? <Loader/> : repoLength} projects on Github, most of the time I use JavaScript.</h2>
			<h2>Click on the link below to see more <span role="img" aria-label="Go down emoji">👇</span></h2>
		</SCMainAbout>
	);
}));

export default About;
