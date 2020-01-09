import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Alert } from "antd";
import axios from "axios";
import "./WeddingInviteView.scss";

import Container from "../../components/Container/Container";
import WeddingDetailsHero from "../../components/WeddingDetailsHero/WeddingDetailsHero";
import GuestRSVPForm from "../../components/GuestRSVPForm/GuestRSVPForm";

const BACKEND_BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;

const WeddingInviteView = props => {
	const { weddingId, guestId } = props.match.params;
	const [wedding, setWedding] = useState(null);
	const [guest, setGuest] = useState(null);
	const [status, setStatus] = useState(null);

	const handleGuestUpdates = event => {
		const updatedGuest = {
			...guest,
			[event.target.name]: event.target.value === "true",
		};
		setGuest(updatedGuest);
	};

	const handleOnSubmit = async event => {
		event.preventDefault();
		try {
			await axios.put(
				`${BACKEND_BASE_URL}/api/weddings/${wedding.id}/guests/${guest.id}`,
				guest
			);
			setStatus("success");
		} catch (error) {
			setStatus("error");
		}
	};

	useEffect(() => {
		axios
			.get(`${BACKEND_BASE_URL}/api/weddings/${weddingId}`)
			.then(res => res.data)
			.then(setWedding);
		axios
			.get(`${BACKEND_BASE_URL}/api/weddings/${weddingId}/guests/${guestId}`)
			.then(res => res.data)
			.then(setGuest);
	}, []);

	if (!wedding || !guest) return <p>Loading...</p>;
	return (
		<main className="weddinginvite-main">
			<WeddingDetailsHero wedding={wedding} />
			<GuestRSVPForm
				guest={guest}
				handleGuestUpdates={handleGuestUpdates}
				handleOnSubmit={handleOnSubmit}
			/>
			<Container>
				<Alert
					closable
					type={status}
					style={{
						display: status ? "block" : "none",
						backgroundColor: "ececec",
					}}
					message={status === "success" ? "Success!" : "Error!"}
					showIcon
					description={
						status === "success"
							? "You're all set, thank you for RSVPing."
							: "Oh no, an error occurred while trying to update your RSVP."
					}
					onClose={e => setStatus(null)}
				/>
			</Container>
		</main>
	);
};

export default withRouter(WeddingInviteView);
