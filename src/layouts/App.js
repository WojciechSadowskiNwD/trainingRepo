import "../styles/App.css";
import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';


class App extends Component {
	state = {
		index: 1,
	}
	
	handleClick = () => {
		// losuje liczbę od 0 do 2 pod zdjęcie w header
		this.setState({
			index: Math.floor(Math.random() * 3)
		})
	}


	render() {
		return (
			<Router>
				<div className="app">
					<header>{<Header index={this.state.index}/>}</header>
					<main>
						<aside>{<Navigation click={this.handleClick}/>}</aside>
						<section className="page">
							{<Page/>}
						</section>
					</main>
					<footer>
						{<Footer/>}
					</footer>
				</div>
			</Router>
		);
	}
}

export default App;
