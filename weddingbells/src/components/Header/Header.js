import React, { Component } from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import {Link} from "react-router-dom"
const Navbar = styled.div`
	// border
	// border: 1px red solid;

	// sizing & placement
	position: fixed;
	top: 0px;
	width: 100%;
	height: 80px;

	// background
	background-color: #c4c4c4;

	// display
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;

	// text
	font-size: 23px;
`;

const Logo = styled.div`
	// size & placement
	margin-left: 75px;
`;

const Links = styled.div`
	// size & placement
	margin-right: 75px;
	width: 30%;

	// display
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
`;

class Header extends Component {
	render() {
		return (
			<Navbar className="header_wrapper">
				<Logo className="header_logo">Wedding Bells</Logo>
				<Links className="header_links">
					<HashLink to="#services" className="HashLink">
						Services
					</HashLink>
					<HashLink to="#faq" className="HashLink">
						FAQ
					</HashLink>
					<HashLink to="#about-us" className="HashLink">
						About Us
					</HashLink>
					<Link href="#" className="link" onClick={this.props.toggleAuthModal}>
						Login/Signup
					</Link>
				</Links>
			</Navbar>
		);
	}
}

export default Header;
