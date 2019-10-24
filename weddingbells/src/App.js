import React, { Component } from "react";
import "./styles/App.css";

import { Route, Switch } from "react-router-dom";

import { LandingPageView } from "./views";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div className="App">
			<Header />
			
			<Switch>
				<Route exact path="/" component={LandingPageView} />
				{/* <Route protected exact path="/SearchBar" component={SearchBar} /> */}
			</Switch>

			<Footer />
		</div>
	);
}

export default App;
