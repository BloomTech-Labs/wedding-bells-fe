import React, { Component } from "react";

import { Collapse, Button } from "reactstrap";

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
				<Button color="link" className="faq-item" onClick={this.toggle}>
					{this.state.collapse ? "-" : "+"} {this.props.title}
				</Button>
				<Collapse isOpen={this.state.collapse}>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.subText}
				</Collapse>
			</div>
		);
	}
}

export default FAQcard;
