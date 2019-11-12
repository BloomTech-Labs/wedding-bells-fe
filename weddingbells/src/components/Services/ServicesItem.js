import React from "react";

const ServicesItem = ({ title, subText, image, id }) => (
	<div className="services-item">
		<div className="textBlock">
			<h3 className="title">{title}</h3>
			<p className="subText">{subText}</p>
		</div>
		<div className="svgImage">
<<<<<<< HEAD:weddingbells/src/components/ServiceItem/index.js
			<img alt={title} src={image}></img>
=======
			<img src={image} alt="" />
>>>>>>> 554af7e92493b0480a341bef23fbc2606b32d8ba:weddingbells/src/components/Services/ServicesItem.js
		</div>
	</div>
);

export default ServicesItem;
