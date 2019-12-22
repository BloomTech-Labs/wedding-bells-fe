import React, { Component } from "react";
import axios from "axios";

const initialState = {
	spouse_one: "",
	spouse_two: "",
	wedding: {},
};

const envVarPage = process.env.REACT_APP_BACKEND_BASE_URL;

class GuestPageView extends Component {
	constructor(props) {
		super(props);

		this.state = initialState;
	}
	componentDidMount() {
		// grab the slug passed on the URL
		const slug = this.props.match.params.slug;
		this.fetchCoupleNames(slug);
		this.fetchWedding(slug);
		this.fetchRegistries(slug);
	}

	fetchCoupleNames = async slug => {
		const parsedSlug = slug.split("-");
		let i;
		for (i = 0; i < parsedSlug.length - 3; i++) {
			await this.setState({
				spouse_one: this.state.spouse_one + parsedSlug[i].toUpperCase(),
			});
			if (parsedSlug[i + 1] === "and") {
				break;
			} else {
				await this.setState({ spouse_one: this.state.spouse_one + " " });
			}
		}

		for (let j = i + 2; j < parsedSlug.length - 3; j++) {
			await this.setState({
				spouse_two: this.state.spouse_two + parsedSlug[j].toUpperCase(),
			});
			if (j + 1 === parsedSlug.length - 3) {
				break;
			} else {
				await this.setState({ spouse_two: this.state.spouse_two + " " });
			}
		}
	};

	fetchWedding = async slug => {
		await axios
			.get(`${envVarPage}/api/weddings/${slug}`)
			.then(res => {
				this.setState({ wedding: res.data });
			})
			.catch(err => {
				console.log(err);
			});
		this.setState({
			wedding: {
				...this.state.wedding,
				date: this.state.wedding.date.split("T")[0],
			},
		});
	};

	fetchRegistries = async slug => {
		// await axios
		// 	.get(``)
	};

	render() {
		return (
			<div className="guestpage_wrapper">
				<div className="guestpage_wedding">
					<h2>
						WELCOME TO {this.state.spouse_one} AND {this.state.spouse_two}'S
						WEDDING!
					</h2>
					<h3>Date: {this.state.wedding.date}</h3>
					<h3>Location: {this.state.wedding.location}</h3>
				</div>
				<div className="guestpage_registries"></div>
				<div className="guestpage_announcements"></div>
			</div>
		);
	}
}

export default GuestPageView;
