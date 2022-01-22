import { Avatar } from "@mui/material";
import React from "react";
import "./HeaderOption.css";

function HeaderOption({ avatar, Icon, title }) {
	// icon in CAPS coz it's a Component
	return (
		<div className="headerOption">
			{Icon && <Icon className="headerOption-icon" />}
			{avatar && <Avatar src={avatar} className="headerOption-icon" />}
			<h3 className="headerOption-title">{title}</h3>
		</div>
	);
}

export default HeaderOption;
