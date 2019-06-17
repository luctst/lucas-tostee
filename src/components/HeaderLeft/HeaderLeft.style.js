import styled from "styled-components";
import styleUtils from "../../styles/helper";

const SCheaderLeft = styled.header`
	display: flex;
	flex-direction: column;
	margin-top: ${styleUtils.marginTopHeader};
	justify-content: space-between;
	grid-row: 1 / 3;
	max-height: inherit;

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

	nav {
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

		.header--left--nav--noLink {
			font-size: 12px;
			color: ${styleUtils.headerLinksColor};
		}
	}
`;

export default SCheaderLeft;
