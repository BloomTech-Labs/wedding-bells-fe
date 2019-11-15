import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";
// import { Link } from "react-router-dom";

// import styling
import "../../styles/header.scss";

class Header extends Component {
	render() {
		return (
			<div className="header-wrapper">
				<div className="header-logo">Wedding Bells</div>
				<div className="header-links">
					<HashLink to="#services" className="HashLink">
						Services
					</HashLink>
					<HashLink to="#faq" className="HashLink">
						FAQ
					</HashLink>
					<HashLink to="#about-us" className="HashLink">
						About Us
					</HashLink>
					<HashLink to="#" className="link" onClick={this.props.toggleAuthModal}>
						Login/Signup
					</HashLink>
				</div>
			</div>
		);
	}
}

export default Header;
