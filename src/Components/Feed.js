import { useState, useEffect } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import InputOption from "./InputOption";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase";

const Feed = () => {
	const [input, setInput] = useState("");
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		db.collection("posts")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) =>
				setPosts(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					}))
				)
			);
	}, []);

	const sendPost = (e) => {
		e.preventDefault();

		db.collection("posts").add({
			name: "Paras Asanani",
			description: "Professional Dipshit",
			message: input,
			photoUrl: "",
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});

		setInput("");
	};

	return (
		<div className="feed">
			<div className="feed-inputContainer">
				<div className="feed-input">
					<CreateIcon />
					<form>
						<input
							type="text"
							value={input}
							onChange={(e) => setInput(e.target.value)}
						/>
						<button onClick={sendPost} type="submit">
							Send
						</button>
					</form>
				</div>

				<div className="feed-inputOption">
					<InputOption text="Photo" Icon={ImageIcon} color="#70B5F9" />
					<InputOption text="Video" Icon={SubscriptionsIcon} color="#E7A33E" />
					<InputOption text="Event" Icon={EventNoteIcon} color="#C0CBCD" />
					<InputOption
						text="Write article"
						Icon={CalendarViewDayIcon}
						color="#7FC15E"
					/>
				</div>
			</div>

			{/* <FlipMove> */}
			{posts.map(({ id, data: { name, description, message, photoUrl } }) => (
				<Post
					key={id}
					name={name}
					description={description}
					message={message}
					photoUrl={photoUrl}
				/>
			))}
			{/* </FlipMove> */}
		</div>
	);
};

export default Feed;

// import  { useEffect, useState } from "react";
// import "./Feed.css";
// import Create from "@material-ui/icons/Create";
// import InputOption from "./InputOption";
// import {
// 	CalendarViewDay,
// 	EventNote,
// 	Image,
// 	Subscriptions,
// } from "@material-ui/icons";
// import Post from "./Post";
// import { db } from "./firebase";
// import firebase from "firebase";

// function Feed() {
// 	const [input, setInput] = useState("");
// 	const [posts, setPosts] = useState([]);

// 	useEffect(() => {
// 		db.collection("posts")
// 			.orderBy("timestamp", "desc")
// 			.onSnapshot((snapshot) =>
// 				setPosts(
//					snapshot.docs.map((doc) => ({
//  					id: doc.id,
//  					data: doc.data(),
//					}))
// 	 )
// 			);
// 	}, []);

// 	const sendPost = (e) => {
// 		e.preventDefault();

// 		db.collection("posts").add({
// 			name: "Paras Asanani",
// 			description: "Professional Dipshit",
// 			message: input,
// 			photoURL: "",
// 			timestamp: firebase.firestore.FieldValue.serverTimeStamp(),
// 		});

// 		setInput("");
// 		// setPosts([...posts]);
// 	};

// 	return (
// 		<div className="feed">
// 			<div className="feed-inputContainer">
// 				<div className="feed-input">
// 					<Create />
// 					<form>
// 						<input
// 							type="text"
// 							value={input}
// 							onChange={(e) => setInput(e.target.value)}
// 						/>
// 						<button onClick={sendPost} type="submit">
// 							Send
// 						</button>
// 					</form>
// 				</div>
// 				<div className="feed-inputOption">
// 					<InputOption Icon={Image} text="Photo" color="#70B5F9" />
// 					<InputOption Icon={Subscriptions} text="Video" color="#E7A33E" />
// 					<InputOption Icon={EventNote} text="Event" color="#C0CBCD" />
// 					<InputOption
// 						Icon={CalendarViewDay}
// 						text="Write an Article"
// 						color="#7FC15E"
// 					/>
// 				</div>
// 			</div>

// 			{/* posts */}

// 			{posts.map(({ id, data: { name, description, message, photoURL } }) => (
// 				<Post
// 					key={id}
// 					name={name}
// 					description={description}
// 					photoURL={photoURL}
// 					message={message}
// 				/>
// 			))}
// 		</div>
// 	);
// }

// export default Feed;
