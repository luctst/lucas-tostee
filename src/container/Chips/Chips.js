import React from "react";
import ChipsWrapper from "./Chips.style";

/**
 * The Chips component is helpful to display Additional information's. It has three differents status check the
 * `<ChipsWrapper/>` style component documentation.
 * @param {String} icon Any chips component has an icon, enter an icon class with the font awesome library.
 * @param {String | Number} content The content of your Chips can be a string or a number.
 * @param {Boolean} isFilterActivate Determine if the Chips is activate as a filter or not.
 * @param {Function=} handleClick Function called when click on chips.
 */
const Chips = props => {
	return (
		<ChipsWrapper contentType={props.content} isFilterActivate={props.isFilterActivate} onClick={props.handleClick}>
			<i className={props.icon}></i>
			{props.content === null ? "Markdown" : props.content}
		</ChipsWrapper>
	);
}

export default Chips;
