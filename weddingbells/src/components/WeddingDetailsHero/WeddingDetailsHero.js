import React from "react";
import Container from "../../components/Container/Container";

const WeddingDetailsHero = ({ wedding }) => {
	return (
		<section className="hero">
			<Container>
				<h4>Save the Date!</h4>
				<h1>{new Date(wedding.date).toDateString()}</h1>
				<h2>{wedding.location}</h2>
				<p>For more information, visit <a href={`h3rra.com/weddings/${wedding.slug}`}></a></p>
			</Container>
		</section>
	);
};

export default WeddingDetailsHero;
