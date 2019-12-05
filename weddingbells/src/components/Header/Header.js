import React, { Component} from "react";
import { HashLink } from "react-router-hash-link";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

// import styling
import "../../styles/header.scss";

class Header extends Component {
	render() {
		if (this.props.logged_in) {
			return (
				<div className="header-wrapper">
					<div className="header-logo">Wedding Bells</div>
					<div className="header-links">
						<HashLink to="#services" className="link">
							Services
					</HashLink>
						<HashLink to="#faq" className="link">
							FAQ
					</HashLink>
						<HashLink to="#about-us" className="link">
							About Us
					</HashLink>
						<HashLink to="#" className="link" onClick={this.props.logOutUser}>
							LogOut
					</HashLink>
					</div>
				</div>
			);
		} else {
			return (
			<div className="header-wrapper">
				<div className="header-logo">Wedding Bells</div>
				<div className="header-links">
					<HashLink to="#services" className="link">
						Services
					</HashLink>
					<HashLink to="#faq" className="link">
						FAQ
					</HashLink>
					<HashLink to="#about-us" className="link">
						About Us
					</HashLink>
					<HashLink
						to="#"
						className="link"
						onClick={this.props.toggleAuthModal}
					>
						Login/SignUp
					</HashLink>
				</div>
				</div>
			);

		}
	}
}

// Header.PropTypes = {
// 	actions: PropTypes.opject.isRequired
// }

function mapStateToProps(state, ownProps) {
	return { logged_in: state.session };
}


export default connect(mapStateToProps)(Header);
