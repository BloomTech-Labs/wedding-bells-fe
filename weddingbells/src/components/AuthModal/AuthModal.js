import React, { Component } from "react";

import {
	Form,
	FormGroup,
	Label,
	Input,
	FormText,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from "reactstrap";

class AuthModal extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Modal
				isOpen={this.props.isOpen}
				toggle={this.props.toggleAuthModal}
				className="authmodal-wrapper"
			>
				<ModalHeader toggle={this.props.toggleAuthModal}>
					Wedding Bells
				</ModalHeader>
				<ModalBody>
					Already have an account?
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
				<ModalBody>
					Looking to join?
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
			</Modal>
		);
	}
}

export default AuthModal;
