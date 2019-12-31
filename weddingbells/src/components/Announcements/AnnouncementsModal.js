import React, { Component } from "react";

// import dependencies
import {
	Button,
	Form,
	Input,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from "reactstrap";
import { connect } from "react-redux";

// import actions
import { postAnnouncement } from "../../actions";

class AnnouncementsModal extends Component {
	constructor() {
		super();

		this.state = {
			announcement: "",
		};
	}

	handlerAnnouncement = e => {
		e.preventDefault();
		this.props.postAnnouncement(this.state.announcement);
	};

	handlerTextChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	render() {
		return (
			<Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
				<ModalHeader>Make An Announcement</ModalHeader>
				<ModalBody>
					<Form>
						<Input
							placeholder="Announcement..."
							name="announcement"
							value={this.state.announcement}
							onChange={this.handlerTextChange}
						></Input>
						<Button color="primary" onClick={this.handlerAnnouncement}>
							Submit
						</Button>
					</Form>
				</ModalBody>
			</Modal>
		);
	}
}

export default connect(null, { postAnnouncement })(AnnouncementsModal);
