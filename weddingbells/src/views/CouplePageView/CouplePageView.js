import React, { Component } from "react";

import "./couplepageview.scss";

import MasterRegistryComponent from "../../components/MasterRegistryComponent/MasterRegistry";

import MasterGuestComponent from "../../components/MasterGuestComponent/MasterGuestComponent";

import VendorComponent from "../../components/MasterVendorComponent/MasterVendorComponent";

import AnnouncementComponent from "../../components/MasterAnnouncementComponent/MasterAnnouncementComponent";

class CouplePageView extends Component {
	render() {
		return (
			<div className="couplePageView">
				<MasterRegistryComponent />
				<MasterGuestComponent />
				<VendorComponent />
				<AnnouncementComponent />
			</div>
		);
	}
}

export default CouplePageView;
