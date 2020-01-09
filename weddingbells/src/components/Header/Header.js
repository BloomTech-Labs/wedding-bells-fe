import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";

import { connect } from "react-redux";
import PropTypes from "prop-types";
// import { bindActionCreators } from "redux";
import { logOutUser } from "../../actions";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

// import styling
import "./Header.scss";
// import ActionButton from "antd/lib/modal/ActionButton";
import smallherralogo from "../../assets/smallherralogo.png";
import ActionButton from "antd/lib/modal/ActionButton";

const logoutCredentials = {
	isLoggingIn: true,
	isSigningUp: true,
	error: "",
};

class Header extends Component {
	constructor(props) {
		super(props);
		// this.logout = this.logout.bind(this);

		this.state = logoutCredentials;
	}

	logout = e => {
		e.preventDefault();
		this.props.logOutUser(this.state.logoutCredentials);
		this.props.history.push("/");
	};

	render() {
		const isAuthenticated = localStorage.couple && localStorage.token;
		if (isAuthenticated) {
			return (
				<div className="header-wrapper">
					<Link to="/" className="header-logo">
						<img alt="herra logo" src={smallherralogo}></img>
					</Link>
					<div className="header-links">
						<HashLink to="/couple" className="link">
							Couple
						</HashLink>
						<HashLink
							to={`/weddings/${JSON.parse(localStorage.wedding).slug}`}
							className="link"
						>
							Wedding
						</HashLink>
						<HashLink to="/settings" className="link">
							Settings
						</HashLink>
						<HashLink to="/" className="link" onClick={this.logout}>
							LogOut
						</HashLink>
					</div>
				</div>
			);
		} else {
			return (
				<div className="header-wrapper">
					<Link
						to="/"
						onClick={() => window.scrollTo(0, 0)}
						className="header-logo"
					>
						<img alt="herra logo" src={smallherralogo}></img>
					</Link>
					<div className="header-links">
						<Link
							to="/about"
							onClick={() => window.scrollTo(0, 0)}
							className="link"
						>
							About Us
						</Link>
						<HashLink to="/#services" className="link">
							Services
						</HashLink>
						<HashLink to="/#testimonials" className="link">
							Testimonials
						</HashLink>
						<HashLink
							to="/#"
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
	isAuthenticated: PropTypes.object.isRequired,
	logout: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
	return { isAuthenticated: state.session };
}

// export default connect(null, {logout})(withRouter(Header));
export default connect(mapStateToProps, { logOutUser })(withRouter(Header));
