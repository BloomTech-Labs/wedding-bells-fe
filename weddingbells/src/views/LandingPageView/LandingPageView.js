import React, { Component } from "react";
import { Button } from "reactstrap";
import "./LandingPageView.scss";

import { connect } from "react-redux";

import { login, toggleAuthModal } from "../../actions";

import FAQ from "../../components/FAQ/FAQ.js";
import Testimonials from "../../components/Testimonials/Testimonials.js";
import Services from "../../components/Services/Services.js";
import About from "../../components/About/About";
import AuthModal from "../../components/AuthModal/AuthModal";

class LandingPageView extends Component {
	render() {
		return (
			<div className="landingpage_wrapper">
				<div className="top">
					<div className="calltoaction">
						<Button onClick={() => this.props.toggleAuthModal()}>
							SHOTGUN WEDDING
						</Button>
					</div>
				</div>
				<Services />

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

const mapStateToProps = state => ({
	authModalVisible: state.landingPageReducer.authModalVisible,
});

export default connect(mapStateToProps, { login, toggleAuthModal })(
	LandingPageView
);
