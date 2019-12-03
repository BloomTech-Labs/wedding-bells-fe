import React from "react";

import "../../styles/mappedOver.scss";

import { Button } from "reactstrap";

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
					<Button color="link" onClick={onUpdate} target="_blank" rel="noopener noreferrer">
						<img
							alt="edit"
							className="editMe"
							src={require("../../assets/pencil.svg")}
						/>
					</Button>
				</td>
				<td className="deleting">
					<Button color="link" onClick={onDelete} target="_blank" rel="noopener noreferrer">
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
