import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import BoxesList from '../components/BoxesList'
import * as actions from '../actions/index';

class UserShow extends Component {
	componentDidMount(){
		console.log("here")
		this.props.actions.fetchBoxes(`/api/${this.props.match.url}`);
	}

	render(){
		const {boxes, user} = this.props;
		// console.log(`props is${this.props}`);
		// console.log(`boxes is ${boxes}`);
		return (
			<div>
				<h2> Hi {user.name} Welcome to your room </h2>
			</div>
			);
	}
}

function mapStateToProps(state, ownProps) {
  const user = state.users.find(user => user.id == ownProps.match.params.userId);
  if(user) {
  	return {boxes: state.boxes, user: user};
  } 
  else {
  	return { user: {} };
  }
};

function mapDispatchToProps(dispatch) {
	return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
