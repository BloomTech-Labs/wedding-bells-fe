import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "reactstrap";

import deleteMe from "../../assets/delete.svg";
import editMe from "../../assets/pencil.svg";

import OmniModal from "../Modal/index";

import { Headers, GuestData } from "../Guest List/mappedOver";

export default function GuestComponent() {
	const [
		guestInfo, 
		// setGuestInfo
	] = useState([{ guestInfo: {} }]);

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

	/* Starting from this line and down, whenever the guestInfo loads or is updated the component will re-render */
	const fetchGuestInfo = async () => {
		// const response = await axios.get("/api/weddings/:weddingId/guests");
		// setGuestInfo(response.data);
	};

	useEffect(() => {
		fetchGuestInfo(guestInfo);
	}, [guestInfo]);
	/* Ending at this line, whenever the guestInfo loads or is updated the component will re-render */

	//When a user adds a guest information via the form with the modal, the following function will be what will do the action
	function handleSubmitGuest(evt) {
		evt.preventDefault();
		const guest = {
			...guestInfo,
		};

		axios
			.post("/api/weddings/:weddingId/guests/:id", { guest })
			.then(res => {
				console.log("Adding that guests information");
				console.log("The guests information has been added");
			})
			.catch(error => {
				console.error("Server Error", error);
			});
	}

	//When a user deletes a guests information via the trash icon, the following function will be what will do the action
	function handleDeleteGuest(evt) {
		evt.preventDefault();

		axios
			.delete("/api/weddings/:weddingId/guests/:id")
			.then(res => {
				console.log("Deleting that guests information");
				console.log("The guests information has been deleted");
			})
			.catch(error => {
				console.error("Server Error", error);
			});
	}
	return (
		<div className="masterGuestComponent">
			<div className="guestList">
				<div className="tableGroup">
					<OmniModal
						className="addGuest"
						buttonLabel="Add Guest "
						modalTitle="Add Guest"
						onSubmit={handleSubmitGuest}
					/>

					<Table responsive hover bordered>
						<Headers />

						<tbody>
							{guestInfo.map((guest, idx) => (
								<GuestData
									key={idx}
									editMe={editMe}
									deleteMe={deleteMe}
									onDelete={handleDeleteGuest}
									{...guest}
								/>
							))}
						</tbody>
					</Table>
				</div>
			</div>
		</div>
	);
}
