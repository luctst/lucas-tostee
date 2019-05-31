import React from "react";
import styled from "styled-components";
import Main from "../../styles/layout/Main";
import styleUtils from "../../styles/helper";

const MainAbout = styled(Main)`
	padding-left: 1em;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const MainTitle = styled.h1`
	font-family: 'Jacques Francois', sans-serif;
	font-size: 64px;
	margin-top: 0;
    margin-bottom: 16px;
    color: ${styleUtils.mainColor};
`;

const SecondaryTitle = styled.h2`
	font-family: "Open Sans", sans-serif;
	font-size: 18px;
    line-height: 30px;
    color: ${styleUtils.mainColor};
`;

const About = () => {
	return (
		<MainAbout>
			<MainTitle>Tostée Lucas</MainTitle>
			<SecondaryTitle>Welcome banana's fan !! You will find on this website a lot of monkey's, gorilla.. After all they are your ancestors. You can scroll down to learn more about us.</SecondaryTitle>
		</MainAbout>
	);
};

export default About;
