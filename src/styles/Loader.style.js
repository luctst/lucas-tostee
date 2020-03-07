import styled, { keyframes } from "styled-components";

const SCloaderAnim = keyframes`
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
`;

const SCloader = styled.span`
	&::after {
		content: " ";
		display: inline-block;
		width: 20px;
		height: 20px;
		margin-left: 1em;
		border-radius: 50%;
		border: 2px solid #007bff;
		border-color: #007bff transparent #007bff transparent;
		animation: ${SCloaderAnim} 1.2s linear infinite;
	}
`;

export default SCloader;
