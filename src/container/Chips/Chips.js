import React from "react";
import ChipsWrapper from "./Chips.style";

/**
 * The Chips component is helpful to display Additional information's. It has three differents status check the
 * `<ChipsWrapper/>` style component documentation.
 * @param {String } content The content of your Chips can be a string or a number.
 */
const Chips = props => {
	return (
		<ChipsWrapper contentType={props.content}>
			{props.content === null ? "Markdown" : props.content}
		</ChipsWrapper>
	);
}

export default Chips;
