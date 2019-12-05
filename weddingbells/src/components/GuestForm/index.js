import React, { useState } from "react";
import axios from "axios";
import useForm from "react-hook-form";

import { Form, FormGroup, Label, Col } from "reactstrap";

const GuestForm = () => {
	const { register, handleSubmit, errors } = useForm();

	const envVarRoute = process.env.REACT_APP_BACKEND_BASE_URL;
	const weddingData = JSON.parse(localStorage.getItem("wedding"));
	const [wedding, updateWedding] = useState(weddingData.id);
	//When a user adds a guest information via the form with the modal, the following function will be what will do the action
	const onSubmit = data => {
		axios
			.post(`${envVarRoute}/api/weddings/${wedding}/guests/`, data)
			.then(res => {
				console.log("Adding that guests information");
				console.log("The guests information has been added");
			})
			.catch(error => {
				console.error("Server Error", error);
			});
	};

	//When a user deletes a guests information via the trash icon, the following function will be what will do the action
	function onDelete(evt) {
		axios
			.delete(`${envVarRoute}/api/weddings/${wedding}/guests/:id`)
			.then(res => {
				console.log("Deleting that guests information");
				console.log("The guests information has been deleted");
			})
			.catch(error => {
				console.error("Server Error", error);
			});
	}

	console.log(errors);

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<FormGroup row>
				<Label for="Guest Name" sm={6}>
					Guest Name
				</Label>
				<Col sm={5}>
					<input
						type="text"
						placeholder="Guest Name"
						name="Guest Name"
						ref={register({ required: true, maxLength: 80 })}
					/>
				</Col>
			</FormGroup>
			<FormGroup row>
				<Label for="Guest Email" sm={6}>
					Guest Email
				</Label>
				<Col sm={5}>
					<input
						type="email"
						placeholder="Guest Email"
						name="Guest Email"
						ref={register({ required: true, maxLength: 100 })}
					/>
				</Col>
			</FormGroup>
			<FormGroup row>
				<Label for="Are they going?" sm={6}>
					Are they going?
				</Label>
				<Col sm={5}>
					<select name="Attending?" ref={register({ required: true })}>
						<option value="Yes">Yes</option>
						<option value="No">No</option>
					</select>
				</Col>
			</FormGroup>
			<FormGroup row>
				<Label for="Have they responded?" sm={6}>
					Have they responded?
				</Label>
				<Col sm={5}>
					<select
						name="Have they responded to you?"
						ref={register({ required: true })}
					>
						<option value="Yes">Yes</option>
						<option value="No">No</option>
					</select>
				</Col>
			</FormGroup>
			<FormGroup row>
				<Label for="Are they bringing a plus one?" sm={6}>
					Are they bringing a plus one?
				</Label>
				<Col sm={5}>
					<select
						name="Are they bringing a plus one?"
						ref={register({ required: true })}
					>
						<option value="Yes">Yes</option>
						<option value="No">No</option>
					</select>
				</Col>
			</FormGroup>
			<input type="submit" />
		</Form>
	);
};

export default GuestForm;
