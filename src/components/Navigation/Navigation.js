import React from "react";
import {Link, NavLink} from "react-router-dom";
import profilPicture from "../../assets/img/pp.jpeg";
import NavigationStyle from "./Navigation.style";

const Header = () => {
	const [headerLinks, setHeaderLinks] = React.useState([
		{content: "Projets", link: "/projects", id: 0},
		{content: "Experiences", link: "/experiences", id: 1},
		{content: "Contact", link: "/contact", id: 2}
	]);

	return (
		<NavigationStyle.Head>
			<div>
				<Link to="/">
					<img src={profilPicture} alt="Photo de moi"/>
				</Link>
			</div>
			<NavigationStyle.Nav>
				{
					headerLinks.map(el => {
						return <p>
									<NavLink
										to={el.link}
										key={el.id}
										activeStyle={{opacity: 1}}>{el.content}
									</NavLink>
								</p>
					})
				}
			</NavigationStyle.Nav>
		</NavigationStyle.Head>
	);
};

export default Header;
