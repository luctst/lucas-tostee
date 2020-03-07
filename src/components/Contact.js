import React from "react";
import SCcontact from "../styles/Contact.style";
import {Context} from "./App";

const Contact = () => {
	const themeLight = React.useContext(Context)

	return (
		<SCcontact themeLight={themeLight}>
			<summary>Contact</summary>
			<p>
				I'm mainly active on <a href="https://www.github.com/luctst">Github</a> and{" "}
				<a href="https://www.twitter.com/@luctstt">Twitter</a> don't hesitate to follow me
				to stay update 😊
			</p>
		</SCcontact>
	);
};

export default Contact;
