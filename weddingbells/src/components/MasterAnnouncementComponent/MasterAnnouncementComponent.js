// import dependencies
import React, { Component } from "react";
import { connect } from "react-redux";

import AnnouncementsModal from "./AnnouncementsModal";

import { Button, Table } from "reactstrap";

// import actions
import { deleteAnnouncement, fetchAnnouncements } from "../../actions";

import "./MasterAnnouncementComponent.scss";

const btnStyle = {
	display: "flex",
	justifyContent: "flex-end",
	padding: "0 2rem 1rem 0",
};

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

	handlerDeleteAnnouncement = async announcementId => {
		await this.props.deleteAnnouncement(announcementId);
		await this.props.fetchAnnouncements();
	};

	toggleModal = e => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	render() {
		return (
			<div className="master-announcements-wrapper">
				<h3>Announcements</h3>
				<Table className="master-announcements-list" bordered hover>
					<thead>
						<tr>
							<th>
								<h5>Title</h5>
							</th>
							<th>
								<h5>Announcement</h5>
							</th>
							<th>
								<h5>Timestamp</h5>
							</th>
							<th>
								<h5>Delete</h5>
							</th>
						</tr>
					</thead>
					<tbody>
						{this.props.announcements.map(announcement => (
							<tr className="master-announcement">
								<td>{announcement.title}</td>
								<td>{announcement.announcement}</td>
								<td>{announcement.time_stamp.split("T")[0]}</td>
								<td>
									<Button
										color="link"
										onClick={() =>
											this.handlerDeleteAnnouncement(announcement.id)
										}
									>
										<img
											alt="delete"
											className="deleteMe"
											src={require("../../assets/delete.svg")}
										/>
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
				<AnnouncementsModal
					isOpen={this.state.isOpen}
					toggle={this.toggleModal}
				/>
				<div style={btnStyle}>
					<Button color="secondary" onClick={this.toggleModal}>
						Make An Announcement
					</Button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	announcements: state.announcementReducer.announcements,
});

export default connect(mapStateToProps, {
	deleteAnnouncement,
	fetchAnnouncements,
})(Announcements);
