import React, { Component } from "module";

import OFFER_DATA from "./data";

class WhatWeOffer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			services: OFFER_DATA,
		};
	}
	render() {
		const { services } = this.state;
		return (
			<div className="services-section">
				{services.map(({ id, ...otherServicesProps }) => (
					<ServiceItem key={id} {...otherServicesProps, id} />
				))}
			</div>
		);
	}
}

export default WhatWeOffer;

//Bob refer to shop, collection preview and collection item components for crwn clothing for more help
