import React, { Component } from "react";
import axios from "axios";

import { ListGroup, ListGroupItem, Collapse } from "reactstrap";

import "./GuestPageView.scss";

const initialState = {
	spouse_one: "",
	spouse_two: "",
	wedding: {},
	registries: [],
	announcements: [],
};

const envVarPage = process.env.REACT_APP_BACKEND_BASE_URL;

class GuestPageView extends Component {
	constructor(props) {
		super(props);

		this.state = initialState;
	}

	async componentDidMount() {
		// grab the slug passed on the URL
		const slug = this.props.match.params.slug;

		// fetch needed info from BE
		await this.fetchCoupleNames(slug);
		await this.fetchWedding(slug);
		await this.fetchRegistries(slug);
		await this.fetchAnnouncements();
	}

	fetchAnnouncements = async () => {
		const registryLink =
			`${envVarPage}/api/weddings/` +
			this.state.wedding.id.toString() +
			`/announcements/`;

		await axios
			.get(registryLink)
			.then(res => {
				this.setState({ announcements: res.data });
			})
			.catch(err => console.log(err));
	};

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

	fetchRegistries = async slug => {
		const registryLink =
			`${envVarPage}/api/weddings/` +
			this.state.wedding.id.toString() +
			`/registries/`;

		await axios
			.get(registryLink)
			.then(res => {
				this.setState({ registries: res.data });
			})
			.catch(err => {
				console.log(err);
			});
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

	parseCompanyName = name => {
		return name.replace(/\s+/g, "-").toLowerCase();
	};

	render() {
		return (
			<div className="guestpage_wrapper">
				<div className="guestpage_section guestpage_wedding">
					<h2>
						WELCOME TO {this.state.spouse_one} AND {this.state.spouse_two}'S
						WEDDING!
					</h2>
					<h4>Date: {this.state.wedding.date}</h4>
					<h4>Location: {this.state.wedding.location}</h4>
				</div>
				<div className="guestpage_section guestpage_announcements">
					<h2>Announcements</h2>
					<ListGroup className="announcements-list">
						{this.state.announcements.map(announcement => (
							<ListGroupItem className="announcement">
								<h5>{announcement.title}</h5>
								<p>
									{`${announcement.time_stamp.split("T")[0]} : 
									${announcement.announcement}`}
								</p>
							</ListGroupItem>
						))}
					</ListGroup>
				</div>
				<div className="guestpage_section guestpage_registries">
					<h2>Registries</h2>
					<div className="registry-list">
						{this.state.registries.map(registry => (
							<div className="registry-card">
								<a
									href={registry.url}
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src={require("../../assets/registry-img/" +
											this.parseCompanyName(registry.company_name) +
											".png")}
										className="registry-img"
										alt={registry.company_name}
									/>
								</a>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default GuestPageView;
