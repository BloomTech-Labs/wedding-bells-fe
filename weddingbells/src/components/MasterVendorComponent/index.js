import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "reactstrap";

import deleteMe from "../../assets/delete.svg";
import editMe from "../../assets/pencil.svg";

import OmniModal from "../Modal/index";

import { Headers, VendorData } from "../Vendor List/mappedOver";

export default function VendorComponent() {
	//Use React hooks to set state
	const [
		vendorInfo, 
		// setVendorInfo
	] = useState([{ vendorInfo: {} }]);

	/* Starting from this line and down, whenever the vendorInfo loads or is updated the component will re-render */
	const fetchVendorInfo = async () => {
		// const response = await axios.get("/api/weddings/:weddingId/vendors");
		// setVendorInfo(response.data);
	};

	useEffect(() => {
		fetchVendorInfo(vendorInfo);
	}, [vendorInfo]);
	/* Ending at this line, whenever the vendorInfo loads or is updated the component will re-render */

	//When a user adds vendor information via the form with the modal, the following function will be what will do the action
	const handleSubmitVendor = e => {
		// e.preventDefault();
		const vendor = {
			...vendorInfo,
		};

		axios
			.post("/api/weddings/:weddingId/vendors/:id", { vendor })
			.then(res => {
				console.log("Adding that vendors information");
				console.log("The vendors information has been added");
			})
			.catch(error => {
				console.error("Server Error", error);
			});
	};
	//When a user deletes vendors information via the trash icon, the following function will be what will do the action
	function handleDeleteVendor(evt) {
		evt.preventDefault();

		axios
			.delete("/api/weddings/:weddingId/vendors/:id")
			.then(res => {
				console.log("Deleting that vendors information");
				console.log("The vendors information has been deleted");
			})
			.catch(error => {
				console.error("Server Error", error);
			});
	}
	return (
		<div className="masterVendorComponent">
			<div className="vendorList">
				<div className="tableGroup">
					<OmniModal
						className="addVendor"
						buttonLabel="Add Vendor"
						modalTitle="Add Vendor"
						onSubmit={handleSubmitVendor}
					/>

					<Table responsive hover bordered>
						<Headers />

						<tbody>
							{vendorInfo.map((vendor, idx) => (
								<VendorData
									key={idx}
									editMe={editMe}
									deleteMe={deleteMe}
									onDelete={handleDeleteVendor}
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
