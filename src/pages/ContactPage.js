import React, { Component, useState } from "react";
import '../styles/ContactPage.css';


class ContactPage extends Component {

    state = {
        value: '',
        isEmpty: true,
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            value: '',
            isEmpty: true,
        })
    }

    handleChange = (e) => {
        if(e.target.value > 1){

            this.setState({
                value: e.target.value,
                isEmpty: false
            })
        }else {
            this.setState({
                value: e.target.value,
                isEmpty: true
            })
        }

    }

	render() {
		return (
            <div className='contact'>
                <form onSubmit={this.handleSubmit}>
                    <h3>Napisz do nas</h3>
                    <textarea value={this.state.value} onChange={this.handleChange} placeholder="wpisz wiadomość..."></textarea>
                    <button>Wyślij</button>
                </form>
            </div>
        )
	}
}

export default ContactPage;
