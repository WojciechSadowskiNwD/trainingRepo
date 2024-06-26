import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/Navigation.css';

const list = [
	{ name: "start", path: "/" },
	{ name: "produkty", path: "/products" },
	{ name: "kontakt", path: "/contact" },
	{ name: "panel admina", path: "/admin" },
];

const Navigation = (props) => {
	const menu = list.map(item => (
		<li key={item.name} onClick={props.click}>
			<NavLink to={item.path}>{item.name}</NavLink>
		</li>
	))

	return (
		<nav className="main">
			<ul>
				{menu}
			</ul>
		</nav>
	);
};

export default Navigation;
