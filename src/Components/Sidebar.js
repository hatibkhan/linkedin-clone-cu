import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import back from "../Resources/background.jpg";
import avatar from "../Resources/avatar.jpg";
function Sidebar() {
	const recent = (oof) => (
		<div className="sidebar-recentItem">
			<span className="sidebar-hash">#</span>
			<p>{oof}</p>
		</div>
	);

	return (
		<div className="sidebar">
			<div className="sidebar-top">
				<img src={back} alt="" />
				<Avatar className="sidebar-avatar" src={avatar} />
				<h2>Paras Asanani</h2>
				<h4>Professional Dipshit</h4>
			</div>

			<div className="sidebar-stats">
				<div className="sidebar-stat">
					<p>Who Viewed You</p>
					<p className="sidebarStatNumber">6969</p>
				</div>
				<div className="sidebar-stat">
					<p>Views on Posts</p>
					<p className="sidebarStatNumber">6969</p>
				</div>
			</div>
			<div className="sidebar-bottom">
				<p>Recent</p>
				{recent("uh")}
				{recent("oh")}
				{recent("stinky")}
				{recent("poopy")}
				{recent("funny")}
			</div>
		</div>
	);
}

export default Sidebar;
