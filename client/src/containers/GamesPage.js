
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/index.js';


class UsersPage extends Component {
	componentDidMount(){
		this.props.actions.fetchUsers('/api/users');
	}
	render(){
	  const {match, users} = this.props;

	  return(
		<div>
			yay! games! finally!
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
