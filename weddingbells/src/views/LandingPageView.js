import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Button } from "reactstrap";

import FAQ from "../components/FAQ/FAQ.js";
import Testimonials from "../components/Testimonials/Testimonials.js";
import WhatWeOffer from "../components/WhatWeOffer/index";
import About from "../components/About/About";
import AuthModal from "../components/AuthModal/AuthModal";

import { toggleAuthModal } from "../actions";

const LandingTop = styled.div`
	// border
	border: 2px green dotted;

	// sizing & placement
	height: 100vh;
	width: 100%;

	// background
	background-image: url("https://images.pexels.com/photos/1683989/pexels-photo-1683989.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
	background-repeat: no-repeat;
	background-size: cover;

	// display
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
`;

const CallToAction = styled.div`
	// sizing & placement
	margin: auto auto;
`;

class LandingPageView extends Component {
	// constructor() {
	// 	super();

	// this.state = {
	// 	authModalVisible: false,
	// };
	// }

	toggleAuthModal = () => {
		// this.setState({
		// 	authModalVisible: !this.state.authModalVisible,
		// });
	};

	render() {
		return (
			<div className="landingpage_wrapper">
				<LandingTop>
					<CallToAction className="landingpage_top_calltoaction">
						<Button onClick={this.toggleAuthModal}>SHOTGUN WEDDING</Button>
					</CallToAction>
				</LandingTop>
				<WhatWeOffer />
				<About />
				<FAQ />
				<Testimonials />
				<AuthModal
					isOpen={this.props.authModalVisible}
					toggleAuthModal={this.toggleAuthModal}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	authModalVisible: state.landingPageReducer.authModalVisible,
});

export default connect(
	mapStateToProps,
	{}
)(LandingPageView);
