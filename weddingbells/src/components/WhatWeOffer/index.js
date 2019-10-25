import React from "react";

import OFFER_DATA from "../WhatWeOffer/data";

import ServiceItem from "../ServiceItem/index";

class WhatWeOffer extends React.Component {
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
					<ServiceItem key={id} {...otherServicesProps} />
				))}
			</div>
		);
	}
}

export default WhatWeOffer;
