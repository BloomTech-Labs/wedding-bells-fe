import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, Form } from "reactstrap";

import VendorForm from "../VendorForm/index";
import GuestForm from "../GuestForm/index";

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
		<div>
			<Button color="primary" onClick={toggle}>
				{buttonLabel}
			</Button>
			<Modal
				isOpen={modal}
				toggle={toggle}
				className={className}
				external={externalCloseBtn}
			>
				<ModalHeader>{modalTitle}</ModalHeader>
				<ModalBody>
					<Form>
						{modalTitle === "Add Vendor" ? <VendorForm /> : <GuestForm />}
						<Button color="danger" onClick={onSubmit}>
							Submit
						</Button>{" "}
					</Form>
				</ModalBody>
			</Modal>
		</div>
	);
};

export default OmniModal;
