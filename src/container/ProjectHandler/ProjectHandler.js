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
	const refInput = React.useRef(); // used for reset the input value when filter change.
	const [filtresList] = React.useState([ // New state to not pollute the `state` object.
		{ icon: "fab fa-github", content: "Commits récents" },
		{ icon: "fas fa-heart", content: "J'aimes" },
	]);
	const [state, setState] = React.useState({
		dataFetched: false,
		repos: {
			reposList: {},
			reposByName: [],
			reposStarred: {}
		},
		filtres: {
			filterActive: 0,
			activePage: 1,
			searchByName: false
		}
	});
    console.log(state)

	React.useEffect(() => {
		(async function() {
			const newState = {...state};
			const getReposList = await fetchData("https://api.github.com/user/repos?page=1&sort=pushed&per_page=6");

			newState.repos.reposList[1] = [...getReposList];
			newState.dataFetched = true;
			setState(newState);
		})();
	}, []);

	const searchByName = e => {
		(async function() {

		})()
	}

	const changeFilter = index => {
		(async function () {
			const newState = {...state};

			if (index === 1) {
				if (!newState.repos.reposStarred[newState.filtres.activePage]) {
					const getReposStarred = await fetchData(`https://api.github.com/user/starred?page=1&per_page=6`);
					refInput.current.value = "";
					newState.repos.reposStarred[1] = [...getReposStarred];
				}
			}

			newState.filtres.filterActive = index;
			setState(newState);
		})()
	}

	return (
		<MainProject disabled={state.filtres.filterActive === 1 && true}>
			<section className="wrapper--search--repos">
				<div className="wrapper--search--repos--find">
					<input
						disabled={state.filtres.filterActive === 1 && "disabled"}
						type="text"
						placeholder={state.filtres.filterActive === 1 ? "Impossible de chercher la-dedans, en discutions avec Github." : "Chercher un repository par nom"}
						onChange={searchByName}
						ref={refInput}
					/>
				</div>
				<div className="wrapper--search--repos--filters">
					<p>Filtrer par:</p>
					{filtresList.map((el, i) => {
						return <Chips
									icon={el.icon}
									content={el.content}
									isFilterActivate={i === state.filtres.filterActive && true}
									key={i}
									handleClick={() => changeFilter(i)}
								/>
					})}
				</div>
			</section>
			<p><a href='https://gitstalk.netlify.com/luctst' target="_blank">Stalk me !!!</a></p>
			<section className="wrapper--list--repos">
				{
					(function () {
						if (state.dataFetched) { // Data are fetched ?
							if (state.filtres.filterActive === 0) { // If filter is Commits
								if (state.filtres.searchByName) { // Does the search bar is active
									return state.repos.reposByName.map((el, i) => <RepoCard key={i} data={el} />);
								} else { // Either return this.
									return state.repos.reposList[state.filtres.activePage].map((el, i) => <RepoCard key={i} data={el}/>);
								}
							} else { // Either filter is "Likes".
								return state.repos.reposStarred[state.filtres.activePage].map((el, i) => <RepoCard key={i} data={el} />)
							}
						} else {
							return <Loader content="Recupération des données"/>
						}
					})()
				}
			</section>
		</MainProject>
	);
};

export default ProjectHandler;
