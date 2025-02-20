import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkText, link } = props;

	// Vérifier si le lien est externe
	const isExternalLink = link.startsWith("http");

	return (
		<React.Fragment>
			<div className="project">
				{isExternalLink ? (
					// Lien externe (ouvre dans un nouvel onglet)
					<a href={link} target="_blank" rel="noopener noreferrer">
						<div className="project-container">
							<div className="project-logo">
								<img src={logo} alt="logo" />
							</div>
							<div className="project-title">{title}</div>
							<div className="project-description">{description}</div>
							<div className="project-link">
								<div className="project-link-icon">
									<FontAwesomeIcon icon={faLink} />
								</div>
								<div className="project-link-text">{linkText}</div>
							</div>
						</div>
					</a>
				) : (
					// Lien interne (utilise react-router-dom)
					<Link to={link}>
						<div className="project-container">
							<div className="project-logo">
								<img src={logo} alt="logo" />
							</div>
							<div className="project-title">{title}</div>
							<div className="project-description">{description}</div>
							<div className="project-link">
								<div className="project-link-icon">
									<FontAwesomeIcon icon={faLink} />
								</div>
								<div className="project-link-text">{linkText}</div>
							</div>
						</div>
					</Link>
				)}
			</div>
		</React.Fragment>
	);
};

export default Project;