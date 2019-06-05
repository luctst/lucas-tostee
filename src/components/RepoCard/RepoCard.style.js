import styled from "styled-components";
import styleUtils from "../../styles/helper";

const CardWrapper = styled.a`
	flex: 0 0 45%;
	margin-bottom: 1em;
    border-radius: 6px;
    background-color: #fff;
    padding: .5em;
	box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
	text-decoration: none;

	h3 {
		font-family: "Jacques Francois", sans-serif;
		font-size: 24px;
		margin: .5em;
		color: ${styleUtils.headerLinksColor};
	}
`;

export default CardWrapper;
