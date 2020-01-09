import React, { useState } from "react";

import axios from "axios";

import companylist from "../RegistryList/data";
import "./mappedOver.scss";

import {
	Card,
	CardImg,
	// CardText,
	CardBody,
	// CardTitle,
	// CardSubtitle,
	Button,
} from "reactstrap";

const btnSize = {
	width: "30px",
};

export const RegistryData = ({
	company_name,
	url,
	id,
	editMe,
	deleteMe,
	company_image_dropdown,
	reginfo,
}) => {
	const weddingData = JSON.parse(localStorage.getItem("wedding"));
	const [
		wedding,
		// updateWedding
	] = useState(weddingData.id);
	const envVarRoute = process.env.REACT_APP_BACKEND_BASE_URL;

	return (
		<React.Fragment>
			<div className="registry-card">
				<Card>
					<a href={reginfo.url} target="_blank" rel="noopener noreferrer">
						<CardImg
							top
							width="100%"
							src={require("../../assets/registry-img/" +
								companylist.filter(
									item => item.company_name === reginfo.company_name
								)[0].company_image_dropdown)}
							alt="Card image cap"
						/>
					</a>
					<CardBody>
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
							color="link"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								style={btnSize}
								alt="delete"
								className="deleteMe"
								src={require("../../assets/delete.svg")}
							/>
						</Button>
					</CardBody>
				</Card>
			</div>
		</React.Fragment>
	);
};
