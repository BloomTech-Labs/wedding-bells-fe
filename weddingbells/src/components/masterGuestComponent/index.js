import React from "react";
import axios from "axios";
import { FormGroup, Label, Input } from "reactstrap";

import Guest from "../Guest List/mappedOver";

import deleteMe from "../../assets/delete.svg";
import editMe from "../../assets/pencil.svg";

import OmniModal from "../Modal/index";

export default function GuestForm() {
	const [state, setState] = React.useState({
		//We just need the overall state from the database here, which will be updated by the componentDidMount/ComponentDidUpdate life cycles
		guestsInfo: {},
	});

	//Function for the change handler goes here
	function handleChange(evt) {
		const value = evt.target.value;
		setState({
			...state,
			[evt.target.name]: value,
		});
	}

	//When the componentDidMount and the ComponentDidUpdate lifcycles occur, the GET method below will occur
	function getGuests() {
		axios
			.get("/Insert/Web/Address")
			.then(response => {
				console.log("Starting to get guests");
				this.setState(() => ({ guests: response.data }));
				console.log("Guests have been retrieved");
			})
			.catch(error => {
				console.error("Server Error", error);
			});
	}

	//When a user adds a guest information via the form with the modal, the following function will be what will do the action
	function handleSubmitGuest(evt) {
		evt.preventDefault();
		const guest = {
			...state,
		};

		axios
			.post("/Insert/Web/Address", { guest })
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
			.delete(`/Insert/Web/Address/${state.id}`)
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
					/>

					<Table responsive hover bordered>
						<thead>
							<tr>
								<th>
									<h5>#</h5>
								</th>

								<th>
									<h5>Name</h5>
								</th>
								<th>
									<h5>Email</h5>
								</th>
								<th>
									<h5>Going?</h5>
								</th>
								<th>
									<h5>Responded to Invitation?</h5>
								</th>
								<th>
									<h5>Plus One?</h5>
								</th>
								<th>
									<h5>Update</h5>
								</th>
								<th>
									<h5>Delete</h5>
								</th>
							</tr>
						</thead>
						<tbody>
							{guestsInfo.map((guest, idx) => {
								<Guest
									key={idx}
									onUpdate={handleSubmitGuest}
									onSubmit={handleSubmitGuest}
									onDelete={handleDeleteGuest}
									editMe={editMe}
									deleteMe={deleteMe}
									{...guest}
								/>;
							})}
						</tbody>
					</Table>
				</div>
			</div>
		</div>
	);
}
