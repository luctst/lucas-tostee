import React from "react";
import {Link, NavLink} from "react-router-dom";
import profilPicture from "../../assets/img/pp.jpeg";
import NavigationStyle from "./Navigation.style";

const Header = () => {
	const [headerData] = React.useState({
		headerLinks: [
			{content: "Projets", link: "/projects"},
			{content: "Experiences", link: "/experiences"},
			{content: "Contact", link: "/contact"},
			{location: "New-York"}
		]
	});

	return (
		<NavigationStyle.Head>
			<div>
				<Link to="/">
					<img src={profilPicture} alt="Photo de moi"/>
				</Link>
			</div>
			<NavigationStyle.Nav>
				{
					headerData.headerLinks.map((el, i) => {
						return el.link ?
							<p>
								<NavLink
									to={el.link}
									key={i}
									activeStyle={{opacity: 1}}>{el.content}
								</NavLink>
							</p>
						: 	<NavigationStyle.NotLink key={i}>Location: {el.location}</NavigationStyle.NotLink>
					})
				}
			</NavigationStyle.Nav>
		</NavigationStyle.Head>
	);
};

export default Header;
