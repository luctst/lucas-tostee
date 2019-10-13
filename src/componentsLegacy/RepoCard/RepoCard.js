import React from "react";
import CardWrapper from "./RepoCard.style";
import Chips from "../../container/Chips/Chips";

/**
 * Display a card of content.
 * @param {Object} data An object with data.
 */
const RepoCard = ({data}) => {
	return (
		<CardWrapper href={data.html_url} alt={`Link to ${data.html_url}`} target="_blank">
			<div>
				<h3>{data.name}</h3>
			</div>
			<div>
				<p>{data.description}</p>
			</div>
			<div className="repo--card--tags">
				<Chips icon="fas fa-code" content={data.language}/>
				<Chips icon="fas fa-star" content={data.stargazers_count}/>
				<Chips icon="fas fa-code-branch" content={data.forks}/>
			</div>
		</CardWrapper>
	);
};

export default RepoCard;
