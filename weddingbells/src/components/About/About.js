import React, { Component } from "react";

// import styling
import "./About.scss";

// import profile pictures
import poly from "./images/poly.png";
import cedric from "./images/cedric.png";
import sammy from "./images/sammy.png";
import marco from "./images/marco.png";
import dan from "./images/dan.png";
import brey from "./images/brey.png";
import bob from "./images/bob.png";

class About extends Component {
	render() {
		const team = [
			{
				name: "Poly Goveia",
				img: poly,
			},
			{
				name: "Cedric Amaya",
				img: cedric,
			},
			{
				name: "Robert Pedersen",
				img: bob,
			},
			{
				name: "Brey Batten",
				img: brey,
			},
			{
				name: "Sammy Chang",
				img: sammy,
			},
			{
				name: "Dan Sample",
				img: dan,
			},
			{
				name: "Marco Guzman",
				img: marco,
			},
		];

		return (
			<div id="about-us">
				<div className="team">
					{team.map((dev, idx) => (
						<div class="team-member" key={idx}>
							<img className="team-pics" src={dev.img} alt={dev.name} />
							<p>{dev.name}</p>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default About;
