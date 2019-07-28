import React from "react";
import HeaderRightStyle from "./HeaderRight.style";
import { connect } from "react-redux";

const HeaderRight = React.memo(({ headerRight }) => {
	return (
		<HeaderRightStyle>
			<nav>
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
