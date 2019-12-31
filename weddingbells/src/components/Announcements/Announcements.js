import React, { Component } from "react";

import AnnouncementsModal from "./AnnouncementsModal";

import { Button } from "reactstrap";

class Announcements extends Component {
	constructor(props) {
		super(props);

		this.state = {
			announcements: {},
			isOpen: false,
		};
	}

	toggleModal = e => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	render() {
		return (
			<div className="announcements-wrapper">
				<Button color="primary" onClick={this.toggleModal}>
					Make An Announcement
				</Button>
				<div className="announcements-list"></div>
				<AnnouncementsModal
					isOpen={this.state.isOpen}
					toggle={this.toggleModal}
				/>
			</div>
		);
	}
}

export default Announcements;
