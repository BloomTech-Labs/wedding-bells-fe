import React, { Component } from "react";

import "./couplepageview.scss";

import MasterGuestComponent from "../../components/MasterGuestComponent/MasterGuestComponent";

import VendorComponent from "../../components/MasterVendorComponent/MasterVendorComponent";

class CouplePageView extends Component {
	render() {
		return (
			<div className="couplePageView">
				<MasterGuestComponent />
				<VendorComponent />
			</div>
		);
	}
}

export default CouplePageView;
