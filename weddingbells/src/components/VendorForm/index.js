import React, { useState } from "react";
import useForm from "react-hook-form";
import axios from "axios";

import { Form, FormGroup, Label, Col, Button } from "reactstrap";

const labelStyle = {
	paddingTop: 0,
};

const VendorForm = () => {
	const weddingData = JSON.parse(localStorage.getItem("wedding"));
	const [wedding, updateWedding] = useState(weddingData.id);
	const envVarRoute = process.env.REACT_APP_BACKEND_BASE_URL;

	const { register, handleSubmit, errors } = useForm();
	const onSubmit = data => {
		// e.preventDefault();
		console.log(data);

		axios
			.post(`${envVarRoute}/api/weddings/${wedding}/vendors/`, data)
			.then(res => {
				console.log("Adding that vendors information");
				console.log("The vendors information has been added");
				window.location.reload();
			})
			.catch(error => {
				console.error("Server Error", error);
			});
	};
	//When a user adds vendor information via the form with the modal, the following function will be what will do the action

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<FormGroup row>
				<Label for="company_name" sm={4} style={labelStyle}>
					Vendor Name
				</Label>
				<Col sm={5}>
					<input
						type="text"
						placeholder="Company Name"
						name="company_name"
						id="company_name"
						ref={register({ required: true, maxLength: 80 })}
					/>
				</Col>
			</FormGroup>
			<FormGroup row>
				<Label for="category" sm={4} style={labelStyle}>
					Select Vendor
				</Label>
				<Col sm={5}>
					<select name="category" ref={register({ required: true })}>
						<option value="Photographer">Photographer</option>
						<option value="Venue">Venue</option>
						<option value="Hair Stylist">Hair and Makeup</option>
						<option value="Attire">Attire</option>
						<option value="Bakery">Baker</option>
						<option value="Florist">Florist</option>
						<option value="Musicians">Music Pros</option>
						<option value="Stationer">Stationer</option>
						{/* <option value="Caterer">Caterer</option>
						<option value="Officiant">Officiant</option> */}
						<option value="Jeweler">Jeweler</option>
						<option value="Favors">Favors Vendor</option>
						<option value="Rentals">Rentals Company</option>
						<option value="Transportation Service">
							Transportation Company
						</option>
						<option value="Lighting">Lighting Designer</option>
					</select>
				</Col>
			</FormGroup>
			<Button color="secondary" type="submit">
				Submit
			</Button>
		</Form>
	);
};

export default VendorForm;
