// import dependencies
import React, { Component } from "react";
import { connect } from "react-redux";

import AnnouncementsModal from "./AnnouncementsModal";

import { Button } from "reactstrap";

// import actions
import { fetchAnnouncements } from "../../actions";

class Announcements extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false,
		};
	}

	// todo: shouldn't have to make creds everything component mounts/updates

	componentDidMount = () => {
		this.props.fetchAnnouncements();
	};

	toggleModal = e => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	render() {
		return (
			<div className="announcements-wrapper">
				<Button color="primary" onClick={this.toggleModal}>
					Make An Announcement
				</Button>
				<div className="announcements-list">
					{this.props.announcements.map(announcement => (
						<p>{announcement.title}</p>
					))}
				</div>
				<AnnouncementsModal
					isOpen={this.state.isOpen}
					toggle={this.toggleModal}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	announcements: state.announcementReducer.announcements,
});

export default connect(mapStateToProps, { fetchAnnouncements })(Announcements);
