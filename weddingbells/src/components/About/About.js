import React from "react";

// import styling
import styled from "styled-components";

// import profile pictures
import sunflower from "./sunflower.jpg";
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
		{
			name: "Davorin Piljic",
			img: sunflower,
		},
	];

	const About = styled.h2`
		margin-top: 100px;
	`;

	const Team = styled.div`
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		height: 300px;
	`;

	const TeamPics = styled.img`
		height: 150px;
		width: auto;
		border-radius: 5px;
		box-shadow: 10px 10px 50px grey;
	`;

	return (
		<div id="about-us">
			<About>About Us</About>
			<Team>
				{team.map(dev => (
					<div>
						<TeamPics src={dev.img} />

						<p>{dev.name}</p>
					</div>
				))}
			</Team>
		</div>
	);
}
