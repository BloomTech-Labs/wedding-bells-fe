import React, { Component } from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
// import { Link } from "react-router-dom";
import { AuthButton } from "../../App";

// import styling
import "../../styles/header.scss";

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
					<AuthButton />
				</Links>
			</Navbar>
		);
	}
}

export default Header;
