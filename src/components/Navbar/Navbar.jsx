import React, { useState, useEffect } from "react";
import { MdOutlineMenuOpen } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import {
	BsFillTriangleFill,
	BsFacebook,
	BsInstagram,
	BsLinkedin,
	BsGithub,
} from "react-icons/bs";
import { Link } from "react-router-dom";

import "./Navbar.css";
import { works } from "../../data";
const main = ["Services", "Work", "About", "Testimonials"];

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const [back, setBack] = useState(false);
	const [vueProjects, setVueProjects] = useState(false);

	const scrolling = () => {
		if (window.scrollY >= 30) {
			setBack(true);
		} else {
			setBack(false);
		}
	};

	useEffect(() => {
		scrolling();
		window.addEventListener("scroll", scrolling);
	});

	window.onscroll = { scrolling };

	return (
		<nav className={back ? "app__navbar active" : "app__navbar"}>
			<ul className="app__navbar-menu">
				<a
					href="/"
					className="app__logo"
					style={{ display: open ? "none" : "block" }}
				>
					<h1>Ard-uno</h1>
				</a>
				<div
					className={
						open ? "app__navbar-container active" : "app__navbar-container"
					}
				>
					<ul className="app__navbar-main active">
						{main.map((item) => (
							<li key={item} onClick={() => setOpen(false)}>
								<a href={`/#${item}`}>
									<h4>{item}</h4>
								</a>
							</li>
						))}
						<div
							className={`${
								vueProjects ? "projects-links active" : "projects-links"
							}`}
						>
							<h4 onClick={() => setVueProjects(!vueProjects)}>
								Pages{" "}
								<BsFillTriangleFill className="triangle-icon" fontSize={10} />
							</h4>
							<div className="projects-links-container">
								{works.slice(0, 3).map((w, i) => (
									<Link
										key={`project-${i}`}
										to={`/projects/${w.title.toLowerCase()}`}
										onClick={() => {
											setOpen(false);
											setVueProjects(false);
										}}
										className="project-link"
									>
										<h4>{w.title}</h4>
									</Link>
								))}
							</div>
						</div>
						<div className="app__navbar-social">
							<a
								href="https://www.linkedin.com/in/choaib-elmadi"
								target="_blank"
								rel="noreferrer"
							>
								<BsLinkedin fontSize={26} />
							</a>
							<a
								href="https://github.com/Choaib-ELMADI"
								target="_blank"
								rel="noreferrer"
							>
								<BsGithub fontSize={26} />
							</a>
							<a
								href="https://instagram.com/choaib_elmadi?igshid=YmMyMTA2M2Y"
								target="_blank"
								rel="noreferrer"
							>
								<BsInstagram fontSize={26} />
							</a>
							<a
								href="https://www.facebook.com/choaib.elmadi.94"
								target="_blank"
								rel="noreferrer"
							>
								<BsFacebook fontSize={26} />
							</a>
						</div>
					</ul>
				</div>
				<a href="mailto:choaib3elmadi@gmail.com" className="app__navbar-btn">
					Let's Talk
				</a>
				<button onClick={() => setOpen(!open)} className="toggle-navbar">
					{!open ? (
						<MdOutlineMenuOpen fontSize={32} />
					) : (
						<IoClose fontSize={32} />
					)}
				</button>
			</ul>
		</nav>
	);
};

export default Navbar;
