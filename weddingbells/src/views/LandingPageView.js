import React, { Component } from "react";
import { Button } from "reactstrap";
import "./landingpageview.scss";

import FAQ from "../components/FAQ/FAQ.js";
import Testimonials from "../components/Testimonials/Testimonials.js";
import Services from "../components/Services/Services.js";
import About from "../components/About/About";
import AuthModal from "../components/AuthModal/AuthModal";

class LandingPageView extends Component {
	render() {
		return (
			<div className="landingpage_wrapper">
				<LandingTop>
					<CallToAction className="landingpage_top_calltoaction">
						<AuthButton />
					</CallToAction>
				</LandingTop>
				<WhatWeOffer />
				<VendorsList />
				<GuestList />
				<FAQ />
				<Testimonials />
				<About />
				<AuthModal
					isOpen={this.props.authModalVisible}
					toggleAuthModal={this.props.toggleAuthModal}
				/>
			</div>
		);
	}
}

export default LandingPageView;
