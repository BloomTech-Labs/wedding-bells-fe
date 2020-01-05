import React from "react";

import OFFER_DATA from "./data";

import ServicesItem from "./ServicesItem.js";

import "./Services.scss";

class Services extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			services: OFFER_DATA,
		};
	}
	render() {
		const { services } = this.state;
		return (
			<div className="services-wrapper">
				{services.map(({ id, ...otherServicesProps }) => (
					<ServicesItem key={id} {...otherServicesProps} />
				))}
			</div>
		);
	}
}

export default Services;
