import React, { Component } from "react";
import "./styles/App.css";

import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { LandingPageView } from "./views";

import { toggleAuthModal } from "./actions";

class App extends Component {
	render() {
		console.log(this);
		return (
			<div className="App">
				<Header authModalVisible={this.props.authModalVisible} toggleAuthModal={this.props.toggleAuthModal} />
				<Switch>
					{/* <Route exact path="/" component={LandingPageView} /> */}
					<Route
						exact
						path="/"
						render={() => (
							<LandingPageView authModalVisible={this.props.authModalVisible} toggleAuthModal={this.props.toggleAuthModal} />
						)}
					/>
					{/* <Route protected exact path="/SearchBar" component={SearchBar} /> */}
				</Switch>
				<Footer authModalVisible={this.props.authModalVisible} toggleAuthModal={this.props.toggleAuthModal} />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	authModalVisible: state.landingPageReducer.authModalVisible,
});

export default connect(
	mapStateToProps,
	{ toggleAuthModal }
)(App);
