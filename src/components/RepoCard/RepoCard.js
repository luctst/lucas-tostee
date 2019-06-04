import React from "react";
import CardWrapper from "./RepoCard.style";

const RepoCard = ({data}) => {
	return (
		<CardWrapper href={data.htm_url} alt={`Link to ${data.html_url}`} target="_blank">
			<section>
				<div>
					<h3>{data.name}</h3>
				</div>
			</section>
		</CardWrapper>
	);
};

export default RepoCard;
