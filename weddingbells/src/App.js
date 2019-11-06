import React, { Component } from "react";
import "./styles/App.css";

import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { LandingPageView } from "./views";

import { toggleAuthModal } from "./actions";

import netlifyIdentity from "netlify-identity-widget";

class App extends Component {
	render() {
		console.log(netlifyAuth);
		return (
			<div className="App">
				<Header
					authModalVisible={this.props.authModalVisible}
					toggleAuthModal={this.props.toggleAuthModal}
				/>
				<Switch>
					<Route
						exact
						path="/"
						render={() => (
							<LandingPageView
								authModalVisible={this.props.authModalVisible}
								toggleAuthModal={this.props.toggleAuthModal}
							/>
						)}
					/>
					{/* <Route protected exact path="/SearchBar" component={SearchBar} /> */}
				</Switch>
				<Footer
					authModalVisible={this.props.authModalVisible}
					toggleAuthModal={this.props.toggleAuthModal}
				/>
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
			this.user = user;
			callback(user);
		});
	},
	signout(callback) {
		this.isAuthenticated = false;
		netlifyIdentity.logout();
		netlifyIdentity.on("logout", () => {
			this.user = null;
			callback();
		});
	},
};

// Going to replace Login/Logout in header/footer
// Going to redirect user to logged-in view
// const AuthButton = withRouter(({ history }) =>
// 	netlifyAuth.isAuthenticated ? (
// 		<p>
// 			Welcome!{" "}
// 			<button
// 				onClick={() => {
// 					netlifyAuth.signout(() => history.push("/"));
// 				}}
// 			>
// 				Sign out
// 			</button>
// 		</p>
// 	) : (
// 		<p>You are not logged in.</p>
// 	)
// );

const mapStateToProps = state => ({
	authModalVisible: state.landingPageReducer.authModalVisible,
});

export default connect(
	mapStateToProps,
	{ toggleAuthModal }
)(App);
