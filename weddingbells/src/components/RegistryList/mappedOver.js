import React, { useState } from "react";

import axios from "axios";

import test from "../RegistryList/data";
// import "./mappedOver.scss";

import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
} from "reactstrap";

export const RegistryData = ({
	company_name,
	url,
	id,
	editMe,
	deleteMe,
	company_image_dropdown,
}) => {
	const weddingData = JSON.parse(localStorage.getItem("wedding"));
	const [wedding, updateWedding] = useState(weddingData.id);
	const envVarRoute = process.env.REACT_APP_BACKEND_BASE_URL;

	return (
		// <Button
		// 	color="link"
		// 	//When a user deletes vendors information via the trash icon, the following function will be what will do the action
		// 	onClick={() => {
		// 		axios
		// 			.delete(`${envVarRoute}/api/weddings/${wedding}/vendors/${id}`)
		// 			.then(res => {
		// 				console.log("Deleting that vendors information");
		// 				console.log("The vendors information has been deleted");
		// 				window.location.reload();
		// 			})
		// 			.catch(error => {
		// 				console.error("Server Error", error);
		// 			});
		// 	}}
		// 	target="_blank"
		// 	rel="noopener noreferrer"
		// >
		// 	<img
		// 		alt="delete"
		// 		className="deleteMe"
		// 		src={require("../../assets/delete.svg")}
		// 	/>
		// </Button>
		<React.Fragment>
			<div>
				<Card>
					<CardImg
						top
						width="100%"
						src={require(test.filter(filterByID))}
						alt="Card image cap"
					/>
					<CardBody>
						<CardTitle>{company_name}</CardTitle>
						<Button
							onClick={() => {
								axios
									.delete(
										`${envVarRoute}/api/weddings/${wedding}/registries/${id}`
									)
									.then(res => {
										console.log("Deleting that registries information");
										console.log("The registries information has been deleted");
										window.location.reload();
									})
									.catch(error => {
										console.error("Server Error", error);
									});
							}}
							target="_blank"
							rel="noopener noreferrer"
						>
							Delete
						</Button>
					</CardBody>
				</Card>
			</div>
		</React.Fragment>
	);
};
