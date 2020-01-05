import React, { Component } from "react";

// import styling
import "./About.scss";

// import profile pictures
import poly from "./images/poly.png";
import cedric from "./images/cedric.png";
import sammy from "./images/sammy.png";
import marco from "./images/marco.png";
import dan from "./images/dan.png";
import brey from "./images/brey.png";
import bob from "./images/bob.png";

class About extends Component {
	render() {
		const team = [
			{
				name: "Poly Goveia",
				img: poly,
				quote:
					"I am a Full-stack developer with an insatiable love for code and coffee. I speak multiple languages including English, Portuguese, and Javascript. You can find me at a local coffee shop sipping on iced coffee, and working through challenging problems.",
				github: (
					<a target="_blank" href="https://github.com/Poly-G">
						<i class="fa fa-github-square"></i>
					</a>
				),
				linkedin: (
					<a target="_blank" href="https://www.linkedin.com/in/poly-goveia/">
						<i class="fa fa-linkedin-square"></i>
					</a>
				),
				twitter: (
					<a target="_blank" href="https://twitter.com/_PolyG">
						<i class="fa fa-twitter-square"></i>
					</a>
				),
			},
			{
				name: "Cedric Amaya",
				img: cedric,
				quote:
					"I'm a Computer Science major and software developer with a great passion for solving problems with the use of code. I love working day-to-day on projects that require multidisciplinary skill sets and solving complex issues that make the lives of others easier.",
				github: (
					<a target="_blank" href="https://github.com/cedricium">
						<i class="fa fa-github-square"></i>
					</a>
				),
				linkedin: (
					<a target="_blank" href="https://www.linkedin.com/in/cedricamaya/">
						<i class="fa fa-linkedin-square"></i>
					</a>
				),
				twitter: (
					<a target="_blank" href="https://twitter.com/CedricAmaya">
						<i class="fa fa-twitter-square"></i>
					</a>
				),
			},
			{
				name: "Robert Pedersen",
				img: bob,
				quote:
					"I am a full stack web developer that loves to work both solo and in groups to make the impossible, possible. I love being in nature whether its backpacking, swimming, or camping. If I am not coding or out in nature you can find me playing a board game with my friends or family. If you need help with a challenge, Im the man for the job.",
				github: (
					<a target="_blank" href="https://github.com/robpedersendev">
						<i class="fa fa-github-square"></i>
					</a>
				),
				linkedin: (
					<a target="_blank" href="https://www.linkedin.com/in/robpedersendev">
						<i class="fa fa-linkedin-square"></i>
					</a>
				),
				twitter: (
					<a target="_blank" href="https://twitter.com/RobPedersenDev">
						<i class="fa fa-twitter-square"></i>
					</a>
				),
			},
			{
				name: "Brey Batten",
				img: brey,
				quote:
					"I am a full-stack software developer and a student at Lambda School. I prefer backend development and working on a team. I enjoy being physically active, and pushing myself to be 1% better today than I was yesterday.",
				github: (
					<a target="_blank" href="https://github.com/BreyBatten">
						<i class="fa fa-github-square"></i>
					</a>
				),
				linkedin: (
					<a
						target="_blank"
						href="https://www.linkedin.com/in/brey-batten-954661181/"
					>
						<i class="fa fa-linkedin-square"></i>
					</a>
				),
				twitter: (
					<a target="_blank" href="https://twitter.com/breybatten_dev">
						<i class="fa fa-twitter-square"></i>
					</a>
				),
			},
			{
				name: "Sammy Chang",
				img: sammy,
				quote:
					"Award-winning web developer with a wide range of skills in both FE and BE web development. Experienced in creating interactive websites and databases. Love using technology to solve problems in creative ways.",
				github: (
					<a target="_blank" href="https://github.com/schang1146">
						<i class="fa fa-github-square"></i>
					</a>
				),
				linkedin: (
					<a
						target="_blank"
						href="https://www.linkedin.com/in/sammy-chang-927976a3/"
					>
						<i class="fa fa-linkedin-square"></i>
					</a>
				),
				twitter: (
					<a target="_blank" href="https://twitter.com/slackerbot1">
						<i class="fa fa-twitter-square"></i>
					</a>
				),
			},
			{
				name: "Dan Sample",
				img: dan,
				quote:
					"I am a motivated Full-stack developer with a wide range of skills in web development. Well-versed in structuring, developing and implementing interactive websites and SQL databases. I love solving everyday problems with the power of technology and enjoy the art of creating.",
				github: (
					<a target="_blank" href="https://github.com/DanSample">
						<i class="fa fa-github-square"></i>
					</a>
				),
				linkedin: (
					<a
						target="_blank"
						href="https://www.linkedin.com/in/dan-sample-89897b183/"
					>
						<i class="fa fa-linkedin-square"></i>
					</a>
				),
				twitter: (
					<a target="_blank" href="https://twitter.com/DanTheDev3">
						<i class="fa fa-twitter-square"></i>
					</a>
				),
			},
			{
				name: "Marco Guzman",
				img: marco,
				quote:
					"I turned to development because it allows me to create tools that can help others.  To be able to solve these problems that people come across to interact with others is great and I look forward to continue to do that professionally.",
				github: (
					<a target="_blank" href="https://github.com/mag16">
						<i class="fa fa-github-square"></i>
					</a>
				),
				linkedin: (
					<a
						target="_blank"
						href="https://www.linkedin.com/in/marco-a-guzman-44834b57/"
					>
						<i class="fa fa-linkedin-square"></i>
					</a>
				),
				twitter: (
					<a target="_blank" href="https://twitter.com/guziekastan">
						<i class="fa fa-twitter-square"></i>
					</a>
				),
			},
		];

		return (
			<div id="about-us">
				<div className="team">
					{team.map((dev, idx) => (
						<div className="member-wrapper">
							<div className="team-member" key={idx}>
								<img className="team-pics" src={dev.img} alt={dev.name} />
								<div className="socials">
									<h3>{dev.github}</h3>
									<h3>{dev.linkedin}</h3>
									<h3>{dev.twitter}</h3>
								</div>
								<h6>{dev.name}</h6>
							</div>
							<div className="quote-wrapper">
								<p className="quote">{dev.quote}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default About;
