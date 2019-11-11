import React, { Component } from "react";

// import styling
import "../../styles/footer.scss";

class Footer extends Component {
	render() {
		return (
			<div className="footer-wrapper">
				<div className="footer-logo">
					<h3>Wedding Bells </h3>
				</div>
				<div className="footer-links">
					<a href="#services" className="link">
						Services
					</a>
					<a href="#FAQ" className="link">
						FAQ
					</a>
					<a href="#about-us" className="link">
						About Us
					</a>
					<a href="#login-signup" className="link" onClick={this.props.toggleAuthModal}>
						Login/Signup
					</a>
				</div>
			</div>
		);
	}
}

export default Footer;
