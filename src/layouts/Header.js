import React, { Component } from "react";
import "../styles/Header.css";
import { Routes, Route } from "react-router-dom";
import img1 from "../images/header1.jpg";
import img2 from "../images/header2.jpg";
import img3 from "../images/header3.jpg";

const Header = (props) => {
		// // zrobimy losowanie obrazka z tablicy
		const images = [img1, img2, img3];
		const img = images[props.index];

		return (
			<>
				{/* Tak wyglądałoby określenie w sposób statyczny obrazka pod konkretną klikaną sekcję: */}
				{/* <Routes>
                    <Route path="/" element={<img src={img1} alt="city foto"/>} />
                    <Route path="/products" element={<img src={img2} alt="city foto"/>} />
                    <Route path="/contact" element={<img src={img3} alt="city foto"/>} />
                    <Route path="/admin" element={<img src={img3} alt="city foto"/>} />
                    <Route path="*" element={<img src={img1} alt="city foto"/>} />
			    </Routes> */}
				
                {/* A tak będzie wyglądało losowanie obrazka po kliknięciu dowolnej sekcji: */}
                {/* Przy czym opieramy się na state oraz funkcji w App.js */}
				<img src={img} alt="header" />
			</>
		);
}

export default Header;
