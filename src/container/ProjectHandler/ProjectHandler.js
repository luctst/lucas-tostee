import React from "react";
import fetchData from "../../utils/fetchData";
import MainProject from "./ProjectHandler.style";
import Loader from "../../components/Loader/Loader";
import RepoCard from "../../components/RepoCard/RepoCard";
import Chips from "../Chips/Chips";

/**
 * Handle all the logic for the `/projects` page.
 */
const ProjectHandler = () => {
	const [state, setState] = React.useState({
		urlApi: "https://api.github.com",
		repoList: [],
		repoStarredList: [],
		dataFetched: false,
		repoToFind: "",
		filterList: [
			{content: "Commit", icon: "fab fa-github"},
			{content: "Stars", icon: "fas fa-star"},
			{content: "J'aimes", icon: "fas fa-heart"}
		],
		filterActive: 0
	});

	React.useEffect(() => {
		(async function() {
			const newState = {...state};
			const getReposList = await fetchData(`${state.urlApi}/users/luctst/repos?per_page=100`);
			const getReposStarred = await fetchData(`${state.urlApi}/users/luctst/starred?per_page=100`);

			newState.repoList = [...getReposList];
			newState.repoStarredList = [...getReposStarred];
			newState.dataFetched = true;

			setState(newState);
		})();
	}, []);

	const handleChange = e => {
		const newState = {...state};

		newState.repoToFind = e.target.value;
		setState(newState);
	};

	const changeFilter = (index) => {
		const newState = {...state};
		newState.filterActive = index;

		setState(newState);
	}

	return (
		<MainProject>
			<section className="wrapper--search--repos">
				<div className="wrapper--search--repos--find">
					<input type="text" placeholder="Chercher un repository par titre" onChange={handleChange}/>
				</div>
				<div className="wrapper--search--repos--filters">
					<p>Filtrer par:</p>
					{state.filterList.map((el, i) => {
						return <Chips
									icon={el.icon}
									content={el.content}
									key={i}
									isFilterActivate={i === state.filterActive ? true : null}
									handleClick={() => changeFilter(i)}
								/>
					})}
				</div>
			</section>
			<section className="wrapper--list--repos">
				{
					(() => {
						if (state.dataFetched) {
							if (state.filterActive !== 2 && state.repoToFind === "") {
								// 1. Default, display all repos created without any search name filter.
								return state.repoList.map(el => <RepoCard key={el.id} data={el} />);

							} else if (state.repoToFind !== "") {
								// 2. Display a specific repo in terms of `state.filterActive`
								if (state.filterActive === 0) return state.repoList.map(el => el.name.startsWith(state.repoToFind) ? <RepoCard key={el.id} data={el} /> : null);

								if (state.filterActive === 2) return state.repoStarredList.map(el => el.name.startsWith(state.repoToFind) ? <RepoCard key={el.id} data={el} /> : null);

							} else if (state.filterActive === 2) {
								// 3. Display all the repos that i starred or contributed.
								return state.repoStarredList.map(el => <RepoCard key={el.id} data={el} />);
							}
						} else {
							return <Loader content="Recupération des données.."/>;
						}
					})()
				}
			</section>
		</MainProject>
	);
};

export default ProjectHandler;
