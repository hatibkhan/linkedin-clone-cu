import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import back from "../Resources/background.jpg";

function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar-top">
				<img src={back} alt="" />
				<Avatar className="sidebar-avatar" />
				<h2>Paras Asanani</h2>
				<h4>Professional Dipshit</h4>
			</div>

			<div className="sidebar-stats">
				<div className="sidebar-stat">
					<p>Who Viewed Yo Ass</p>
					<p className="sidebarStatNumber">6969</p>
				</div>
				<div className="sidebar-stat">
					<p>Views on Posts</p>
					<p className="sidebarStatNumber">6969</p>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
