import React, { Component } from "react";

import { Table, Jumbotron } from "reactstrap";

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
				<Jumbotron className="Vendor Table" fluid>
					<Table responsive hover bordered>
						<thead>
							<tr>
								<th><h4>#</h4></th>
								
								<th><h4>Vendor Name</h4></th>
								<th><h4>Category</h4></th>
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
				</Jumbotron>
			</div>
		);
	}
}

export default VendorsList;
