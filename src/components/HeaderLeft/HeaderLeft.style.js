import styled from "styled-components";
import styleUtils from "../../styles/helper";

const Head = styled.header`
	display: flex;
	flex-direction: column;
	margin-top: ${styleUtils.marginTopHeader};
	justify-content: space-between;

	div {
		max-width: 2em;
	}

	img {
		padding-top: 2.2px;
		padding-left: 2px;
		border-radius: 50%;
		object-fit: cover;
		width: 100%;
	}
`;

const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	margin-bottom: ${styleUtils.marginTopHeader};

	p {
		font-family: "Jacques Francois", sans-serif;
		margin: 1vh 0;

			a {
			opacity: .6;
			position: relative;
			text-decoration: none;
			font-size: 17px;
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

const NotLink = styled.p`
	font-size: 12px;
    color: ${styleUtils.headerLinksColor};
`;
export default {
	Head,
	Nav,
	NotLink,
};
