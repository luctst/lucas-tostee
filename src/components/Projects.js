import React from "react";
import SCprojects from "../styles/Projects.style";
import talkToApi from "../utils/talkToApi";
import Chips from "./Chips";
import { Context } from "./App";

const Projects = () => {
	const themeLight = React.useContext(Context);
	const [state, setState] = React.useState({
		dataFetched: false,
		data: []
	});

	React.useEffect(() => {
		talkToApi("/user/repos?sort=pushed&per_page=10", "get", {
			headers: {
				Authorization: `token ${process.env.REACT_APP_APIKEY}`,
				"User-Agent": "luctst"
			}
		}).then(response =>
			setState({ dataFetched: !state.dataFetched, data: [...response] })
		);
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<SCprojects themeLight={themeLight}>
			<summary>Projects</summary>
			<ul>
				{state.dataFetched !== false
					? state.data.map(item => (
							<li key={item.id}>
								<a href={item.html_url} target="_blank" rel="noopener noreferrer">
									{item.name}
								</a>
								<Chips content={item.language} />
							</li>
					  ))
					: null}
			</ul>
			<p>
				To check all my activity{" "}
				<a
					href="https://gitstalk.netlify.com/luctst"
					target="_blank"
					rel="noopener noreferrer"
				>
					click here
				</a>
			</p>
		</SCprojects>
	);
};

export default Projects;
