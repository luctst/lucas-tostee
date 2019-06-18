import React from "react";
import HeaderRightStyle from "./HeaderRight.style";
import languageSVG from "../../assets/img/language.svg";
import {connect} from "react-redux";

const HeaderRight = React.memo(({headerRight}) => {
	return (
		<HeaderRightStyle>
			<nav>
				<div className="header--right--languages">
					<button>
						<img src={languageSVG} alt='logo traduction' />
						{headerRight.languageDefault}
					</button>
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

const mapStateToProps = state => {
	return {
		headerRight: state.dataUi.headerRight
	};
}
export default connect(mapStateToProps, null)(HeaderRight);
