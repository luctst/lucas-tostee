import React from "react";

/**
 * Format and return an React element.
 * @param {Object} data An object with data of the last event.
 */
const formatEvent = data => {
	const repo = data.repo.name.split("/");
	const hours = Math.floor(Math.abs(new Date() - new Date(data.created_at)) / 36e5);
	const Element = props => {
		return <p className="header--left--nav--activityLink">
				Il y a {hours > 1 ? `${hours}h` : `${hours}mn`} {props.content}
				<a href={`https://www.github.com/${data.repo.name}`} target="_blank" rel="noopener noreferrer">{repo[1]}</a>
			</p>
	}

	switch (data.type) {
		case "WatchEvent":
			return <Element content="a aimé "/>;
		case "PushEvent":
			return <Element content="a commit sur "/>;
		case "IssuesEvent":
			return <Element content={`a ${data.payload.action} une issue sur `}/>;
		case "PullRequestEvent":
			return <Element content={`a ${data.payload.action} sur `}/>;
		case "CreateEvent":
			return <Element content="a crée le repo "/>;
		default:
			break;
	}
}

export default formatEvent;
