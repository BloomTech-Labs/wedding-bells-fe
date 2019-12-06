import React, { Component } from "react";

class Announcement extends Component {
	constructor(props) {
		super(props);
		this.state = {
			/*Placeholder*/
		};
	}

	render() {
		const ColoredLine = ({ color }) => (
			<hr
				style={{
					color: color,
					backgroundColor: color,
					height: 0.5,
				}}
			/>
		);

		const { header, content, timestamp } = this.props;
		return (
			<div className="announcement">
				<div className="wrapper">
					<div className="header">{header}</div>
					<div className="content">{content}</div>
					<div className="timeStamp">{timestamp}</div>
				</div>
				<ColoredLine color="red" />
			</div>
		);
	}
}

export default Announcement;
