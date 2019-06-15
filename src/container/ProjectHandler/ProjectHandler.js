import React from "react";
import fetchData from "../../utils/fetchData";
import MainProject from "./ProjectHandler.style";
import HeaderRight from "../Header-right/HeaderRight";
import RepoCard from "../../components/RepoCard/RepoCard";
import {connect} from "react-redux";
import Chips from "../Chips/Chips";

const ProjectHandler = ({githubUrlApi}) => {
	const [state, setState] = React.useState({
		repoList: [],
		modeList: true,
		repoToFind: ""
	});

	React.useEffect(() => {
		(async function() {
			const newState = {...state};
			const getReposList = await fetchData(`${githubUrlApi}/users/luctst/repos?per_page=100`);
			newState.repoList = [...getReposList];
			setState(newState);
		})();
	}, []);

	const handleChange = e => {
		const newState = {...state};

		if (e.target.value === "") {
			newState.modeList = true;
			setState(newState);
		} else {
			newState.modeList = false;
			newState.repoToFind = e.target.value;
			setState(newState);
		}
	};


	return (
		<MainProject>
			<HeaderRight/>
			<section className="wrapper--search--repos">
				<div className="wrapper--search--repos--find">
					<input type="text" placeholder="Chercher un repository par titre" onChange={handleChange}/>
				</div>
				<div className="wrapper--search--repos--filters">
					<p>Filtrer par:</p>
					<Chips icon="fab fa-github" content="Commit" isFilter/>
					<Chips icon="fas fa-star" content="Stars" isFilter/>
				</div>
			</section>
			<section className="wrapper--list--repos">
				{
					(() => {
						if (state.repoList.length === 0) {
							return <p>Récupération des données.</p>
						} else if (state.modeList) {
							return state.repoList.map(el => <RepoCard key={el.id} data={el} />)
						} else if (!state.modeList) {
							return state.repoList.map(el => {
								return el.name.startsWith(state.repoToFind) ? <RepoCard key={el.id} data={el}/> : null
							});
						}
					})()
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
