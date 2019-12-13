import React, { Component } from "react";

import { ListGroup, ListGroupItem } from "reactstrap";

class SettingsView extends Component {
	render() {
		return (
			<div className="settings_wrapper">
				<h2>H3rra Settings</h2>
                <h3>Account Settings</h3>
				<ListGroup>
					<ListGroupItem>Names:</ListGroupItem>
					<ListGroupItem>Email:</ListGroupItem>
					<ListGroupItem>Password:</ListGroupItem>
				</ListGroup>
                <h3>Wedding Stuff</h3>
                <ListGroup>
                    <ListGroupItem>Wedding Location:</ListGroupItem>
                    <ListGroupItem>Wedding Date:</ListGroupItem>
                </ListGroup>
			</div>
		);
	}
}

export default SettingsView;
