import React, { useState } from "react";

import axios from "axios";

import "./mappedOver.scss";

import { Button } from "reactstrap";

export const Headers = props => {
	return (
		<thead>
			<tr>
				<th>
					<h5>Announcement Title</h5>
				</th>
				<th>
					<h5>Announcement</h5>
				</th>
				{/* <th>
					<h5>Update</h5>
				</th> */}
				<th>
					<h5>Delete</h5>
				</th>
			</tr>
		</thead>
	);
};

export const AnnouncementData = ({ title, announcement, id, onUpdate }) => {
	const weddingData = JSON.parse(localStorage.getItem("wedding"));
	const [wedding, updateWedding] = useState(weddingData.id);
	const envVarRoute = process.env.REACT_APP_BACKEND_BASE_URL;
	return (
		<React.Fragment>
			<tr>
				<td>{String(title).replace(/\b\w/g, l => l.toUpperCase())}</td>
				<td>{String(announcement).replace(/\b\w/g, l => l.toUpperCase())}</td>
				{/* <td className="editing">
					<Button
						color="link"
						onClick={onUpdate}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							alt="edit"
							className="editMe"
							src={require("../../assets/pencil.svg")}
						/>
					</Button>
				</td> */}
				<td className="deleting">
					<Button
						color="link"
						//When a user deletes announcements information via the trash icon, the following function will be what will do the action
						onClick={() => {
							axios
								.delete(
									`${envVarRoute}/api/weddings/${wedding}/announcements/${id}`
								)
								.then(res => {
									console.log("Deleting that announcements information");
									console.log("The announcements information has been deleted");
									window.location.reload();
								})
								.catch(error => {
									console.error("Server Error", error);
								});
						}}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							alt="delete"
							className="deleteMe"
							src={require("../../assets/delete.svg")}
						/>
					</Button>
				</td>
			</tr>
		</React.Fragment>
	);
};
