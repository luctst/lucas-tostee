import styled from "styled-components";

const SCprojects = styled.details`
	margin-bottom: 0.5em;
	summary {
		color: ${props =>
			props.themeLight ? props.theme.light.colorContent : props.theme.dark.colorContent};
		font-family: "Jacques Francois", sans-serif;
		font-size: 17.5px;
	}

	ul {
		margin: 0;
		list-style-type: none;
		padding: 0 15px;

		li {
			font-family: "Open Sans", sans-serif;
			font-size: 13.5px;
			margin: 15px 0;

			a {
				color: ${props =>
					props.themeLight
						? props.theme.light.colorContent
						: props.theme.dark.colorContent};
				opacity: ${props => props.theme.mainOpacity};

				:hover {
					text-decoration-color: ${props => props.theme.headerLinksColor};
				}
			}
		}
	}

	p {
		font-family: "Jacques Francois", sans-serif;
		color: ${props =>
			props.themeLight ? props.theme.light.colorContent : props.theme.dark.colorContent};
		font-size: 11.6px;
	}
`;

export default SCprojects;
