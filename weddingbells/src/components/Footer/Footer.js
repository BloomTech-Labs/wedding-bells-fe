import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./Footer.scss";

import { HashLink } from "react-router-hash-link";

class Footer extends Component {
	render() {
		return (
			<div className="footer-wrapper">
				<Link to="/" className="footer-logo">
					<h3>H3rra</h3>
				</Link>
			</div>
		);
	}
}

export default Footer;
