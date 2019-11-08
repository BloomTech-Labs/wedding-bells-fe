import React, { Component } from "react";

import GuestComponent from "../components/masterGuestComponent/index";
import VendorComponent from "../components/masterVendorComponent/index";

class CouplePageView extends Component {
	render() {
		return (
			<div className="couplePageView">
				<GuestComponent />
				<VendorComponent />
			</div>
		);
	}
}

export default CouplePageView;
