import React from "react";
import SCMainAbout from "./About.style";

const About = (React.memo(() => {
	const [repoLength, setRepoLenght] = React.useState(0);

	React.useEffect(() => {
		fetch("https://api.github.com/user/repos?page=1&per_page=100", {
			method: "get",
			headers: {
				"Authorization": "token 49aca5506e3cdc96df58adb1ac17d869586ad851",
				"User-Agent": "luctst",
			}
		}).then(response => {
			if (response.headers.get("link")) {
			} else {
				response.json().then(responseParsed => {
					setRepoLenght(responseParsed.length);
				});
			}
		}).catch(err => new TypeError(err));
	}, []);

	return (
		<SCMainAbout>
			<section>
				<h1>Welcome !</h1>
				<h2>Hello i'm Lucas, i'm 24 years old and i live in Paris, i have a more suitable profile for client-side code, but I am now turning to a more versatile profile and training regularly by contributing to open source projects. I love open source and i'll like to be able to earn my life with it, i'm currently manage more than {repoLength !== 0 && repoLength} projects that you can find on my <a href="https://www.github.com/luctst" target="_blank" rel="noopener noreferrer">GitHub</a> and keep me updated about changes on my <a href="https://twitter.com/luctstt" target="_blank" rel="noopener noreferrer">Twitter</a> . Do not hesitate to follow me and / or support me in my diferents projects :)</h2>
			</section>
		</SCMainAbout>
	);
}));

export default About;
