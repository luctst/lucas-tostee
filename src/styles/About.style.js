import styled from "styled-components";

const SCMainAbout = styled.header`
	height: fit-content;
	margin: 2em 0;
	h1 {
		font-family: "Jacques Francois", sans-serif;
		font-size: 75px;
		margin-top: 0;
		margin-bottom: 0;
		color: ${props => props.theme.mainColor};
		margin-bottom: 0.3em;
	}

	h2 {
		font-family: "Open Sans", sans-serif;
		font-size: 18px;
		color: ${props => props.theme.mainColor};
		opacity: ${props => props.theme.mainOpacity};
		margin: 0 0 0.7em 0;

		a {
			color: ${props => props.theme.mainColor};
		}

		a:first-child:hover {
			color: #00acee;
		}

		a:last-child:hover {
			color: #ad5c51;
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
			width: 55vw;
		}
	}
`;

export default SCMainAbout;
