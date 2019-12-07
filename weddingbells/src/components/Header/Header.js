import React, { Component} from "react";
import { HashLink } from "react-router-hash-link";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from 'redux';
import { logout } from "../../actions";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";


// import styling
import "./Header.scss";

class Header extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.props.logout = this.logout.bind;
	// }

	logout = e => {
		e.preventDefault();
		this.props.logout()
		.then(() => this.props.history.push("/"));
	};



	render() {

		const  isAuthenticated = localStorage.couple;
		if (isAuthenticated) {
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
						<HashLink to="#" className="link" onClick={this.logout.bind(this)}>
							LogOut
					</HashLink>
					</div>
				</div>
			);
		} else {
			return (
			<div className="header-wrapper">
				<Link to="/" className="header-logo">
					<h3>Wedding Bells</h3>
				</Link>
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

Header.propTypes = {
	// isAuthenticated: PropTypes.object.isRequired,
	logout: PropTypes.func.isRequired
 }

function mapStateToProps(state) {
	return { isAuthenticated: state.session };
}


// export default connect(null, {logout})(withRouter(Header));
export default connect(mapStateToProps, {logout})(Header);
