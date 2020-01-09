import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "reactstrap";

import deleteMe from "../../assets/delete.svg";
import editMe from "../../assets/pencil.svg";

import OmniModal from "../Modal/Modal";

import { Headers, GuestData } from "../GuestList/mappedOver";

export default function GuestComponent() {
	const weddingData = JSON.parse(localStorage.getItem("wedding"));

	const [guestInfo, setGuestInfo] = useState([{ guestInfo: {} }]);
	const [
		wedding,
		// updateWedding
	] = useState(weddingData.id);

	//Since we are using React hooks, we are no longer going to use componentDidMount and on top of this, we are not going to need the usual axios.GET request as located below

	/*
		//When the componentDidMount and the ComponentDidUpdate lifcycles occur, the GET method below will occur
	function getGuests() {
		axios
			.get("/Insert/Web/Address")
			.then(response => {
				console.log("Starting to get guests");
				this.setState(() => ({ guestsInfo: response.data }));
				console.log("Guests have been retrieved");
			})
			.catch(error => {
				console.error("Server Error", error);
			});
	}
	*/
	const envVarRoute = process.env.REACT_APP_BACKEND_BASE_URL;

	/* Starting from this line and down, whenever the guestInfo loads or is updated the component will re-render */

	const fetchGuestInfo = async () => {
		const response = await axios.get(
			`${envVarRoute}/api/weddings/${wedding}/guests`
		);
		console.log(response.data, "guest info");
		setGuestInfo(response.data);
	};

	useEffect(() => {
		fetchGuestInfo(guestInfo);
	}, []);

	/* Ending at this line, whenever the guestInfo loads or is updated the component will re-render */

	return (
		<div className="masterGuestComponent">
			<div className="guestList">
				<div className="tableGroup">
					<h3>Guest List</h3>
					<Table responsive hover bordered>
						<Headers />

						<tbody>
							{guestInfo.map((guest, idx) => (
								<GuestData
									key={idx}
									editMe={editMe}
									deleteMe={deleteMe}
									{...guest}
								/>
							))}
						</tbody>
					</Table>
					<OmniModal
						className="addGuest"
						buttonLabel="Add Guest "
						modalTitle="Add Guest"
					/>
				</div>
			</div>
		</div>
	);
}
