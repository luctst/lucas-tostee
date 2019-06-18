import React from "react";
import SCMainAbout from "./About.style";

const About = (React.memo(() => {
	return (
		<SCMainAbout>
			<section>
				<h1>Bienvenue</h1>
				<h2>Welcome banana's fan !! You will find on this website a lot of monkey's, gorilla.. After all they are your ancestors. You can scroll down to learn more about us, vous pouvez me suivre sur <a href="https://www.twitter.com/ltostee" target="_blank" rel="noopener noreferrer">Twitter</a> ou sur <a href="https://www.github.com/luctst" target="_blank" rel="noopener noreferrer">GitHub</a></h2>
			</section>
		</SCMainAbout>
	);
}));

export default About;
