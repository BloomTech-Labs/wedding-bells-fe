import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";
// import { Link } from "react-router-dom";
import { AuthButton } from "../../App";

// import styling
import "../../styles/header.scss";

class Header extends Component {
	render() {
		return (
			<div className="header_wrapper">
				<div className="header_logo">Wedding Bells</div>
				<div className="header_links">
					<HashLink to="#services" className="HashLink">
						Services
					</HashLink>
					<HashLink to="#faq" className="HashLink">
						FAQ
					</HashLink>
					<HashLink to="#about-us" className="HashLink">
						About Us
					</HashLink>
					<AuthButton />
				</div>
			</div>
		);
	}
}

export default Header;
