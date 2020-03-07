import styled from "styled-components";

const SCcontact = styled.details`
	summary {
		color: ${props => props.themeLight ? props.theme.light.colorContent : props.theme.dark.colorContent};
		font-family: "Jacques Francois", sans-serif;
		font-size: 17.5px;
	}

	p {
		color: ${props => props.themeLight ? props.theme.light.colorContent : props.theme.dark.colorContent};
		font-family: "Open Sans", sans-serif;
		opacity: ${props => props.theme.mainOpacity};
		font-size: 13.5px;

		a {
			color: ${props => props.themeLight ? props.theme.light.colorContent : props.theme.dark.colorContent};
		}

		a:first-child:hover {
			color: #ad5c51;
		}

		a:last-child:hover {
			color: #00acee;
		}
	}
`;

export default SCcontact;
