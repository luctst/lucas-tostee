import React from "react";
import MainProject from "./ProjectHandler.style";
import HeaderRight from "../Header-right/HeaderRight";
import RepoCard from "../../components/RepoCard/RepoCard";
import {connect} from "react-redux";

const ProjectHandler = ({githubUrlApi}) => {
	const [state, setState] = React.useState({
		repoList: []
	});

	React.useEffect(() => {
		fetch(`${githubUrlApi}/users/luctst/repos?per_page=100`)
			.then(data => data.json())
			.then(dataJson => setState({repoList: [...dataJson]}))
			.catch(err => err);
	}, []);

	const handleChange = e => {}

	return (
		<MainProject>
			<HeaderRight/>
			<section className="wrapper--search--repos">
				<input type="text" placeholder="Chercher un repository" onChange={handleChange}/>
			</section>
			<section className="wrapper--list--repos">
				{
					state.repoList.length === 0 ?
						<p>Recupération des données..</p>
					: state.repoList.map(el => {
						return <RepoCard
									key={el.id}
									data={el}
								/>;
					})
				}
			</section>
		</MainProject>
	);
};

const mapStateToProps = state => {
	return {
		githubUrlApi: state.helper.urlApi
	}
}

export default connect(mapStateToProps, null)(ProjectHandler);
