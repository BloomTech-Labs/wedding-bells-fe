import React from "react";
import Container from "../../components/Container/Container";

const WeddingDetailsHero = ({ wedding }) => {
	return (
		<section className="hero">
			<Container>
				<h4>Save the Date!</h4>
				<h1>{new Date(wedding.date).toDateString()}</h1>
				<h2>{wedding.location}</h2>
			</Container>
		</section>
	);
};

export default WeddingDetailsHero;
