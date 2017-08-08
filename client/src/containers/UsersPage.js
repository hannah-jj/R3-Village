
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchUsers } from '../actions';

import UsersList from '../components/UsersList'

class UsersPage extends Component {

	componentDidMount(){
		// this.props.fetchUsers();
	}
	render(){
		const users = [{name: "hannah", id: 1, happiness: 1, pollution: 2}, {name: "patrick", id: 2, happiness: 2, pollution: 12}];
	  return(
		<div>
			<UsersList users={users} />
		</div>
	   )
	}
}

const mapStateToProps = state => {
	return {
		users: state.users
	};
}

export default connect(mapStateToProps, { fetchUsers })(UsersPage);