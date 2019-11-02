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
			<div className="vendorForm">
				<Form inline className="form">
					<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
						<Label for="vendorName">Name Of Vendor</Label>
						<Input
							type="text"
							name="vendorName"
							id="vendorName"
							onChange={onChange}
						/>
					</FormGroup>
					<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
						<Label for="select">Select Vendor Type</Label>
						<Input
							value={this.state.value}
							type="select"
							name="select"
							id="select"
						>
							<option disabled value="disabled">
								Please choose an option
							</option>
							<option value="photographer">Photographer</option>
							<option value="venue">Venue</option>
							<option value="hairAndMakeup">Hair and Makeup</option>
							<option value="attire">Attire</option>
							<option value="baker">Baker</option>
							<option value="florist">Florist</option>
							<option value="musicPro">Music Pros</option>
							<option value="videographer">Videographer</option>
							<option value="stationer">Stationer</option>
							<option value="caterer">Caterer</option>
							<option value="officiant">Officiant</option>
							<option value="jeweler">Jeweler</option>
							<option value="favorsVendor">Favors Vendor</option>
							<option value="rentalsCompany">Rentals Company</option>
							<option value="transportationCompany">
								Transportation Company
							</option>
							<option value="lightingDesigner">Lighting Designer</option>
							<option disabled value="disabled">
								Please choose an option
							</option>
						</Input>
					</FormGroup>
				</Form>
			</div>
		);
	}
}

export default GuestForm;
