import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import RegistryForm from "../RegistryForm";

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
			<Button color="secondary" onClick={toggle}>
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
					{/* {modalTitle === "Registry" ? <VendorForm /> : <GuestForm />} */}
					<RegistryForm />
				</ModalBody>
			</Modal>
		</div>
	);
};

export default OmniModal;
