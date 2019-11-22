import React, { Component } from "react";

import Announcement from "../../Announcement";

class Announcements extends Component {
	constructor(props) {
		super(props);
		this.state = {
			announcements: {},
		};
	}
	
	componentDidMount() {
        this.setState({updateAnnouncements()})
    }
	render() {
		return (
			<div className="announcements">
				{this.state.announcements.map(announcement => (
					<Announcement key={announcement.id} {...announcement} />
				))}
			</div>
		);
	}
}
/* 
Refer to https://codesandbox.io/s/rm4pyq9m0o on how to set up a GET request, a componentDidUpdate, and a function, also using setState
*/
export default Announcements;
