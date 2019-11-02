import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import VendorForm from "../VendorForm/index";

const OmniModal = props => {
	const { buttonLabel, className, modalTitle, onChange, onSubmit } = props;

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
					<VendorForm onChange={onChange} onSubmit={onSubmit} />
				</ModalBody>

				<ModalFooter>
					<Button color="primary" onClick={toggle}>
						Do Something
					</Button>{" "}
					<Button color="secondary" onClick={toggle}>
						Cancel
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
};

export default OmniModal;
