import styled from "styled-components";
import styleHelper from "./../../styles/helper";

const SCcontact = styled.details`
	summary {
		color: #192735;
		font-family: 'Jacques Francois',sans-serif;
		font-size: 17.5px;
	}

	p {
		font-family: "Open Sans",sans-serif;
		color: ${styleHelper.mainColor};
		opacity: ${styleHelper.mainOpacity};
		font-size: 13.5px;

		a {
			color: #192735;
		}

		a:first-child:hover {
			color: #AD5C51;
		}

		a:last-child:hover {
			color: #00acee;
		}
	}
`;

export default SCcontact;
