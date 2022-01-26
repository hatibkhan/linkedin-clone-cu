import React from "react";
import Header from "./Components/Header";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Login from "./Components/Login";

function App() {
	const user = useSelector(selectUser);
	console.log(user);
	return (
		<div className="app">
			{/* header */}
			<Header />
			{/* if no user render login page */}
			{!user ? (
				<Login />
			) : (
				<div className="app-body">
					{/* main content */}
					<Sidebar />
					{/* sidebar */}
					<Feed />
					{/* feed */}
					{/* widget */}
				</div>
			)}
		</div>
	);
}

export default App;
