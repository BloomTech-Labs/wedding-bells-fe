import React from "react";
import poly from "./poly.jpg";
import cedric from "./cedric.jpg";
import sammy from "./sammy.jpg";
import marco from "./marco.jpg";
import dan from "./dan.jpg";
import brey from "./brey.jpg";
import bob from "./bob.jpg";

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
			<About>About Us</About>
			<Team>
				{team.map(dev => (
					<div>
						<img className="team-pics" src={dev.img} alt={dev.name} />

						<p>{dev.name}</p>
					</div>
				))}
			</Team>
		</div>
	);
}
