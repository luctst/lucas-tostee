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

					&::after {
						position: absolute;
						top: 50%;
						content: '';
						display: block;
						width: 0;
						height: 2px;
						background: #d0021b;
						transition: width .3s;
					}

					&:hover::after {
						width: 100%;
					}
			}


		}

		span {
			color: ${styleUtils.headerLinksColor};
			font-size: 12px;

			&::after {
				width: 15px;
				height: 15px;
			}
		}

		.header--left--nav--noLink,
		.header--left--nav--activityLink {
			font-size: 12px;
			color: ${styleUtils.headerLinksColor};
		}

		.header--left--nav--activityLink {
			a {
				opacity: 1;
				font-size: 12px;

				&::after {
					left: 0;
					height: 1px;
				}
			}
		}
	}
`;

export default SCheaderLeft;
