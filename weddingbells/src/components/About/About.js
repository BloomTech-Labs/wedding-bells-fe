import React from "react";

// import styling
import "./About.scss";

// import profile pictures
import poly from "./images/poly.jpg";
import cedric from "./images/cedric.jpg";
import sammy from "./images/sammy.jpg";
import marco from "./images/marco.jpg";
import dan from "./images/dan.jpg";
import brey from "./images/brey.jpg";
import bob from "./images/bob.jpg";

export default function About() {
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
			<h2 className="about">About Us</h2>
			<div className="team">
				{team.map((dev, idx) => (
					<div key={idx}>
						<img className="team-pics" src={dev.img} alt={dev.name} />

						<p>{dev.name}</p>
					</div>
				))}
			</div>
		</div>
	);
}
