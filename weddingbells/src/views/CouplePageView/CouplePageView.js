import React, { Component } from "react";

import "./couplepageview.scss";

import AnnouncementComponent from "../../components/Announcements/Announcements";

import MasterRegistryComponent from "../../components/MasterRegistryComponent/MasterRegistry";

import MasterGuestComponent from "../../components/MasterGuestComponent/MasterGuestComponent";

import VendorComponent from "../../components/MasterVendorComponent/MasterVendorComponent";

class CouplePageView extends Component {
	render() {
		return (
			<div className="couplePageView">
				<AnnouncementComponent />
				<MasterRegistryComponent />
				<MasterGuestComponent />
				<VendorComponent />
			</div>
		);
	}
}

export default CouplePageView;
