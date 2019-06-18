import styled from "styled-components";
import styleUtils from "../../styles/helper";

const HeaderRightStyle = styled.header`
	max-height: 10vh;
	margin-top: ${styleUtils.marginTopHeader};

	nav {
		display: flex;
		justify-content: flex-end;

		.header--right--languages {
			margin-right: 2em;

			button {
				display: flex;
				align-items: center;
				color: ${styleUtils.mainColor};
				font-size: 16px;
				font-family: 'Jacques Francois', sans-serif;
				background-color: transparent;
				border: none;

				img {
					width: 20px;
					height: 20px;
					margin-right: 10px;
				}
			}
		}

		.header--right--theme {
			touch-action: pan-x;
			display: inline-block;
			position: relative;
			cursor: pointer;
			background-color: transparent;
			border: 0;
			padding: 0;
			-webkit-touch-callout: none;
			-webkit-user-select: none;
			-moz-user-select: none;
			-ms-user-select: none;
			user-select: none;
			-webkit-tap-highlight-color: rgba(0,0,0,0);
			-webkit-tap-highlight-color: transparent;

			div {
				width: 50px;
				height: 24px;
				padding: 0;
				border-radius: 30px;
				background-color: #0f1114;
				transition: all .2s ease;
			}

			span {
				position: absolute;
				top: 1px;
				left: 1px;
				width: 22px;
				height: 22px;
				border-radius: 50%;
				background-color: #fafafa;
				box-sizing: border-box;
				transition: all .5s cubic-bezier(.23,1,.32,1) 0ms;
				transform: translateX(0);
			}

			input {
				border: 0;
				clip: rect(0 0 0 0);
				height: 1px;
				margin: -1px;
				overflow: hidden;
				padding: 0;
				position: absolute;
				width: 1px;
			}
		}
	}
`;

export default HeaderRightStyle;
