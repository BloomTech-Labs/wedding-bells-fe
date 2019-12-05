import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "reactstrap";

import deleteMe from "../../assets/delete.svg";
import editMe from "../../assets/pencil.svg";

import OmniModal from "../Modal/index";

import { Headers, VendorData } from "../Vendor List/mappedOver";

export default function VendorComponent() {
	const weddingData = JSON.parse(localStorage.getItem("wedding"));

	//Use React hooks to set state
	const [vendorInfo, setVendorInfo] = useState([{ vendorInfo: {} }]);
	const [wedding, updateWedding] = useState(weddingData.id);

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
		<div className="masterVendorComponent">
			<div className="vendorList">
				<div className="tableGroup">
					<OmniModal
						className="addVendor"
						buttonLabel="Add Vendor"
						modalTitle="Add Vendor"
					/>

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
				</div>
			</div>
		</div>
	);
}
