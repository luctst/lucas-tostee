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
	const [state, setState] = React.useState({
		dataFetched: false,
		searchByName: false,
		filterActive: 0,
		reposList: [],
		reposByName: [],
		reposStarred: [],
		filtresList: [
			{ icon: "fab fa-github", content: "Recents commits"},
			{ icon: "fas fa-heart", content: "Last repos liked"},
		]
	});

	React.useEffect(() => {
		(async function() {
			const newState = {...state};
			const getReposList = await fetchData("https://api.github.com/user/repos?sort=pushed&per_page=8");

			newState.reposList = [...getReposList];
			newState.dataFetched = true;
			setState(newState);
		})();
	}, []);

	const searchByName = e => {
		(async function() {
			if (e.target.value === "") {
				const newState = {...state};

				newState.searchByName = false;

				setState(newState);
			} else {
				const newState = {...state};
				const getReposByName = await fetchData(`https://api.github.com/search/repositories?q=${e.target.value}+in:name+user:luctst`);

				newState.reposByName = [...getReposByName.items];
				newState.searchByName = true;

				setState(newState);
			}
		})()
	}

	const changeFilter = index => {
		(async function () {
			if (index !== state.filterActive) { // First, check if index is not = to filterActive.
				const newState = {...state};

				if (index === 1) { // Click on J'aimes, switch view on starred repos list.
					if (newState.reposStarred.length === 0) { // if reposStarred already filled no need to re fetch data.
						const getReposStarred = await fetchData(`https://api.github.com/user/starred?page=1&per_page=8`);

						newState.reposStarred = [...getReposStarred];
					}

					if (refInput.current.value > 0) refInput.current.value = "";
					newState.filterActive = index;

					setState(newState);
				} else { // Else switch on reposList view.
					newState.filterActive = 0;
					setState(newState);
				}
			}
		})()
	}

	return (
		<MainProject disabled={state.filterActive === 1 && true}>
			<section className="wrapper--search--repos">
				<div className="wrapper--search--repos--find">
					<input
						disabled={state.filterActive === 1 && "disabled"}
						type="text"
						placeholder={state.filterActive === 0 ? "Search among all my repositories" : "You can't search here for now..."}
						onChange={searchByName}
						ref={refInput}
					/>
				</div>
				<div className="wrapper--search--repos--filters">
					<p>Filtrer par:</p>
					{state.filtresList.map((el, i) => {
						return <Chips
									icon={el.icon}
									content={el.content}
									isFilterActivate={i === state.filterActive && true}
									key={i}
									handleClick={() => changeFilter(i)}
								/>
					})}
				</div>
			</section>
			<p><a href='https://gitstalk.netlify.com/luctst' target="_blank">See more ?</a></p>
			<section className="wrapper--list--repos">
				{
					(function () {
						if (state.dataFetched) { // Data are fetched ?
							if (state.filterActive === 0) { // If filter is Commits
								if (state.searchByName) { // Does the search bar is active
									return state.reposByName.map((el, i) => <RepoCard key={i} data={el} />);
								} else { // Either return this.
									return state.reposList.map((el, i) => <RepoCard key={i} data={el}/>);
								}
							} else { // Either filter is "Likes".
								return state.reposStarred.map((el, i) => <RepoCard key={i} data={el} />)
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
