import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Header.css";
import { images } from "../../constants/index";
import { sponsors } from "../../data";

const Header = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className="app__header">
			<div className="app__header-top">
				<h1>
					Arduino & <br />
					Microcontrollers.
				</h1>
				<p>
					<b>Ard-Uno</b> is a platform that enables hobbyists, designers, and
					engineers to create a wide range of projects, from simple LED displays
					to complex robotic systems.
				</p>
			</div>
			<div className="app__header-bottom">
				<div className="app__header-pic">
					<img loading="lazy" src={images.banner} alt="banner" />
				</div>
				<div className="app__header-last">
					<small>
						Arduino Uno R3 microcontroller board, 14 digital input/output pins,
						6 analog inputs.
					</small>
				</div>
				<div className="app__header-spons">
					{sponsors.map((s, i) => (
						<a
							key={i}
							href={s.link}
							target="_blank"
							rel="noreferrer"
							data-aos="fade-up"
						>
							<img loading="lazy" src={s.img} alt={s.name} />
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default Header;
