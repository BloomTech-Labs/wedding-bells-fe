import React, { Component } from "react";

import { Collapse, Button, CardBody, Card } from "reactstrap";

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
			<div className="faq-card">
				<Button onClick={this.toggle}>
					- {this.props.title}
				</Button>
				<Collapse isOpen={this.state.collapse}>
					<Card>
						<CardBody>{this.props.subText}</CardBody>
					</Card>
				</Collapse>
			</div>
		);
	}
}

export default FAQcard;
