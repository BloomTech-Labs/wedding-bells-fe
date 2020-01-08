import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

import VendorForm from "../VendorForm/index";
import GuestForm from "../GuestForm/index";

const btnStyle = {
	display: "flex",
	justifyContent: "flex-end",
	padding: "0 2rem 1rem 0",
};

const OmniModal = props => {
	const { buttonLabel, className, modalTitle, onSubmit } = props;

	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	const externalCloseBtn = (
		<button
			className="close"
			style={{ position: "absolute", top: "15px", right: "15px" }}
			onClick={toggle}
		>
			&times;
		</button>
	);
	return (
		<div style={btnStyle}>
			<Modal
				isOpen={modal}
				toggle={toggle}
				className={className}
				external={externalCloseBtn}
			>
				<ModalHeader>{modalTitle}</ModalHeader>
				<ModalBody>
					{modalTitle === "Add Vendor" ? <VendorForm /> : <GuestForm />}
				</ModalBody>
			</Modal>
			<Button color="secondary" onClick={toggle}>
				{buttonLabel}
			</Button>
		</div>
	);
};

export default OmniModal;
