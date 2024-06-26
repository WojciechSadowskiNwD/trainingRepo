import React from "react";
import { Routes, Route, useParams, useLocation } from "react-router-dom";
import "../styles/Footer.css";

const ComponentFooter = () => {
	const { page } = useParams();
	const { idProduct } = useParams();
	const location = useLocation();

    // Moja alternatywa:
	// const pageName = location.pathname;

	return (
		<>
			<div className="footer">
				<h5>Dodatkowe informacje:</h5>
                {/* Moja alternatywa: */}
				{/* <h6>Nazwa podstrony: <span>{page ? page : pageName.slice(9)}</span></h6> */}

				<h6>Nazwa podstrony: <span>{page ? page : idProduct}</span></h6>
				<h6>Ścieżka docelowa: <span>{location.pathname}</span></h6>
			</div>
		</>
	);
};

const Footer = () => {
	return (
		<div className="footer">
			<h2>Stopka</h2>
			<Routes>
				<Route
					path="/"
					element={
						<p>
							Jesteś na <span>stronie głownej</span>
						</p>
					}
				/>
			</Routes>
			<Routes>
				<Route path="/:page" element={<ComponentFooter />} />
				<Route path="/:product/*" element={<ComponentFooter />} />
				<Route path="/:product/:idProduct" element={<ComponentFooter />} />
			</Routes>
		</div>
	);
};

export default Footer;
