import React, { useState } from "react";

import axios from "axios";

import "./mappedOver.scss";

import { Button } from "reactstrap";

export const Headers = props => {
	return (
		<thead>
			<tr>
				<th>
					<h5>Name</h5>
				</th>
				<th>
					<h5>Email</h5>
				</th>
				<th>
					<h5>Going?</h5>
				</th>
				<th>
					<h5>Responded to Invitation?</h5>
				</th>
				<th>
					<h5>Plus One?</h5>
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

export const GuestData = ({
	name,
	email,
	is_going,
	has_responded,
	plus_one,
	id,
	onUpdate,
	onDelete,
}) => {
	const weddingData = JSON.parse(localStorage.getItem("wedding"));
	const [
		wedding, 
		// updateWedding
	] = useState(weddingData.id);
	const envVarRoute = process.env.REACT_APP_BACKEND_BASE_URL;
	return (
		<React.Fragment>
			<tr>
				<td>{String(name).replace(/\b\w/g, l => l.toUpperCase())}</td>
				<td>{String(email).replace(/\b\w/g, l => l.toUpperCase())}</td>
				<td>{String(is_going).replace(/\b\w/g, l => l.toUpperCase())}</td>
				<td>{String(has_responded).replace(/\b\w/g, l => l.toUpperCase())}</td>
				<td>{String(plus_one).replace(/\b\w/g, l => l.toUpperCase())}</td>
				{/* <td className="editing">
					<Button color="link" onClick={onUpdate} target="_blank" rel="noopener noreferrer">
						<img
							className="editMe"
							alt="edit"
							src={require("../../assets/pencil.svg")}
						/>
					</Button>
				</td> */}
				<td className="deleting">
					<Button
						color="link"
						onClick={() => {
							axios
								.delete(`${envVarRoute}/api/weddings/${wedding}/guests/${id}`)
								.then(res => {
									console.log("Deleting that guests information");
									console.log("The guests information has been deleted");
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
