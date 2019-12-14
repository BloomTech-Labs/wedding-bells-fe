import React, { Component } from "react";

// import dependencies
import { connect } from "react-redux";

// import actions
import { updateCouple, updateWedding } from "../../actions/index.js";

// import styling
import { ListGroup, ListGroupItem, Button, Input } from "reactstrap";

const initialState = {
	updateCouple: {
		spouse_one_name: "",
		spouse_two_name: "",
		email: "",
		password: "",
	},
	updateWedding: {
		location: "",
		date: "",
	},
};

class SettingsView extends Component {
	constructor(props) {
		super(props);

		this.state = initialState;
	}

	handlerUpdateCouple = e => {
		e.preventDefault();
		console.log(JSON.parse(localStorage.couple));
		this.props.updateCouple();
	};

	handlerUpdateWedding = e => {
		e.preventDefault();
		this.props.updateWedding();
	};
	render() {
		return (
			<div className="settings_wrapper">
				<h2>H3rra Settings</h2>
				<h3>Account Settings</h3>
				<ListGroup>
					<ListGroupItem tag="button">
						{`Names: ${JSON.parse(localStorage.couple)["spouse_one_name"]} & ${
							JSON.parse(localStorage.couple)["spouse_two_name"]
						}`}
						<Input
							placeholder="Spouse One Name"
							name="spouse_one_name"
							type="text"
							value={this.state.updateCouple.spouse_one_name}
							onChange={this.handlerTextChange}
						/>
						<Input
							placeholder="Spouse Two Name"
							name="spouse_two_name"
							type="text"
							value={this.state.updateCouple.spouse_two_name}
							onChange={this.handlerTextChange}
						/>
					</ListGroupItem>
					<ListGroupItem tag="button">
						{`Email: ${JSON.parse(localStorage.couple)["email"]}`}
						<Input
							placeholder="Email"
							name="email"
							type="email"
							value={this.state.updateCouple.email}
							onChange={this.handlerTextChange}
						/>
					</ListGroupItem>
					<ListGroupItem tag="button">
						{`Password: *****`}
						<Input
							placeholder="Password"
							name="password"
							type="password"
							value={this.state.updateCouple.password}
							onChange={this.handlerTextChange}
						/>
					</ListGroupItem>
					<Button onClick={this.handlerUpdateCouple}>Apply</Button>
				</ListGroup>
				<h3>Wedding Stuff</h3>
				<ListGroup>
					<ListGroupItem tag="button">
						{`Wedding Location: ${
							JSON.parse(localStorage.wedding)["location"]
						}`}
						<Input
							placeholder="Location"
							name="location"
							type="text"
							value={this.state.updateWedding.location}
							onChange={this.handlerTextChange}
						/>
					</ListGroupItem>
					<ListGroupItem tag="button">
						{`Wedding Date: ${JSON.parse(localStorage.wedding)["date"]}`}
						<Input
							placeholder="Date"
							name="date"
							type="date"
							value={this.state.updateWedding.date}
							onChange={this.handlerTextChange}
						/>
					</ListGroupItem>
					<Button onClick={this.handlerUpdateWedding}>Apply</Button>
				</ListGroup>
			</div>
		);
	}
}

export default connect(null, { updateCouple, updateWedding })(SettingsView);
