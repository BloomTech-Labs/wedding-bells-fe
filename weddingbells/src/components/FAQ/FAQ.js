import React, { Component } from "react";
// import "./styles/FAQ.scss";

import FAQcard from "./FAQcard.js";
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
