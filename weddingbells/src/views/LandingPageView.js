import React, { Component } from "react";
import { Button } from "reactstrap";
import "../styles/landingpageview.scss";

import FAQ from "../components/FAQ/FAQ.js";
import Testimonials from "../components/Testimonials/Testimonials.js";
import WhatWeOffer from "../components/WhatWeOffer/WhatWeOffer.js";
import About from "../components/About/About";
import AuthModal from "../components/AuthModal/AuthModal";

class LandingPageView extends Component {
	render() {
		return (
			<div className="landingpage_wrapper">
				<div className="top">
					<div className="calltoaction">
						<Button onClick={this.props.toggleAuthModal}>
							SHOTGUN WEDDING
						</Button>
					</div>
				</div>
				<WhatWeOffer />
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