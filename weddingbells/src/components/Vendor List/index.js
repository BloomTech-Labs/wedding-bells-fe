import React, { Component } from "react";
import "./index.scss";
import { Table } from "reactstrap";

class VendorsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			//placeholder}
		};
	}
	render() {
		return (
			<div className="vendorsList">
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
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">1</th>
							<td>Ottos Bakery</td>
							<td>Cakes</td>
						</tr>
						<tr>
							<th scope="row">2</th>
							<td>Thorntons Flowers</td>
							<td>Floral</td>
						</tr>
						<tr>
							<th scope="row">3</th>
							<td>Jeykals and Hydes Locations</td>
							<td>Venues</td>
						</tr>
					</tbody>
				</Table>
			</div>
		);
	}
}

export default VendorsList;
