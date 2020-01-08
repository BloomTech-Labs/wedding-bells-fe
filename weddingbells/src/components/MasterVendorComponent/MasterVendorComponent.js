import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "reactstrap";

import deleteMe from "../../assets/delete.svg";
import editMe from "../../assets/pencil.svg";

import OmniModal from "../Modal/Modal";

import { Headers, VendorData } from "../VendorList/mappedOver";

const wrapPad = {
	paddingBottom: "4rem",
};

export default function VendorComponent() {
	const weddingData = JSON.parse(localStorage.getItem("wedding"));

	//Use React hooks to set state
	const [vendorInfo, setVendorInfo] = useState([{ vendorInfo: {} }]);
	const [
		wedding,
		// updateWedding
	] = useState(weddingData.id);

	const envVarRoute = process.env.REACT_APP_BACKEND_BASE_URL;
	/* Starting from this line and down, whenever the vendorInfo loads or is updated the component will re-render */

	const fetchVendorInfo = async () => {
		const response = await axios.get(
			`${envVarRoute}/api/weddings/${wedding}/vendors`
		);
		console.log(response.data);
		setVendorInfo(response.data);
	};

	useEffect(() => {
		fetchVendorInfo(vendorInfo);
	}, []);

	/* Ending at this line, whenever the vendorInfo loads or is updated the component will re-render */

	return (
		<div className="masterVendorComponent" style={wrapPad}>
			<div className="vendorList">
				<div className="tableGroup">
					<h3>Vendors</h3>
					<Table responsive hover bordered>
						<Headers />

						<tbody>
							{vendorInfo.map((vendor, idx) => (
								<VendorData
									key={idx}
									editMe={editMe}
									deleteMe={deleteMe}
									{...vendor}
								/>
							))}
						</tbody>
					</Table>
					<OmniModal
						className="addVendor"
						buttonLabel="Add Vendor"
						modalTitle="Add Vendor"
					/>
				</div>
			</div>
		</div>
	);
}
