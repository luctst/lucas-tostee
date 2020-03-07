import styled from "styled-components";

const ChipsWrapper = styled.span`
	border-radius: 2px;
	font-size: 0.8em;
	font-weight: 400;
	padding: 2px 4px;
	margin-left: 10px;
	${props => {
		switch (props.contentType) {
			case "HTML":
				return `background-color: #F16529; color: #EBEBEB;`;
			case "JavaScript":
				return `background-color: #F0DB4F; color: #323330;`;
			case "Vue":
				return `background-color: #4fc08d; color: #fff;`;
			case "PHP":
				return `background-color: #787CB5; color: #fff;`;
			case "CSS":
				return `background-color: #E31B5F; color: #fff;`;
			case "TypeScript":
				return `background-color: #294E80; color: #fff`;
			case "Go":
				return `background-color: #E0EBF5; color: #fff;`;
			case null:
				return `background-color: #333; color: #fff;`;
			default:
				return null;
		}
	}}
`;

export default ChipsWrapper;
