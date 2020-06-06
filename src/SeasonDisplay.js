import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
	Summer: {
		text: "Let's hit the beach",
		iconName: "sun",
		color: "yellow",
	},
	Winter: {
		text: "Burr, It is Chilly",
		iconName: "snowflake",
		color: "teal",
	},
};

const getSeason = (lat, month) => {
	if (month > 2 || month < 9) {
		return lat > 0 ? "Summer" : "Winter";
	} else {
		return lat > 0 ? "Winter" : "Summer";
	}
};

const SeasonDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth());
	const { text, iconName, color } = seasonConfig[season];
	return (
		<div className={`season-display ${color}`}>
			<i className={`${color} icon-left massive ${iconName} icon`} />
			<h1>{text}</h1>
			<i className={`${color} icon-right massive ${iconName} icon`} />
		</div>
	);
};

export default SeasonDisplay;
