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
	`;

	return (
		<div>
			<About>About Us</About>
			<Team>
				{team.map(dev => (
					<TeamPics src={dev.img} />
				))}
			</Team>
		</div>
	);
}
