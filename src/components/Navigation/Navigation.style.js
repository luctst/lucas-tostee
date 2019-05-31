import styled from "styled-components";
import styleUtils from "../../styles/helper";

const Head = styled.header`
	display: flex;
	flex-direction: column;

	div {
		max-width: 20%;
	}

	img {
		border-radius: 50%;
		object-fit: cover;
		width: 100%;
	}
`;

const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	margin: auto 0;

	p {
		font-family: "Open Sans", sans-serif;
		margin: 1vh 0;

			a {
			opacity: .7;
			position: relative;
			text-decoration: none;
			font-weight: 800;
			font-size: 16px;
			color: ${styleUtils.headerLinksColor};
		}

		a::after {
			position: absolute;
			top: 50%;
			content: '';
			display: block;
			width: 0;
			height: 2px;
			background: #d0021b;
			transition: width .3s;
		}

		a:hover::after {
			width: 100%;
		}
	}
`;

export default {
	Head,
	Nav,
};
