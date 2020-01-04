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
import { fetchAnnouncements, postAnnouncement } from "../../actions";

class AnnouncementsModal extends Component {
	constructor() {
		super();

		this.state = {
			announcement: {
				title: "",
				announcement: "",
			},
		};
	}

	handlerAnnouncement = async e => {
		e.preventDefault();
		await this.props.postAnnouncement(this.state.announcement);
		await this.props.fetchAnnouncements();
		this.props.toggle();
	};

	handlerTextChange = e => {
		this.setState({
			announcement: {
				...this.state.announcement,
				[e.target.name]: e.target.value,
			},
		});
	};

	render() {
		return (
			<Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
				<ModalHeader>Make An Announcement</ModalHeader>
				<ModalBody>
					<Form>
						<Input
							placeholder="Title"
							name="title"
							value={this.state.announcement.title}
							onChange={this.handlerTextChange}
						/>
						<Input
							placeholder="Announcement"
							name="announcement"
							value={this.state.announcement.announcement}
							onChange={this.handlerTextChange}
						/>
						<Button color="primary" onClick={this.handlerAnnouncement}>
							Submit
						</Button>
					</Form>
				</ModalBody>
			</Modal>
		);
	}
}

export default connect(null, { fetchAnnouncements, postAnnouncement })(
	AnnouncementsModal
);
