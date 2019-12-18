import React, { Component } from "react";

import "./couplepageview.scss";

import MasterRegistryComponent from "../../components/MasterRegistryComponent/MasterRegistry";

import MasterGuestComponent from "../../components/MasterGuestComponent/MasterGuestComponent";

import VendorComponent from "../../components/MasterVendorComponent/MasterVendorComponent";

class CouplePageView extends Component {
	render() {
		return (
			<div className="couplePageView">
				<MasterGuestComponent />
				<VendorComponent />
				<MasterRegistryComponent />
			</div>
		);
	}
}

export default CouplePageView;
