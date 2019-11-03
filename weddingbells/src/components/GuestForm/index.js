import React from "react";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormText,
} from "reactstrap";

class GuestForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "disabled",
		};
	}

	render() {
		const { onChange, onSubmit } = this.props;
		return (
			<FormGroup className="guestForm">
				<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
					<Label for="guestName">Name Of Guest</Label>
					<Input
						type="text"
						name="guestName"
						id="guestName"
						placeholder="Guests Name"
					/>
				</FormGroup>
				<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
					<Label for="guestEmail">Guests Email</Label>
					<Input
						type="email"
						name="guestEmail"
						id="guestEmail"
						placeholder="Guests Email"
					/>
				</FormGroup>
				<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
					<Label for="going">Are they going?</Label>
					<Input
						type="text"
						name="going"
						id="going"
						placeholder="Are they Going?"
					/>
				</FormGroup>
				<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
					<Label for="respondedToInvite">Have they responded?</Label>
					<Input
						type="text"
						name="respondedToInvite"
						id="respondedToInvite"
						placeholder="Have They Responded?"
					/>
				</FormGroup>
				<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
					<Label for="plusOne">Are they bringing a plus one?</Label>
					<Input
						type="text"
						name="plusOne"
						id="plusOne"
						placeholder="Are they bringing anyone?"
					/>
				</FormGroup>
			</FormGroup>
		);
	}
}

export default GuestForm;
