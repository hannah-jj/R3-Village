import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions/index';

class UsersNew extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			redirect: false
		};
	}

	handleOnSubmit = event => {
		event.preventDefault();
		let userName = this.state.name;
		userName = userName == '' ? "guest" : userName;
		this.props.actions.addUser('/api/users', {name: userName});
		this.setState({redirect: true});
	}

	handleOnChange = event => {
		this.setState({
			name: event.target.value
		})
	}

	render() {
		if (this.state.redirect === true ) {
			return (<div><p>New Villager Created<Link style={{ marginRight: '12px' }}
			 	to={`/users`}>home</Link></p></div>);
		}

		return (
			<div>
				
				<h1>Welcome to R3 Village</h1>
				<h2>Reduce, Recycle and Reuse with <strong style={{color: "purple"}}>&hearts;</strong></h2>
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

function mapDispatchToProps(dispatch) {
	return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(null, mapDispatchToProps) (UsersNew);