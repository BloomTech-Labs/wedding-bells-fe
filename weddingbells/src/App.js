import React, { Component } from "react";
import "./styles/App.css";

import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import {
	LandingPageView,
	WeddingCreationView,
	ProtectedView,
	CouplePageView,
} from "./views";

import { toggleAuthModal } from "./actions";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute.js";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header toggleAuthModal={this.props.toggleAuthModal} />
				<Switch>
					<Route exact path="/" render={() => <LandingPageView />} />
					<Route
						exact
						path="/create-wedding"
						render={() => <WeddingCreationView />}
					/>
					<PrivateRoute path="/protected" component={ProtectedView} />
					<PrivateRoute path="/couple" component={CouplePageView} />
				</Switch>
				<Footer toggleAuthModal={this.props.toggleAuthModal} />
			</div>
		);
	}
}

export default connect(null, { toggleAuthModal })(App);
