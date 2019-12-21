import React, { useState } from "react";
import useForm from "react-hook-form";
import axios from "axios";

import { Form, FormGroup, Label, Col } from "reactstrap";

const AnnouncementForm = () => {
	const weddingData = JSON.parse(localStorage.getItem("wedding"));
	const [wedding, updateWedding] = useState(weddingData.id);
	const envVarRoute = process.env.REACT_APP_BACKEND_BASE_URL;

	const { register, handleSubmit, errors } = useForm();
	const onSubmit = data => {
		// e.preventDefault();
		console.log(data);

		axios
			.post(`${envVarRoute}/api/weddings/${wedding}/announcements`, data)
			.then(res => {
				console.log("Adding that announcements information");
				console.log("The announcements information has been added");
				// window.location.reload();
			})
			.catch(error => {
				console.error("Server Error", error);
			});
	};
	//When a user adds vendor information via the form with the modal, the following function will be what will do the action

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<FormGroup row>
				<Label for="title" sm={6}>
					Announcement Title
				</Label>
				<Col sm={5}>
					<input
						type="text"
						placeholder="Title"
						name="title"
						ref={register({ required: true, maxLength: 80 })}
					/>
				</Col>
			</FormGroup>
			<FormGroup row>
				<Label for="announcement" sm={6}>
					Announcement
				</Label>
				<Col sm={5}>
					<input
						type="text"
						placeholder="Announcement"
						name="announcement"
						ref={register({ required: true, maxLength: 100 })}
					/>
				</Col>
			</FormGroup>
			<input type="submit" value="Add Announcement" />
		</Form>
	);
};

export default AnnouncementForm;
