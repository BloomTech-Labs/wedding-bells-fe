import React, { Component } from "react";

// import styling
import "../../styles/faq.scss";

// import components
import FAQcard from "./FAQcard.js";

// import data
import FAQ_DATA from "./data";

class FAQ extends Component {
	constructor() {
		super();
		this.state = {
			faqs: FAQ_DATA,
		};
	}
	render() {
		return (
			<div id="faq" className="faq-wrapper">
				<h3>FAQ</h3>
				{this.state.faqs.map(faq => (
					<FAQcard key={faq.id} {...faq} />
				))}
			</div>
		);
	}
}

export default FAQ;
