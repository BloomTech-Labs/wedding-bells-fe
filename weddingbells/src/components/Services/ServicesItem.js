import React from "react";

const ServicesItem = ({ title, subText, image, id }) => (
	<div className="services-item">
		<div className="textBlock">
			<h3 className="title">{title}</h3>
			<p className="subText">{subText}</p>
		</div>
		<div className="svgImage">
			<img alt={title} src={image}></img>
		</div>
	</div>
);

export default ServicesItem;
