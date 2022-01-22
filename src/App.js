import React from "react";
import Header from "./Components/Header";
import "./App.css";
import Sidebar from "./Components/Sidebar";

function App() {
	return (
		<div className="app">
			{/* header */}
			<Header />

			{/* main content */}
			<div className="app-body">
				{/* sidebar */}
				<Sidebar />
				{/* feed */}
				{/* widget */}
			</div>
		</div>
	);
}

export default App;
