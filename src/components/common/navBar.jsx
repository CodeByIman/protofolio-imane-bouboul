import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/navBar.css";

const NavBar = () => {
	const [tabs, setTabs] = useState([
		{ id: "home", name: "Home", path: "/" },
		{ id: "about", name: "About", path: "/about" },
		{ id: "projects", name: "Projects", path: "/projects" },
		{ id: "articles", name: "Articles", path: "/articles" },
		{ id: "contact", name: "Contact", path: "/contact" }
	]);

	const [activeTab, setActiveTab] = useState("home");

	// Function to remove a tab
	const closeTab = (id) => {
		const newTabs = tabs.filter(tab => tab.id !== id);
		setTabs(newTabs);

		// If the active tab is removed, switch to the first available tab
		if (activeTab === id && newTabs.length > 0) {
			setActiveTab(newTabs[0].id);
		}
	};

	// Function to add a new tab
	const addTab = () => {
		const newTabId = `new-tab-${tabs.length}`;
		const newTab = { id: newTabId, name: `Tab ${tabs.length + 1}`, path: `/${newTabId}` };
		setTabs([...tabs, newTab]);
		setActiveTab(newTabId);
	};

	return (
		<div className="nav-container">
			<div className="tab-bar">
				{tabs.map((tab) => (
					<div key={tab.id} className={`terminal-window ${activeTab === tab.id ? "active" : ""}`}>
						<div className="title-bar">
							<span className="dot red"></span>
							<span className="dot yellow"></span>
							<span className="dot green"></span>
							<span className="tab-name">
								<Link to={tab.path} className="nav-link" onClick={() => setActiveTab(tab.id)}>
									{tab.name}
								</Link>
							</span>
							{tab.id !== "home" && (
								<button className="close-btn" onClick={() => closeTab(tab.id)}>✖</button>
							)}
						</div>
					</div>
				))}
				<button className="add-btn" onClick={addTab}>➕</button>
			</div>
		</div>
	);
};

export default NavBar;
