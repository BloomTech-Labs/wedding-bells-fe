import React, { Component } from "react";
import axios from "axios";

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
		};
	}
	// handleSubmitGuest = evt => {
	// 	evt.preventDefault();
	// 	const guest = {
	// 		...guestInfo,
	// 	};

	// 	axios
	// 		.post("/api/weddings/:weddingId/guests/:id", { guest })
	// 		.then(res => {
	// 			console.log("Adding that guests information");
	// 			console.log("The guests information has been added");
	// 		})
	// 		.catch(error => {
	// 			console.error("Server Error", error);
	// 		});
	// };
	handlerChangeTab = tabID => {
		if (this.state.activeTab !== tabID) {
			this.setState({ activeTab: tabID });
		}
	};

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
									this.handlerChangeTab("1");
								}}
							>
								Already have an account?
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className={classnames({ active: this.state.activeTab === "2" })}
								onClick={() => {
									this.handlerChangeTab("2");
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
									<Button onClick={this.props.toggleAuthModal}>Sign In</Button>
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
									<Input placeholder="Spouse #1 Name"></Input>
									<Input placeholder="Spouse #2 Name"></Input>
									<Input placeholder="Email Address"></Input>
									<Input placeholder="Password"></Input>
									<Input placeholder="Confirm Password"></Input>
								</Form>
								<ModalFooter>
									<Button onClick={this.props.toggleAuthModal}>Sign Up</Button>
								</ModalFooter>
							</ModalBody>
						</TabPane>
					</TabContent>
				</div>
			</Modal>
		);
	}
}

export default AuthModal;
