import React, { Component } from "react";

// import dependencies
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// import actions
import { login, signup } from "../../actions";

// import styling
import smallherralogo from "../../assets/smallherralogo.png";
import "./AuthModal.scss";
import {
	Form,
	FormFeedback,
	Input,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	TabContent,
	TabPane,
	Nav,
	NavItem,
	NavLink,
} from "reactstrap";
import classnames from "classnames";

const initialState = {
	activeTab: "1",
	loginCredentials: {
		email: "",
		password: "",
		isInvalidEmail: false,
	},
	signupCredentials: {
		spouse_one_name: "",
		spouse_two_name: "",
		email: "",
		password: "",
	},
};

class AuthModal extends Component {
	constructor(props) {
		super(props);

		this.state = initialState;
	}

	handlerLogIn = e => {
		e.preventDefault();
		this.props
			.login(this.state.loginCredentials)
			.then(() => this.props.history.push("/couple"));
	};

	handlerSignUp = e => {
		e.preventDefault();
		this.props
			.signup(this.state.signupCredentials)
			.then(() => this.props.history.push("/create-wedding"));
	};

	handlerTabChange = tabID => {
		if (this.state.activeTab !== tabID) {
			this.setState({ activeTab: tabID });
		}
	};

	handlerTextChange = e => {
		if (this.state.activeTab === "1") {
			this.setState({
				loginCredentials: {
					...this.state.loginCredentials,
					[e.target.name]: e.target.value,
				},
			});
		} else if (this.state.activeTab === "2") {
			this.setState({
				signupCredentials: {
					...this.state.signupCredentials,
					[e.target.name]: e.target.value,
				},
			});
		}
	};

	validateEmail = e => {
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
			if (this.state.activeTab === "1") {
				this.setState({
					loginCredentials: {
						...this.state.loginCredentials,
						isInvalidEmail: true,
					},
				});
			} else if (this.state.activeTab === "2") {
				this.setState({
					signupCredentials: {
						...this.state.signupCredentials,
						isInvalidEmail: true,
					},
				});
			}
		} else {
			if (this.state.activeTab === "1") {
				this.setState({
					loginCredentials: {
						...this.state.loginCredentials,
						isInvalidEmail: false,
					},
				});
			} else if (this.state.activeTab === "2") {
				this.setState({
					signupCredentials: {
						...this.state.signupCredentials,
						isInvalidEmail: false,
					},
				});
			}
		}
	};

	// reset state when closing modal needed

	render() {
		return (
			<Modal
				isOpen={this.props.isOpen}
				size="lg"
				toggle={this.props.toggleAuthModal}
				className="authmodal-wrapper"
				onClosed={() => this.setState(initialState)}
			>
				<ModalHeader toggle={this.props.toggleAuthModal}>
					<img src={smallherralogo} alt="herra logo"></img>
				</ModalHeader>
				<div>
					<Nav tabs>
						<NavItem>
							<NavLink
								className={classnames({ active: this.state.activeTab === "1" })}
								onClick={() => {
									this.handlerTabChange("1");
								}}
							>
								Already have an account?
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className={classnames({ active: this.state.activeTab === "2" })}
								onClick={() => {
									this.handlerTabChange("2");
								}}
							>
								Looking to Join?
							</NavLink>
						</NavItem>
					</Nav>
					<TabContent activeTab={this.state.activeTab}>
						<TabPane tabId="1">
							<ModalBody>
								<Form>
									<Input
										placeholder="Email Address"
										name="email"
										type="email"
										value={this.state.loginCredentials.email}
										onChange={this.handlerTextChange}
										onBlur={this.validateEmail}
										invalid={this.state.loginCredentials.isInvalidEmail}
									/>
									<FormFeedback invalid>Invalid e-mail address!</FormFeedback>
									<Input
										placeholder="Password"
										name="password"
										type="password"
										value={this.state.loginCredentials.password}
										onChange={this.handlerTextChange}
									/>
								</Form>
								<ModalFooter>
									<Button onClick={this.handlerLogIn}>Log In</Button>
								</ModalFooter>
								{/* <ModalFooter>
									<Button onClick={this.props.toggleAuthModal}>
										Sign In With Google
									</Button>
									<Button onClick={this.props.toggleAuthModal}>
										Sign In With Facebook
									</Button>
								</ModalFooter> */}
							</ModalBody>
						</TabPane>
						<TabPane tabId="2">
							<ModalBody>
								<Form>
									<Input
										placeholder="Spouse #1 Name"
										autoFocus
										name="spouse_one_name"
										value={this.state.signupCredentials.spouse_one_name}
										onChange={this.handlerTextChange}
									></Input>
									<Input
										placeholder="Spouse #2 Name"
										name="spouse_two_name"
										value={this.state.signupCredentials.spouse_two_name}
										onChange={this.handlerTextChange}
									></Input>
									<Input
										placeholder="Email Address"
										name="email"
										value={this.state.signupCredentials.email}
										onChange={this.handlerTextChange}
										onBlur={this.validateEmail}
										invalid={this.state.signupCredentials.isInvalidEmail}
									></Input>
									<FormFeedback invalid>Invalid e-mail address!</FormFeedback>
									<Input
										placeholder="Password"
										name="password"
										type="password"
										value={this.state.signupCredentials.password}
										onChange={this.handlerTextChange}
									></Input>
									{/* To add a confirm password later
									<Input placeholder="Confirm Password" value={this.state.signupCredentials.spouse_one_name}></Input> */}
								</Form>
								<ModalFooter>
									<Button onClick={this.handlerSignUp}>Sign Up</Button>
								</ModalFooter>
							</ModalBody>
						</TabPane>
					</TabContent>
				</div>
			</Modal>
		);
	}
}

export default connect(null, { login, signup })(withRouter(AuthModal));
