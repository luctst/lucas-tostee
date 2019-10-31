import styled from "styled-components";
import styleHelper from "../../styles/helper";

const SCprojects = styled.details`
	margin-bottom: .5em;
	summary {
		color: ${styleHelper.mainColor};
		font-family: 'Jacques Francois', sans-serif;
		font-size: 17.5px;
	}

	ul {
		margin: 0;
		list-style-type: none;
		padding: 0 15px;

		li {
			font-family: "Open Sans",sans-serif;
			font-size: 13.5px;
			margin: 15px 0;

			a {
				color: ${styleHelper.mainColor};
				opacity: ${styleHelper.mainOpacity};

				:hover {
					text-decoration-color: ${styleHelper.headerLinksColor};
				}
			}
		}
	}

	p {
		font-family: 'Jacques Francois', sans-serif;
		color: ${styleHelper.mainColor};
		font-size: 11.6px;
	}
`;

export default SCprojects;
