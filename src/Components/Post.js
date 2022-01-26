import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import InputOption from "./InputOption";
import { SendOutlined, ShareOutlined } from "@material-ui/icons";
import { ChatOutlined } from "@mui/icons-material";
import avatar from "../Resources/avatar.jpg";
function Post({ name, description, message, photoURL }) {
	return (
		<div className="post">
			<div className="post-header">
				<Avatar src={avatar} className="post-avatar" />
				<div className="post-info">
					<h4>{name}</h4>
					<p>{description}</p>
				</div>
			</div>

			<div className="post-body">
				<p>{message}</p>
			</div>

			<div className="post-buttons">
				<InputOption Icon={ThumbUpOffAltIcon} text="Like" color="gray" />
				<InputOption Icon={ChatOutlined} text="Comment" color="gray" />
				<InputOption Icon={ShareOutlined} text="Share" color="gray" />
				<InputOption Icon={SendOutlined} text="Send" color="gray" />
			</div>
		</div>
	);
}

export default Post;
