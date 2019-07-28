import React from "react";

/**
 * Format and return an React element.
 * @param {Object} data An object with data of the last event.
 */
const formatEvent = data => {
	const repo = data.repo.name.split("/");
	const hours = Math.abs(new Date() - new Date(data.created_at)) / 36e5;
	const Element = props => {
		return <p className="header--left--nav--activityLink">
			{hours >= 0.60 ? `${Math.round(hours)}h ago` : `${Math.round(hours * 100) / 100 * 100}mn ago`} {props.content}
			<a href={`https://www.github.com/${data.repo.name}`} target="_blank" rel="noopener noreferrer">{repo[1]}</a>
		</p>
	}

	switch (data.type) {
		case "WatchEvent":
			return <Element content="had liked " />;
		case "PushEvent":
			return <Element content="had commit on " />;
		case "IssuesEvent":
			return <Element content={`${data.payload.action} an issue on `} />;
		case "PullRequestEvent":
			return <Element content={`${data.payload.action} on `} />;
		case "CreateEvent":
			return <Element content="had created " />;
		default:
			break;
	}
}

export default formatEvent;
