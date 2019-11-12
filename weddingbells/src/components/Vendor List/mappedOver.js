import React from "react";

import "../../styles/mappedOver.scss";

import { Link } from "react-router-dom";

export const Headers = props => {
	return (
		<thead>
			<tr>
				<th>
					<h5>#</h5>
				</th>

				<th>
					<h5>Vendor Name</h5>
				</th>
				<th>
					<h5>Category</h5>
				</th>
				<th>
					<h5>Update</h5>
				</th>
				<th>
					<h5>Delete</h5>
				</th>
			</tr>
		</thead>
	);
};

export const VendorData = ({
	vendorName,
	category,
	id,
	onUpdate,
	onDelete,
}) => {
	return (
		<React.Fragment>
			<tr>
				<th>{id}</th>
				<td>{vendorName}</td>
				<td>{category}</td>
				<td className="editing">
					<Link onClick={onUpdate} target="_blank" rel="noopener noreferrer">
						<img
							alt="edit"
							className="editMe"
							src={require("../../assets/pencil.svg")}
						/>
					</Link>
				</td>
				<td className="deleting">
					<Link onClick={onDelete} target="_blank" rel="noopener noreferrer">
						<img
							alt="delete"
							className="deleteMe"
							src={require("../../assets/delete.svg")}
						/>
					</Link>
				</td>
			</tr>
		</React.Fragment>
	);
};
