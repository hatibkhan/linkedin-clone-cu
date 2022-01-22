import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../Resources/linkedin.svg";
import img from "../Resources/avatar.jpg";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import {
	BusinessCenter,
	Chat,
	Home,
	Notifications,
	SupervisorAccount,
} from "@mui/icons-material";

function Header() {
	return (
		<div className="header">
			<div className="header-left">
				<img src={logo} alt="Linkedin" />
				<div className="header-search">
					{/* search icon */}
					<SearchIcon />
					<input type="text" />
				</div>
			</div>
			<div className="header-right">
				<HeaderOption Icon={Home} title={"Home"} />
				<HeaderOption Icon={SupervisorAccount} title={"My Network"} />
				<HeaderOption Icon={BusinessCenter} title={"Jobs"} />
				<HeaderOption Icon={Chat} title={"Messaging"} />
				<HeaderOption Icon={Notifications} title={"Notifications"} />
				<HeaderOption avatar={img} title={"Me"} />
			</div>
		</div>
	);
}

export default Header;
