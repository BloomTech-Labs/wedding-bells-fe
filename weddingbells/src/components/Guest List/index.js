import React, { Component } from "react";
import "../Vendor List/index.scss";
import { Table } from "reactstrap";

import OmniModal from "../Modal/index";
import Axios from "axios";
class GuestList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			guests: [],
		};
	}
	componentDidUpdate() {
		this.getGuests();
	}

	getGuests() {
		Axios.get("/Insert/Web/Address")
			.then(response => {
				console.log("Starting to get guests");
				this.setState(() => ({ guests: response.data }));
				console.log("Guests have been retrieved");
			})
			.catch(error => {
				console.error("Server Error", error);
			});
	}

	postGuests() {}

	updateGuests() {}

	deleteGuests() {}
	render() {
		return (
			<div className="guestList">
				<div className="tableGroup">
					<OmniModal
						className="addGuest"
						buttonLabel="Add Guest "
						modalTitle="Add Guest"
					/>

					<Table responsive hover bordered>
						<thead>
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
						</thead>
						<tbody>
							<tr>
								<th>1</th>
								<td>Robert Pedersen</td>
								<td>contact@robertpedersen.dev</td>
								<td>No</td>
								<td>yes</td>
								<td>true</td>
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
								<th>2</th>
								<td>Poly Goveia</td>
								<td>polyTheG@aol.com</td>
								<td>yes</td>
								<td>no</td>
								<td>false</td>
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
										<img alt="Edit" src={require("../../assets/delete.svg")} />
									</a>
								</td>
							</tr>
							<tr>
								<th>3</th>
								<td>Sammy</td>
								<td>Sammy@ls.dev</td>
								<td>yes</td>
								<td>no</td>
								<td>false</td>
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
										<img alt="Edit" src={require("../../assets/delete.svg")} />
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

export default GuestList;
