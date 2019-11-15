import React, { Component } from "react";
import "./styles/App.css";

import { connect } from "react-redux";
import { Link, Route, Switch, withRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { toggleAuthModal } from "./actions";

import netlifyIdentity from "netlify-identity-widget";

import { LandingPageView } from "./views";
import { ProtectedView } from "./views";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute.js";

class App extends Component {
	render() {
		console.log(netlifyAuth);
		return (
			<div className="App">
				<Header />
				<Switch>
					<Route exact path="/" render={() => <LandingPageView />} />
					<PrivateRoute path="/protected" component={ProtectedView} />
				</Switch>
				<Footer />
			</div>
		);
	}
}

// Code that authenticates through netlify
const netlifyAuth = {
	isAuthenticated: false,
	user: null,
	authenticate(callback) {
		this.isAuthenticated = true;
		netlifyIdentity.open();
		netlifyIdentity.on("login", user => {
			console.log(user);
			this.user = user;
			callback(user);
		});
	},
	signout(callback) {
		this.isAuthenticated = false;
		netlifyIdentity.logout();
		netlifyIdentity.on("logout", () => {
			console.log(this.user);
			this.user = null;
			callback();
		});
	},
};

// Going to replace Login/Logout in header/footer
// Going to redirect user to logged-in view
export const AuthButton = withRouter(({ history }) =>
	netlifyAuth.isAuthenticated ? (
		<p>
			Welcome!{" "}
			<Link
				onClick={() => {
					netlifyAuth.signout(() => history.push("/"));
				}}
			>
				Sign out
			</Link>
		</p>
	) : (
		<Link
			onClick={() => {
				netlifyAuth.authenticate(() => {
					this.setState({ redirectToReferrer: true });
				});
			}}
		>
			Login
		</Link>
	)
);

const mapStateToProps = state => ({
	authModalVisible: state.landingPageReducer.authModalVisible,
});

export default connect(
	mapStateToProps,
	{ toggleAuthModal }
)(App);
