import React from "react";
import {Link, NavLink} from "react-router-dom";
import profilPicture from "../../assets/img/pp.jpeg";
import NavigationStyle from "./HeaderLeft.style";
import {connect} from "react-redux";

const HeaderLeft = ({headerLinks}) => {
	return (
		<NavigationStyle.Head>
			<div>
				<Link to="/">
					<img src={profilPicture} alt="Photo de moi"/>
				</Link>
			</div>
			<NavigationStyle.Nav>
				{
					headerLinks.map((el, i) => {
						if (el.isLinkRouter) { // Vérifie si c'est lien pour le router (navigation)
							return <p>
								<NavLink
									strict
									exact
									to={el.link}
									key={i}
									activeStyle={{opacity: 1}}>{el.content}
								</NavLink>
							</p>
						} else if (!el.isLinkRouter && el.link) { // Sinon vérifie que ce soit un lien hors router
							return <p>
								<a key={i} href={el.link} target="_blank">{el.content}</a>
							</p>
						} else { // Sinon ce n'est pas un lien.
							return <NavigationStyle.NotLink key={i}>{el.content}</NavigationStyle.NotLink>
						}
					})
				}
			</NavigationStyle.Nav>
		</NavigationStyle.Head>
	);
};

const mapStateToProps = state => {
	return {
		headerLinks: state.dataUi.headerLeft
	}
}

export default connect(mapStateToProps, null)(HeaderLeft);
