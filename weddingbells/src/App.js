import React, { Component } from "react";
import "./styles/App.css";

import { Route, Switch } from "react-router-dom";

import { LandingPageView } from "./views";

function App() {
	return (
		<div className="App">
			This is the best Wedding Planner App ever!
			<Switch>
				<Route exact path="/" component={LandingPageView} />
				{/* <Route protected exact path="/SearchBar" component={SearchBar} /> */}
			</Switch>
		</div>
	);
}

export default App;
