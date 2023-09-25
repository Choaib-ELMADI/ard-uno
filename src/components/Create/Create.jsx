import React from "react";

import "./Create.css";
import { images } from "../../constants/index";
import { creates } from "../../data";

const Create = () => {
	return (
		<div className="app__create">
			<div className="app__create-top">
				<h2>Together we create.</h2>
				<h5>Now we work</h5>
			</div>
			<div className="app__create-create">
				<div className="app__create-banner">
					<img loading="lazy" src={images.create_banner} alt="creating" />
				</div>
				<div className="app__create-what">
					{creates.map((c, i) => (
						<div className="what" key={i}>
							<div className="what-icon">
								<img loading="lazy" src={c.icon} alt={`create-${i}`} />
							</div>
							<h2>{c.title}</h2>
							<p>{c.desc}</p>
						</div>
					))}
					<div className="what last">
						<small>
							<b>Now we work</b>
						</small>
						<h1>Let's create your next big project together.</h1>
						<a href="mailto:choaib3elmadi@gmail.com">Get in touch</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Create;
