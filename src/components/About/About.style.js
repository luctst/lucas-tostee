import styled from "styled-components";
import Main from "../../styles/layout/Main";
import styleUtils from "../../styles/helper";

const MainAbout = styled(Main)`
	padding-left: 1em;
	display: flex;
	flex-direction: column;

	section {
		margin: auto 0;

			h1 {
				font-family: 'Jacques Francois', sans-serif;
				font-size: 64px;
				margin-top: 0;
				margin-bottom: 16px;
				color: ${styleUtils.mainColor};
			}

			h2 {
				font-family: "Open Sans", sans-serif;
				font-size: 18px;
				line-height: 30px;
				color: ${styleUtils.mainColor};
			}
	}
`;

export default MainAbout;
