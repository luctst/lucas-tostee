import styled from "styled-components";
import styleUtils from "../../styles/helper";

const CardWrapper = styled.a`
	flex: 0 0 45%;
	margin-bottom: 1em;
    border-radius: 6px;
    background-color: #fff;
    padding: .8em;
	box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
	transition: 0.4s ease-in-out;
	text-decoration: none;

	h3 {
		font-size: 24px;
		margin: 4px 0;
		font-weight: 500;
		color: ${styleUtils.mainColor};
	}

	p {
		font-size: 16px;
		line-height: 24px;
		opacity: ${styleUtils.mainOpacity};
		color: ${styleUtils.mainColor};
	}

	.repo--card--tags {
		display: flex;
	}

	&:hover {
    	transform: scale(1.03);
	}
`;

export default CardWrapper;
