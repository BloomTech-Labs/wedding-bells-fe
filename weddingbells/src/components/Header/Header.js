import React, { Component } from "react";

// import styling
import "../../styles/header.scss";

class Header extends Component {
	render() {
		return (
			<div className="header-wrapper">
				<div className="header-logo">
					<h3>Wedding Bells</h3>
				</div>
				<div className="header-links">
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
		);
	}
}

export default Header;
