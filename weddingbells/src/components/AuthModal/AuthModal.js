import React, { Component } from "react";

// import dependencies
import { connect } from "react-redux";

// import actions
import { login, signup } from "../../actions";

// import styling
import "../../styles/authmodal.scss";
import {
	Form,
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

class AuthModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activeTab: "1",
			loginCredentials: {
				email: "",
				password: "",
			},
			signupCredentials: {
				spouse_one_name: "",
				spouse_two_name: "",
				email: "",
				password: "",
			},
		};
	}

	handlerLogIn = e => {
		e.preventDefault();
		this.props
			.signup(this.state.loginCredentials)
			.then(() => this.props.history.push("/helpBobwheredoIgonow"));
	};

	handlerSignUp = e => {
		e.preventDefault();
		this.props
			.signup(this.state.signupCredentials)
			.then(() => this.props.history.push("/helpBobwheredoIgonow"));
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

	// reset state when closing modal needed

	render() {
		return (
			<Modal
				isOpen={this.props.isOpen}
				size="lg"
				toggle={this.props.toggleAuthModal}
				className="authmodal-wrapper"
			>
				<ModalHeader toggle={this.props.toggleAuthModal}>
					Wedding Bells
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
									<Input placeholder="Email Address"></Input>
									<Input placeholder="Password"></Input>
								</Form>
								<ModalFooter>
									<Button onClick={this.handlerLogin}>Log In</Button>
								</ModalFooter>
								<ModalFooter>
									<Button onClick={this.props.toggleAuthModal}>
										Sign In With Google
									</Button>
									<Button onClick={this.props.toggleAuthModal}>
										Sign In With Facebook
									</Button>
								</ModalFooter>
							</ModalBody>
						</TabPane>
						<TabPane tabId="2">
							<ModalBody>
								<Form>
									<Input
										placeholder="Spouse #1 Name"
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
									></Input>
									<Input
										placeholder="Password"
										name="password"
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

export default connect(
	null,
	{ login, signup }
)(AuthModal);
