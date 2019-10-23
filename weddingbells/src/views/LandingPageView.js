import React, { Component } from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default class LandingPageView extends Component {
	render() {
		return (
			<div className="landingpage_wrapper">
				<Header />
				This is going to be the landing page!
				<Footer />
			</div>
		);
	}
}
