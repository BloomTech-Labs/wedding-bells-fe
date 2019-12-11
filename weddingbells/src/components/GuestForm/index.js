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
		console.log(data);
		axios
			.post(`${envVarRoute}/api/weddings/${wedding}/guests/`, data)
			.then(res => {
				console.log("Adding that guests information");
				console.log("The guests information has been added");
				window.location.reload();
			})
			.catch(error => {
				console.error("Server Error", error);
			});
	};

	console.log(errors);

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<FormGroup row>
				<Label for="name" sm={6}>
					Guest Name
				</Label>
				<Col sm={5}>
					<input
						type="text"
						placeholder="Guest Name"
						name="name"
						ref={register({ required: true, maxLength: 80 })}
					/>
				</Col>
			</FormGroup>
			<FormGroup row>
				<Label for="email" sm={6}>
					Guest Email
				</Label>
				<Col sm={5}>
					<input
						type="email"
						placeholder="Guest Email"
						name="email"
						ref={register({ required: true, maxLength: 100 })}
					/>
				</Col>
			</FormGroup>
			<FormGroup row>
				<Label for="is_going" sm={6}>
					Are they going?
				</Label>
				<Col sm={5}>
					<select name="is_going" ref={register({ required: true })}>
						<option value="true">True</option>
						<option value="false">False</option>
					</select>
				</Col>
			</FormGroup>
			<FormGroup row>
				<Label for="has_responded" sm={6}>
					Have they responded?
				</Label>
				<Col sm={5}>
					<select name="has_responded" ref={register({ required: true })}>
						<option value="true">true</option>
						<option value="false">False</option>
					</select>
				</Col>
			</FormGroup>
			<FormGroup row>
				<Label for="plus_one" sm={6}>
					Are they bringing a plus one?
				</Label>
				<Col sm={5}>
					<select name="plus_one" ref={register({ required: true })}>
						<option value="true">True</option>
						<option value="false">False</option>
					</select>
				</Col>
			</FormGroup>
			<input type="submit" />
		</Form>
	);
};

export default GuestForm;
