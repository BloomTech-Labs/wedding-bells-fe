import React from "react";

const ServiceItem = ({ title, subText, image, id }) => (
	<div className="services-item">
		<div className="textBlock">
			<h3 className="title">{title}</h3>
			<p className="subText">{subText}</p>
		</div>
		<div className="svgImage">
			<img src={image} alt="" />
		</div>
	</div>
);

export default ServiceItem;
