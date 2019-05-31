import React from "react";
import styled from "styled-components";
import styleUtils from "../../styles/helper";
import {Link, NavLink} from "react-router-dom";
import profilPicture from "../../assets/img/pp.jpeg";

const Head = styled.header`
	grid-column: 0 / 1;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;

const ImgContainer = styled.div`
	width: 20%;
`;

const Img = styled.img`
	border-radius: 50%;
	object-fit: cover;
	width: 100%;
`;

const Nav = styled.nav`
	display: flex;
	flex-direction: column;
`;

const HeaderLinkWrapper = styled.p`
	font-family: "Open Sans", sans-serif;
	margin: 1vh 0;

	a {
		opacity: .7;
		position: relative;
		text-decoration: none;
		font-weight: 800;
		font-size: 16px;
		color: ${styleUtils.headerLinksColor};
	}

	a::after {
		position: absolute;
		top: 50%;
		content: '';
		display: block;
		width: 0;
		height: 2px;
		background: #d0021b;
		transition: width .3s;
	}

	a:hover::after {
		width: 100%;
	}
`;

const Header = () => {
	const [headerLinks, setHeaderLinks] = React.useState([
		{content: "Projets", link: "/projects", id: 0},
		{content: "Experiences", link: "/experiences", id: 1},
		{content: "Contact", link: "/contact", id: 2}
	]);

	return (
		<Head>
			<ImgContainer>
				<Link to="/">
					<Img src={profilPicture}/>
				</Link>
			</ImgContainer>
			<Nav>
				{
					headerLinks.map(el => {
						return <HeaderLinkWrapper>
									<NavLink
										to={el.link}
										key={el.id}
										activeStyle={{opacity: 1}}>{el.content}
									</NavLink>
								</HeaderLinkWrapper>
					})
				}
			</Nav>
		</Head>
	);
};

export default Header;
