import React, { Component } from "react";
import "./Testimonials.scss";

import TESTIMONIALS_DATA from "./data";

import { Carousel, CarouselItem, CarouselControl } from "reactstrap";

class Testimonials extends Component {
	constructor() {
		super();
		this.state = {
			activeIndex: 0,
			animating: false,
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

	render() {
		return (
			<div id="testimonials" className="testimonials-wrapper">
				<Carousel
					activeIndex={this.state.activeIndex}
					next={this.next}
					previous={this.previous}
				>
					{this.state.testimonials.map(testimonial => (
						<CarouselItem
							onExiting={() => this.setState({ animating: true })}
							onExited={() => this.setState({ animating: false })}
							key={testimonial.id}
						>
							<div className="set-wrapper">
								<img
									className="testimonial-img"
									src={testimonial.img}
									alt="couple image"
								/>
								<div className="testimonials-quote">
									<p>{testimonial.quoteText}</p>
									<i>- {testimonial.author}</i>
								</div>
							</div>
						</CarouselItem>
					))}
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
