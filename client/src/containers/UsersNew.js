import React, { Component } from 'react';
// import { connect } from 'react-redux';

class UsersNew extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: ''
		};
	}

	handleOnSubmit = event => {
		event.preventDefault();
		console.log("i was clicked yay");
	}

	handleOnChange = event => {
		this.setState({
			name: event.target.value
		})
	}

	render() {
		return (
			<div>
				<h1>Welcome to R3 Village</h1>
				<h2>Reduce, Recycle and Reuse with LOVE</h2>
				<h3>what's Your Name?</h3>
				<form onSubmit={this.handleOnSubmit}>
					<input type="text"
						placeholder="Name"
						name="name"
						value={this.state.name}
						onChange={this.handleOnChange} />
					<input
						type="submit"
						value="Join R3 Village" />
				</form>
			</div>
		);
	}
};

export default UsersNew;