import React from "react";
import CardWrapper from "./RepoCard.style";

const RepoCard = ({data}) => {
	return (
		<CardWrapper href={data.html_url} alt={`Link to ${data.html_url}`} target="_blank">
			<div>
				<h3>{data.name}</h3>
			</div>
			<div>
				<p>{data.description}</p>
			</div>
			<div>
				<span>{data.language}</span>
				<span>{data.stargazers_count}</span>
				<span>{data.forks}</span>
			</div>
		</CardWrapper>
	);
};

export default RepoCard;
