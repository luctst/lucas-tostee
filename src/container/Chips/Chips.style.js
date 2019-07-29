import styled from "styled-components";
import styleUtils from "../../styles/helper";

/**
 * This component render the style of the `<Chips/>` component, it has three states. In terms of his state
 * it will have some styles that the other states doesn't need.
 *
 * First, the component is used for render number in that case it will add the style in the `if` block.
 * Second, used like a filter and it activate ? In that case it will add the style in the `else if` block.
 * Third, used for render content il will add the `else` block.
 */
const ChipsWrapper = styled.div`
	border-radius: 16px;
    font-size: 0.8em;
    line-height: 1.25rem;
    font-weight: 400;
    height: 10px;
    display: flex;
    align-items: center;
    padding: 7px 10px;
	${props => {
		if (typeof props.contentType === "number") {
			return `
				color: ${styleUtils.mainColor};
				opacity: .8;
			`;
		} else if (props.isFilterActivate) {
			return `
				color: ${styleUtils.mainColor};
				background-color: #e0e0e0;
				opacity: .8;
			`;
		} else {
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
		}
	}}

	i {
		width: 20px;
	}

	&:hover {
		cursor: pointer;
	}
`;

export default ChipsWrapper;
