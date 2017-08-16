
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import UsersList from '../components/UsersList';
import UserShow from './UserShow';
import UsersNew from './UsersNew';
import * as actions from '../actions/index.js';


class UsersPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentHover: -1,
			likes: []
		};
	}
	componentDidMount(){
		this.props.actions.fetchUsers('/api/users').then(() => {
				let userNum = this.props.users.length;
			console.log(`usernum is ${userNum}`)
			let i = 0;
			let newLikes = [];
			for (i = 0; i < userNum; i ++) {
				newLikes.push(0);
			}
			this.setState({likes: newLikes});
		});
	
	}

	mouseOverCallBack(e){
		let t = e.target;
		this.setState({currentHover: t.getAttribute('data-key')});
	}

	likesButtonCallback(e){
		let t = e.target;
		let likeIndex = t.getAttribute('data-key');
		let newLikes = [...this.state.likes];
		newLikes[likeIndex] = newLikes[likeIndex] + 1;

		this.setState({likes: newLikes});
	}
	render(){
	  const {match, users} = this.props;

	  return(
		<div>
			
			<Switch>
				<Route path={`${match.url}/new`} component={UsersNew} />
				<Route path={`${match.url}/:userId`} component={UserShow} />
				<Route exact path={match.url} render={() => (<UsersList handleLike={this.likesButtonCallback.bind(this)} likes={this.state.likes} users={users} handleHover={this.mouseOverCallBack.bind(this)} currentHover={this.state.currentHover} />)}/>
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
