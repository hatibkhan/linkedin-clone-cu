import React from "react";
import "./InputOption.css";
function InputOption({ Icon, text, color }) {
	return (
		<div className="InputOption">
			<Icon style={{ color: color }} />
			<h4>{text}</h4>
		</div>
	);
}

export default InputOption;
