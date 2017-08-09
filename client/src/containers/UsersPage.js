
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import UsersList from '../components/UsersList'
import UserShow from './UserShow'
import UsersNew from './UsersNew'
import * as actions from '../actions/index.js'


class UsersPage extends Component {
	componentDidMount(){
		this.props.actions.fetchUsers('/api/users')
	}
	render(){
	  const {match, users} = this.props;

	  return(
		<div>
			<UsersList users={users} />
			<Switch>
				<Route path={`${match.url}/new`} component={UsersNew} />
				<Route path={`${match.url}/:userId`} component={UserShow} />
				<Route exact path={match.url} render={() => (<h3> Please select a villager from the list.</h3>)}/>
			</Switch>
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