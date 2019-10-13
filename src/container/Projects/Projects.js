import React from "react";
import SCprojects from "./Projects.style";
import fetchData from "../../utils/fetchData";
import Chips from "./../Chips/Chips";

const Projects = () => {
	const [state, setState] = React.useState({
		dataFetched: false,
		data: []
	});

	React.useEffect(() => {
		fetchData("https://api.github.com/user/repos?sort=pushed&per_page=10")
		.then(reponse => setState({dataFetched: !state.dataFetched, data: [...reponse]}));
	}, []);

	return (
		<SCprojects>
			<summary>Projects</summary>
			<ul>
				{
					state.dataFetched !== false ?
						state.data.map(item => <li key={item.id}>
							<a href={item.html_url} target="_blank" rel="noopener noreferrer">{item.name}</a>
								<Chips content={item.language} />
							</li>)
					: null
				}
			</ul>
			<p>To check all my activity <a href='https://gitstalk.netlify.com/luctst' target="_blank" rel="noopener noreferrer">click here</a></p>
		</SCprojects>
	);
}

export default Projects;
