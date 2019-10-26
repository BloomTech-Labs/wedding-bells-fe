import React, { Component } from "react";
// import "../../styles/Testimonials.scss";

// import Testimonialscard from "./Testimonialscard.js";
import TESTIMONIALS_DATA from "./data";

import {
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
	// CarouselCaption,
} from "reactstrap";

class Testimonials extends Component {
	constructor() {
		super();
		this.state = {
			activeIndex: 0,
			setActieIndex: 0,
			animating: false,
			setAnimating: false,
			testimonials: TESTIMONIALS_DATA,
		};
	}

	next = () => {
		if (this.state.animating) return;
		const nextIndex =
			this.state.activeIndex === this.state.testimonials.length - 1
				? 0
				: this.state.activeIndex + 1;
		this.setState({
			activeIndex: nextIndex,
		});
	};

	previous = () => {
		if (this.state.animating) return;
		const nextIndex =
			this.state.activeIndex === 0
				? this.state.testimonials.length - 1
				: this.state.activeIndex - 1;
		this.setState({
			activeIndex: nextIndex,
		});
	};

	goToIndex = newIndex => {
		if (this.state.animating) return;
		this.setState({
			activeIndex: newIndex,
		});
	};

	slides = this.state.testimonials.map(testimonial => {
		return (
			<CarouselItem
				onExiting={() => this.setState({ animating: true })}
				onExited={() => this.setState({ animating: false })}
				key={testimonial.id}
			>
				{testimonial.quoteText}
			</CarouselItem>
		);
	});

	render() {
		console.log(this.state.testimonials)
		return (
			<div className="testimonials-wrapper">
				<h3>Testimonials</h3>
				<Carousel
					activeIndex={this.state.activeIndex}
					next={this.next}
					previous={this.previous}
				>
					<CarouselIndicators
						testimonials={this.state.testimonials}
						activeIndex={this.state.activeIndex}
						onClickHandler={this.goToIndex}
					/>
					{this.slides}
					<CarouselControl
						direction="prev"
						directionText="Previous"
						onClickHandler={this.previous}
					/>
					<CarouselControl
						direction="next"
						directionText="Next"
						onClickHandler={this.next}
					/>
				</Carousel>
			</div>
		);
	}
}

export default Testimonials;
