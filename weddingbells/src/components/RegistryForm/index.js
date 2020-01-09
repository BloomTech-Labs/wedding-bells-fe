import React, { useState } from "react";
import useForm from "react-hook-form";
import axios from "axios";

import { Form, FormGroup, Label, Col, Button } from "reactstrap";

const labelStyle = {
	paddingTop: 0,
};

const RegistryForm = () => {
	const weddingData = JSON.parse(localStorage.getItem("wedding"));
	const [wedding, updateWedding] = useState(weddingData.id);
	const envVarRoute = process.env.REACT_APP_BACKEND_BASE_URL;

	const { register, handleSubmit, errors } = useForm();
	const onSubmit = data => {
		// e.preventDefault();
		console.log(data);

		axios
			.post(`${envVarRoute}/api/weddings/${wedding}/registries/`, data)
			.then(res => {
				console.log(res, "Adding the registry information");
				console.log("The registry information has been added");
				window.location.reload();
			})
			.catch(error => {
				console.error("Server Error", error);
			});
	};

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<FormGroup row>
				<Label for="category" sm={4} style={labelStyle}>
					Registry Site
				</Label>
				<Col sm={5}>
					<select name="company_name" ref={register({ required: true })}>
						<option value="Amazon">Amazon</option>
						<option value="Sears">Sears</option>
						<option value="Walmart">Walmart</option>
						<option value="Target">Target</option>
						<option value="Bed Bath and Beyond">Bed Bath and Beyond</option>
						<option value="Williams-Sonoma">Williams-Sonoma</option>
						<option value="Kohls">Kohls</option>
						<option value="Wayfair">Wayfair</option>
						<option value="Macys">Macys</option>
						<option value="Best Buy">Best Buy</option>
						<option value="Bloomingdales">Bloomingdales</option>
						<option value="Pottery Barn">Pottery Barn</option>
						<option value="The Container Store">The Container Store</option>
						<option value="Ikea">Ikea</option>
					</select>
				</Col>
			</FormGroup>
			<FormGroup row>
				<Label for="category" sm={4} style={labelStyle}>
					Registry Site
				</Label>
				<Col sm={5}>
					<input
						type="url"
						placeholder="Add your registry url"
						name="url"
						ref={register({ required: true })}
					/>
				</Col>
			</FormGroup>
			<Button color="secondary" type="submit">
				Submit
			</Button>
		</Form>
	);
};

export default RegistryForm;
