import styled from "styled-components";
import styleUtils from "../../styles/helper";

const SCMainAbout = styled.header`
	height: fit-content;
	margin: 2em 0;
	h1 {
		font-family: 'Jacques Francois', sans-serif;
		font-size: 75px;
		margin-top: 0;
		margin-bottom: 0;
		color: ${styleUtils.mainColor};
		margin-bottom: .3em;
	}

	h2 {
		font-family: "Open Sans", sans-serif;
		font-size: 18px;
		color: ${styleUtils.mainColor};
		opacity: ${styleUtils.mainOpacity};
		margin: 0 0 .7em 0;

		a {
			color: ${styleUtils.mainColor};
		}

		a:first-child:hover {
			color: #00acee;
		}

		a:last-child:hover {
			color: #AD5C51;
		}
	}

	@media (max-width: 767px) {
		h1 {
			font-size: 52px;
		}
		h2 {
			width: 100vw;
		}
	}

	@media (min-width: 1000px) {
		h2 {
			width: 55vw;
		}
	}
`;

export default SCMainAbout;
