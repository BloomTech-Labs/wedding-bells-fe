import React, { Component } from "react";

import { Collapse, Button, CardBody, Card, ListGroupItem } from "reactstrap";

class FAQcard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collapse: false,
		};
	}

	toggle = () => {
		this.setState(state => ({ collapse: !state.collapse }));
	};

	render() {
		return (
			<ListGroupItem className="faq-card">
				<Button color="link" onClick={this.toggle}>
					- {this.props.title}
				</Button>
				<Collapse isOpen={this.state.collapse}>
					{this.props.subText}
				</Collapse>
			</ListGroupItem>
		);
	}
}

export default FAQcard;
