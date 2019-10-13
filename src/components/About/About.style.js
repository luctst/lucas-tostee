import styled from "styled-components";
import styleUtils from "../../styles/helper";

const SCMainAbout = styled.header`
	height: fit-content;
	margin: 2em 0;
	h1 {
		font-family: 'Jacques Francois', sans-serif;
		font-size: 64px;
		margin-top: 0;
		margin-bottom: 0;
		color: ${styleUtils.mainColor};
	}

	h2 {
		font-family: "Open Sans", sans-serif;
		font-size: 19px;
		color: ${styleUtils.mainColor};
		opacity: ${styleUtils.mainOpacity};
		padding-right: 4em;

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
			font-size: 16.5px;
			line-height: 30px;
			padding: 0;
		}
	}

	@media (min-width: 1000px) {
		h2 {
			padding-right: 15em;
		}
	}
`;

export default SCMainAbout;
