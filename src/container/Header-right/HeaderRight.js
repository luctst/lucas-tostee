import React from "react";
import HeaderRightStyle from "./HeaderRight.style";
import languageSVG from "../../assets/img/language.svg";

const HeaderRight = React.memo(() => {
	return (
		<HeaderRightStyle>
			<nav>
				<div className="header--right--languages">
					<a>
						<img src={languageSVG} alt='logo traduction' />
						Français
					</a>
				</div>
				<div className="header--right--theme">
					<div></div>
					<span></span>
					<input type="checkbox" />
				</div>
			</nav>
		</HeaderRightStyle>
	);
});

export default HeaderRight;
