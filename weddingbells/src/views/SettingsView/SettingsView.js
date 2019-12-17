import React, { Component } from "react";

// import dependencies
import { connect } from "react-redux";

// import actions
import { updateCouple, updateWedding } from "../../actions/index.js";

// import styling
import { ListGroup, ListGroupItem, Button, Input } from "reactstrap";
import "./SettingsView.scss";

const initialState = {
	spouse_one_name: "",
	spouse_two_name: "",
	email: "",
	password: "",
	location: "",
	date: "",
};

class SettingsView extends Component {
	constructor(props) {
		super(props);

		this.state = initialState;
	}

	handlerUpdateCouple = e => {
		e.preventDefault();
		const couple = {
			spouse_one_name: this.state.spouse_one_name,
			spouse_two_name: this.state.spouse_two_name,
			email: this.state.email,
			password: this.state.password,
		};
		this.props.updateCouple(couple);
		// window.location.reload();
	};

	handlerUpdateWedding = e => {
		e.preventDefault();
		const wedding = {
			location: this.state.location,
			date: this.state.date,
		};
		this.props.updateWedding(wedding);
		// window.location.reload();
	};

	handlerTextChange = e => {
		this.setState({
			...this.state,
			[e.target.name]: e.target.value,
		});
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
							value={this.state.spouse_one_name}
							onChange={this.handlerTextChange}
						/>
						<Input
							placeholder="Spouse Two Name"
							name="spouse_two_name"
							type="text"
							value={this.state.spouse_two_name}
							onChange={this.handlerTextChange}
						/>
					</ListGroupItem>
					<ListGroupItem tag="button">
						{`Email: ${JSON.parse(localStorage.couple)["email"]}`}
						<Input
							placeholder="Email"
							name="email"
							type="email"
							value={this.state.email}
							onChange={this.handlerTextChange}
						/>
					</ListGroupItem>
					<ListGroupItem tag="button">
						{`Password: *****`}
						<Input
							placeholder="Password"
							name="password"
							type="password"
							value={this.state.password}
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
							value={this.state.location}
							onChange={this.handlerTextChange}
						/>
					</ListGroupItem>
					<ListGroupItem tag="button">
						{`Wedding Date: ${JSON.parse(localStorage.wedding)["date"]}`}
						<Input
							placeholder="Date"
							name="date"
							type="date"
							value={this.state.date}
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
