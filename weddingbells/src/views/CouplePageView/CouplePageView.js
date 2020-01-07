import React, { Component } from "react";

import "./couplepageview.scss";

import MasterAnnouncementComponent from "../../components/MasterAnnouncementComponent/MasterAnnouncementComponent";

import MasterRegistryComponent from "../../components/MasterRegistryComponent/MasterRegistry";

import MasterGuestComponent from "../../components/MasterGuestComponent/MasterGuestComponent";

import VendorComponent from "../../components/MasterVendorComponent/MasterVendorComponent";

class CouplePageView extends Component {
	render() {
		return (
			<div className="couplePageView">
				<MasterAnnouncementComponent />
				<MasterRegistryComponent />
				<MasterGuestComponent />
				<VendorComponent />
			</div>
		);
	}
}

export default CouplePageView;
