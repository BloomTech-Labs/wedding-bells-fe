import React from "react";
import { Link } from "react-router-dom";

export const Headers = props => {
	return (<thead>
		<tr>
			<th>
				<h5>#</h5>
			</th>

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
			<th>
				<h5>Update</h5>
			</th>
			<th>
				<h5>Delete</h5>
			</th>
		</tr>
	</thead>);
};

export const GuestData = ({
	name,
	email,
	going,
	response,
	plusOne,
	id,
	onUpdate,
	onDelete,
}) => {
	return (<React.Fragment>
		<tr>
			<th>{id}</th>
			<td>{name}</td>
			<td>{email}</td>
			<td>{going}</td>
			<td>{response}</td>
			<td>{plusOne}</td>
			<td className="editMe">
				<Link to={onUpdate} target="_blank" rel="noopener noreferrer">
					<img alt="edit" src={require("../../assets/pencil.svg")} />
				</Link>
			</td>
			<td className="deleteMe">
				<Link to={onDelete} target="_blank" rel="noopener noreferrer">
					<img alt="delete" src={require("../../assets/delete.svg")} />
				</Link>
			</td>
		</tr>
	</React.Fragment>);
}
