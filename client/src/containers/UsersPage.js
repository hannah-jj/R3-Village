
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import UsersList from '../components/UsersList'
import UserShow from './UserShow'
import * as actions from '../actions/index.js'


class UsersPage extends Component {
	componentDidMount(){
		this.props.actions.fetchUsers()
	}
	render(){
	  return(
		<div>
			<UsersList users={this.props.users} />
		</div>
	   )
	}
}

function mapStateToProps(state) {
	return { users: state.users };
}

function mapDispatchToProps(dispatch) {
	return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);