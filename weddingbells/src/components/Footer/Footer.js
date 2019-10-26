import React, { Component } from "react";

import "../../styles/footer.scss";

import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = styled.div`
	border: 1px blue solid;
	width: 100%;
`;
const Cont = styled.div`
	border: 1px red solid;

	width: 80%;
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
`;
const Logo = styled.div`
	border: 1px green solid;

	// background
	background-color: #c4c4c4;
`;
const NavLinks = styled.div`
	border: 1px orange solid;
	width: 30%;
`;

class Footer extends Component {
	render() {
		return (
			<Navbar className="footer">
				<Cont className="cont">
					<Logo className="logo">
						<h3>Wedding Bells </h3>
					</Logo>
					<NavLinks className="footer-links">
						<Link id="services">Services</Link>
						<Link id="faq">FAQ</Link>
						<Link id="about-us">About Us</Link>
						<Link id="log-up">Login/Sign Up</Link>
					</NavLinks>
				</Cont>
				<div>
					Icons made by{" "}
					<a
						href="https://www.flaticon.com/authors/kiranshastry"
						title="Kiranshastry"
					>
						Kiranshastry
					</a>{" "}
					from{" "}
					<a href="https://www.flaticon.com/" title="Flaticon">
						www.flaticon.com
					</a>
				</div>
			</Navbar>
		);
	}
}

export default Footer;
