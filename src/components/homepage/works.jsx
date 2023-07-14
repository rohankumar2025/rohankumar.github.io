import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./grafiniti.png"
								alt="grafiniti"
								className="work-image"
							/>
							<div className="work-title">Grafiniti</div>
							<div className="work-subtitle">
								AI Software Engineer Intern
							</div>
							<div className="work-duration">Summer 2023</div>
						</div>

						<div className="work">
							<img
								src="./aiclub.png"
								alt="aiclub"
								className="work-image"
							/>
							<div className="work-title">AIClub.world</div>
							<div className="work-subtitle">
								Full Stack Software Engineer Intern
							</div>
							<div className="work-duration">Summer 2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
