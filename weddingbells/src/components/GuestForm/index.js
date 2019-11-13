import React from "react";
import useForm from "react-hook-form";

import { Form, FormGroup, Label, Col } from "reactstrap";

const GuestForm = ({ onSubmit }) => {
	const { register, handleSubmit, errors } = useForm();

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
