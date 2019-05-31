import React from "react";
import HeaderRightStyle from "./HeaderRight.style";
import languageSVG from "../../assets/img/language.svg";

const HeaderRight = () => {
	return (
		<HeaderRightStyle>
			<nav>
				<div>
					<a>
						<img src={languageSVG} alt='logo traduction'/>
						Français
					</a>
				</div>
				<div className="header--right--theme--switcher">
					<div></div>
					<span></span>
					<input type="checkbox" />
				</div>
			</nav>
		</HeaderRightStyle>
	);
}

export default HeaderRight;
