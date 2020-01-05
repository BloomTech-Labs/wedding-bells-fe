import React, { Component } from "react";

import "./AboutPageView.scss";

import workcomps from "../../assets/work-comps.png";

import About from "../../components/About/About";

class AboutPageView extends Component {
	render() {
		return (
			<div className="about_page_wrapper">
				<section className="herophrase">
					<div className="phrase">
						<h3>Meet Our Team</h3>
						<p>
							Our diverse team spans coast-to-coast, sharing a passion for
							learning and a drive to succeed. We here at Herra believe in
							making the wedding planning process easy and enjoyable. Discover
							more about our team and their robust skill sets below.
						</p>
					</div>
					<img alt="work computers" src={workcomps}></img>
				</section>
				<About />
			</div>
		);
	}
}

export default AboutPageView;
