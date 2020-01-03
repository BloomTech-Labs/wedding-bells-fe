import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./Footer.scss";

import smallherralogo from "../../assets/smallherralogo.png";
import { HashLink } from "react-router-hash-link";

class Footer extends Component {
	render() {
		return (
			<div className="footer-wrapper">
				<Link to="/" className="footer-logo">
					<img alt="herra logo" src={smallherralogo}></img>
				</Link>
				<p>© HerraTeam 2020</p>
			</div>
		);
	}
}

export default Footer;
