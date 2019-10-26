import React, { Component } from "react";
import "./index.scss";
import { Table, Button } from "reactstrap";

class VendorsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			//placeholder
		};
	}

	render() {
		return (
			<div className="vendorsList">
				<Button
					className="addVendor"
					color="primary"
					onClick={console.log("GG, you clicked me")}
				>
					Add a Vendor
				</Button>{" "}
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
								<a href="#">
									<img src={require("../../assets/pencil.svg")} />
								</a>
							</td>
							<td className="deleteMe">
								<a href="#">
									<img src={require("../../assets/delete.svg")} />
								</a>
							</td>
						</tr>
						<tr>
							<th>2</th>
							<td>Thorntons Flowers</td>
							<td>Floral</td>
							<td className="editMe">
								<a href="#">
									<img src={require("../../assets/pencil.svg")} />
								</a>
							</td>
							<td className="deleteMe">
								<a href="#">
									<img src={require("../../assets/delete.svg")} />
								</a>
							</td>
						</tr>
						<tr>
							<th>3</th>
							<td>Jeykals and Hydes Locations</td>
							<td>Venues</td>
							<td className="editMe">
								<a href="#">
									<img src={require("../../assets/pencil.svg")} />
								</a>
							</td>
							<td className="deleteMe">
								<a href="#">
									<img src={require("../../assets/delete.svg")} />
								</a>
							</td>
						</tr>
					</tbody>
				</Table>
			</div>
		);
	}
}

export default VendorsList;
