import React, { useEffect, useState } from "react";
import axios from "axios";

import { RegistryData } from "../RegistryList/mappedOver";

import deleteMe from "../../assets/delete.svg";

import OmniModal from "../RegistryModal/registryModal";

import REGISTRY_DATA from "../RegistryList/data";

export default function RegistryComponent() {
	const weddingData = JSON.parse(localStorage.getItem("wedding"));

	//Use React hooks to set state
	const [registryInfo, setRegistryInfo] = useState([{ registryInfo: {} }]);
	const [wedding, updateWedding] = useState(weddingData.id);

	const envVarRoute = process.env.REACT_APP_BACKEND_BASE_URL;
	/* Starting from this line and down, whenever the registryInfo loads or is updated the component will re-render */

	const fetchRegistryInfo = async () => {
		const response = await axios.get(
			`${envVarRoute}/api/weddings/${wedding}/registries`
		);
		console.log(response.data);
		setRegistryInfo(response.data);
	};

	useEffect(() => {
		fetchRegistryInfo(registryInfo);
	}, []);

	/* Ending at this line, whenever the registryInfo loads or is updated the component will re-render */

	function filterByID(item) {
		console.log(item.company_name);
		console.log(company_name);
		// if (item.company_name == { company_name }) {
		// 	return item.company_image_dropdown;
		// }
	}
	return (
		<div className="masterRegistryComponent">
			<div className="registryList">
				<div className="tableGroup">
					<OmniModal
						className="addRegistry"
						buttonLabel="Add Registry"
						modalTitle="Add Registry"
					/>

					{registryInfo.map((registry, idx) => (
						<RegistryData key={idx} deleteMe={deleteMe} {...registry} />
					))}
				</div>
			</div>
		</div>
	);
}
