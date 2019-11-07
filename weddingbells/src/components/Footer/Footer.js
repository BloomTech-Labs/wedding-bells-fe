import React, { Component } from "react";

// import styling
import "../../styles/footer.scss";

class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<div className="cont">
					<div className="logo">
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
						<a href="#" className="link" onClick={this.props.toggleAuthModal}>
							Login/Signup
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;
