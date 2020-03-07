import styled from "styled-components";

const SCcontact = styled.details`
	summary {
		color: #192735;
		font-family: "Jacques Francois", sans-serif;
		font-size: 17.5px;
	}

	p {
		font-family: "Open Sans", sans-serif;
		color: ${props => props.theme.mainColor};
		opacity: ${props => props.theme.mainOpacity};
		font-size: 13.5px;

		a {
			color: #192735;
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
