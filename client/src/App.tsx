import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
	// Increase counter each time this happens
	console.log("Number of times I failed", 2);

	return (
		<div className="App">
			<header className="App-header">
				<b>
					<p>
						Out of the <span className="App-link"> mouth</span>,
						<br /> flows the abundance of the{" "}
						<span className="App-link">heart</span>.
					</p>
				</b>
			</header>
		</div>
	);
}

export default App;
