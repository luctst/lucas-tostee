import React from "react";
import {Link, NavLink} from "react-router-dom";
import profilPicture from "../../assets/img/pp.jpeg";
import SCheaderLeft from "./HeaderLeft.style";

const HeaderLeft = () => {
	const [state, setState] = React.useState([
		{ isLinkRouter: true, content: "Projets", link: "/projects" },
		{ isLinkRouter: true, content: "Experiences", link: "/experiences" },
		{ isLinkRouter: false, content: "Actuellement à New-York" }
	]);

	return (
		<SCheaderLeft>
			<div>
				<Link to="/">
					<img src={profilPicture} alt="Photo de moi"/>
				</Link>
			</div>
			<nav>
				{
					state.map((el, i) => {
						if (el.isLinkRouter) {
							return <p>
								<NavLink
									strict
									exact
									to={el.link}
									key={i}
									activeStyle={{opacity: 1}}>{el.content}
								</NavLink>
							</p>
						} else {
							return <p key={i} className="header--left--nav--noLink">{el.content}</p>
						}
					})
				}
			</nav>
		</SCheaderLeft>
	);
};

export default HeaderLeft;
