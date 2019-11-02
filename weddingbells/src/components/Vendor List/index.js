import React, { Component } from "react";
import "./index.scss";
import OmniModal from "../Modal/index";
import { Table } from "reactstrap";

class VendorsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			//placeholder
		};
	}

	render() {
		const handleChange = event => {
			this.setState({ value: event.target.value });
		};

		const handleSubmit = event => {
			alert("Your favorite flavor is: " + this.state.value);
			event.preventDefault();
		};
		return (
			<div className="vendorsList">
				<div className="tableGroup">
					<OmniModal
						className="addVendor"
						color="primary"
						buttonLabel="Add Vendor"
						modalTitle="Add Vendor"
						onChange={handleChange}
						onSubmit={handleSubmit}
					/>

					<Table responsive hover bordered>
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
						<tbody>
							<tr>
								<th>1</th>
								<td>Ottos Bakery</td>
								<td>Cakes</td>
								<td className="editMe">
									<a
										href="http://localhost:3000/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img alt="Edit" src={require("../../assets/pencil.svg")} />
									</a>
								</td>
								<td className="deleteMe">
									<a
										href="http://localhost:3000/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											alt="delete"
											src={require("../../assets/delete.svg")}
										/>
									</a>
								</td>
							</tr>
							<tr>
								<th>2</th>
								<td>Thorntons Flowers</td>
								<td>Floral</td>
								<td className="editMe">
									<a
										href="http://localhost:3000/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img alt="Edit" src={require("../../assets/pencil.svg")} />
									</a>
								</td>
								<td className="deleteMe">
									<a
										href="http://localhost:3000/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											alt="Delete"
											src={require("../../assets/delete.svg")}
										/>
									</a>
								</td>
							</tr>
							<tr>
								<th>3</th>
								<td>Jeykals and Hydes Locations</td>
								<td>Venues</td>
								<td className="editMe">
									<a
										href="http://localhost:3000/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img alt="Edit" src={require("../../assets/pencil.svg")} />
									</a>
								</td>
								<td className="deleteMe">
									<a
										href="http://localhost:3000/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											alt="Delete"
											src={require("../../assets/delete.svg")}
										/>
									</a>
								</td>
							</tr>
						</tbody>
					</Table>
				</div>
			</div>
		);
	}
}

export default VendorsList;
