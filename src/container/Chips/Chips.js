import React from "react";
import ChipsWrapper from "./Chips.style";

/**
 * The Chips component is helpful to display Additional information's. It has three differents status check the
 * `<ChipsWrapper/>` style component documentation.
 * @param {String} icon Any chips component has an icon, enter an icon class with the font awesome.
 * @param {String | Number} content The content of your Chips can be a string or a number.
 * @param {Boolean} isFilter Determine if the Chips is a filter or not.
 */
const Chips = ({icon, content, isFilter}) => {
	return (
		content === null ? null
		:<ChipsWrapper contentType={content} needStyleForFilter={isFilter}>
			<i className={icon}></i>
			{content}
		</ChipsWrapper>
	);
}

export default Chips;
