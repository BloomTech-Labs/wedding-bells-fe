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
					"I'm a Computer Science major and software developer with a great passion for solving problems with the use of code. I love working day-to-day on projects that require multidisciplinary skill sets and solving complex issues that make the lives of others easier.",
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
					"I am a Lambda School student that attends part-time in the evenings. My favorite hobbies include backpacking, camping, and fishing. If I am not working or doing anything of the above, you can find me spending time with my family.",
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
					"I'm a Computer Science major and software developer with a great passion for solving problems with the use of code. I love working day-to-day on projects that require multidisciplinary skill sets and solving complex issues that make the lives of others easier.",
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
					<a target="_blank" href="https://twitter.com/DanTheDev3">
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
					"I'm a Computer Science major and software developer with a great passion for solving problems with the use of code. I love working day-to-day on projects that require multidisciplinary skill sets and solving complex issues that make the lives of others easier.",
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
