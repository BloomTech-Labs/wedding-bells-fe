import React from "react";
import useForm from "react-hook-form";

import { Form, FormGroup, Label, Col } from "reactstrap";

const VendorForm = ({ onSubmit }) => {
	const { register, handleSubmit, errors } = useForm();

	console.log(errors);

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<FormGroup row>
				<Label for="Vendor Name" sm={4}>
					Vendor Name
				</Label>
				<Col sm={5}>
					<input
						type="text"
						placeholder="Vendor Name"
						name="Vendor Name"
						id="Vendor Name"
						ref={register({ required: true, maxLength: 80 })}
					/>
				</Col>
			</FormGroup>
			<FormGroup row>
				<Label for="Select Vendor" sm={4}>
					Select Vendor
				</Label>
				<Col sm={5}>
					<select name="Vendor Category" ref={register({ required: true })}>
						<option value="Photographer">Photographer</option>
						<option value="Venue">Venue</option>
						<option value="Hair and Makeup">Hair and Makeup</option>
						<option value="Attire">Attire</option>
						<option value="Baker">Baker</option>
						<option value="Florist">Florist</option>
						<option value="Music Pros">Music Pros</option>
						<option value="Videographer">Videographer</option>
						<option value="Stationer">Stationer</option>
						<option value="Caterer">Caterer</option>
						<option value="Officiant">Officiant</option>
						<option value="Jeweler">Jeweler</option>
						<option value="Favors Vendor">Favors Vendor</option>
						<option value="Rentals Company">Rentals Company</option>
						<option value="Transportation Company">
							Transportation Company
						</option>
						<option value="Lighting Designer">Lighting Designer</option>
					</select>
				</Col>
			</FormGroup>
			<input type="submit" />
		</Form>
	);
};

export default VendorForm;
