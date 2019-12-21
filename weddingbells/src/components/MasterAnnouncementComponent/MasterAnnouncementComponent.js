import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "reactstrap";

import deleteMe from "../../assets/delete.svg";
import editMe from "../../assets/pencil.svg";

import OmniModal from "../Modal/Modal";

import { Headers, AnnouncementData } from "../AnnouncementList/mappedOver";

export default function AnnouncementComponent() {
	const weddingData = JSON.parse(localStorage.getItem("wedding"));

	//Use React hooks to set state
	const [announcementInfo, setAnnouncementInfo] = useState([
		{ announcementInfo: {} },
	]);
	const [wedding, updateWedding] = useState(weddingData.id);

	const envVarRoute = process.env.REACT_APP_BACKEND_BASE_URL;
	/* Starting from this line and down, whenever the announcementInfo loads or is updated the component will re-render */

	const fetchAnnouncementInfo = async () => {
		const response = await axios.get(
			`${envVarRoute}/api/weddings/${wedding}/announcements`
		);
		console.log(response.data);
		setAnnouncementInfo(response.data);
	};

	useEffect(() => {
		fetchAnnouncementInfo(announcementInfo);
	}, []);

	/* Ending at this line, whenever the announcementInfo loads or is updated the component will re-render */

	return (
		<div className="masterAnnouncementComponent">
			<div className="announcementList">
				<div className="tableGroup">
					<OmniModal
						className="addAnnouncement"
						buttonLabel="Add Announcement"
						modalTitle="Add Announcement"
					/>

					<Table responsive hover bordered>
						<Headers />

						<tbody>
							{announcementInfo.map((announcement, idx) => (
								<AnnouncementData
									key={idx}
									editMe={editMe}
									deleteMe={deleteMe}
									{...announcement}
								/>
							))}
						</tbody>
					</Table>
				</div>
			</div>
		</div>
	);
}
