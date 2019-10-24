import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = styled.div`
	border: 1px red solid;

	// sizing & placement
    position: fixed;
    bottom: 0px;
    width: 100%;
	height: 80px;
	
	// background
    background-color: #c4c4c4;
`;
const Logo = styled.div`
	// border: 1px red solid;
`;
const NavLinks = styled.div`
	// border: 1px red solid;
`;

class Footer extends Component {
	render() {
		return (
			<Navbar className="header">
				<Logo className="logo">
					<h3>Wedding Bells </h3>
				</Logo>
				<NavLinks className="footer-links">
					<Link id="services">Services</Link>
					<Link id="faq">FAQ</Link>
					<Link id="about-us">About Us</Link>
					<Link id="log-up">Login/Sign Up</Link>
				</NavLinks>
			</Navbar>
		);
	}
}

export default Footer;
