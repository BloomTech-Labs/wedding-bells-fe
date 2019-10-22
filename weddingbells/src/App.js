import React, { Component } from "react";
import "./styles/App.css";

import Header from "./components/Header/Header";
import { LandingPageView } from "./views";

class App extends Component {
	render() {
		return (
			<div className="App">
                <Header />
                <LandingPageView />
			</div>
		);
	}
}

export default App;
