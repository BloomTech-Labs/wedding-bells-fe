import React from "react";
import sunflower from "./sunflower.jpg";
import styled from "styled-components";

export default function About() {
	const team = [
		{
			name: "Poly Goveia",
			img: sunflower,
		},
		{
			name: "Cedric Amaya",
			img: sunflower,
		},
		{
			name: "Robert Pedersen",
			img: sunflower,
		},
		{
			name: "Brey Batten",
			img: sunflower,
		},
		{
			name: "Sammy Chang",
			img: sunflower,
		},
		{
			name: "Dan Sample",
			img: sunflower,
		},
		{
			name: "Marco Guzman",
			img: sunflower,
		},
	];

	const TeamPics = styled.img`
		height: 200px;
		width: auto;
	`;

	return (
		<div>
			<h2>About Us</h2>
			{team.map(dev => (
				<div>
					<TeamPics src={dev.img} />
				</div>
			))}
		</div>
	);
}
