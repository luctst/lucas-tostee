import React from "react";
import fetchData from "../../utils/fetchData";
import formatEvent from "../../utils/formatEvent";
import {Link, NavLink} from "react-router-dom";
import SCheaderLeft from "./HeaderLeft.style";
import profilPicture from "../../assets/img/pp.jpeg";
import Loader from "../../components/Loader/Loader";

const HeaderLeft = () => {
	const [state, setState] = React.useState({
		dataEventFetched: false,
		dataNavLinks: [
			{ isLinkRouter: true, content: "Projects", link: "/projects" },
			{ isLinkRouter: false, content: "Currently in Paris" },
			{ isLinkRouter: false, content: {}} // Will be the data sent by the `formatEvent` fn.
		]
	});

	React.useEffect(() => {
		(async function() {
			const getLastEvent = await fetchData(`https://api.github.com/users/luctst/events?per_page=1`);
			const newState = {...state};
			const lastActivity = formatEvent(getLastEvent[0]);

			newState.dataNavLinks[newState.dataNavLinks.length - 1].content = lastActivity;
			newState.dataEventFetched = true;
			setState(newState);
		})();
	}, []);
	return (
		<SCheaderLeft>
			<div>
				<Link to="/">
					<img src={profilPicture} alt="Moi"/>
				</Link>
			</div>
			<nav>
				{
					state.dataNavLinks.map((el, i) => {
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
						} else if (typeof el.content === "object") {
							return state.dataEventFetched ? el.content : <Loader content="Chargement"/>
						}
						 else {
							return <p key={i} className="header--left--nav--noLink">{el.content}</p>
						}
					})
				}
			</nav>
		</SCheaderLeft>
	);
};

export default HeaderLeft;
