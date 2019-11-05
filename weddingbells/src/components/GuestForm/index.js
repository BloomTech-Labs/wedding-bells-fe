import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

export default function GuestForm() {
	const [state, setState] = React.useState({
		guestName: "",
		guestEmail: "",
		respondedToInvite: "",
		response: "",
		plusOne: "",
	});
	function handleChange(evt) {
		const value = evt.target.value;
		setState({
			...state,
			[evt.target.name]: value,
		});
	}
	return (
		<FormGroup
			className="guestForm"
			// onSubmit={handleSubmit}
			// onDelete={handleDelete}
		>
			<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
				<Label for="guestName">Name Of Guest</Label>
				<Input
					type="text"
					name="guestName"
					id="guestName"
					placeholder="Guests Name"
					value={state.name}
					onChange={handleChange}
				/>
			</FormGroup>
			<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
				<Label for="guestEmail">Guests Email</Label>
				<Input
					type="email"
					name="guestEmail"
					id="guestEmail"
					placeholder="Guests Email"
					value={state.email}
					onChange={handleChange}
				/>
			</FormGroup>
			<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
				<Label for="going">Are they going?</Label>
				<Input
					type="text"
					name="going"
					id="going"
					placeholder="Are they Going?"
					value={state.going}
					onChange={handleChange}
				/>
			</FormGroup>
			<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
				<Label for="respondedToInvite">Have they responded?</Label>
				<Input
					type="text"
					name="respondedToInvite"
					id="respondedToInvite"
					placeholder="Have They Responded?"
					value={state.response}
					onChange={handleChange}
				/>
			</FormGroup>
			<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
				<Label for="plusOne">Are they bringing a plus one?</Label>
				<Input
					type="text"
					name="plusOne"
					id="plusOne"
					placeholder="Are they bringing anyone?"
					value={state.plusOne}
					onChange={handleChange}
				/>
			</FormGroup>
		</FormGroup>
	);
}
