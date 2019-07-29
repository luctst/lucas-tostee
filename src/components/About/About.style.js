import styled from "styled-components";
import Main from "../../styles/layout/Main";
import styleUtils from "../../styles/helper";

const SCMainAbout = styled(Main)`
	display: flex;
	align-items: center;

	section {
			h1 {
				font-family: 'Jacques Francois', sans-serif;
				font-size: 64px;
				margin-top: 0;
				margin-bottom: 16px;
				color: ${styleUtils.mainColor};
			}

			h2 {
				font-family: "Open Sans", sans-serif;
				font-size: 18px;
				line-height: 30px;
				color: ${styleUtils.mainColor};
				opacity: ${styleUtils.mainOpacity};

				a {
					color: ${styleUtils.mainColor};
				}

				a:first-child:hover {
					color: #00acee;
				}

				a:last-child:hover {
					color: #AD5C51;
				}
			}
	}
`;

export default SCMainAbout;
