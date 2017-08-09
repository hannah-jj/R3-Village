import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BoxesList from '../components/BoxesList';
import * as actions from '../actions/index.js';

class UserShow extends Component {
	componentDidMount(){
		this.props.actions.fetchBoxes(`/api/${this.props.match.url}`);
	}

	componentDidUpdate(prevProps){
		if (this.props.user !== prevProps.user) {
			this.props.actions.fetchBoxes(`/api/${this.props.match.url}`);
		}
	}




	render(){
		const {boxes, user} = this.props;
		return (
			<div>
			<h1>Welcome {user.name}</h1>
			<BoxesList boxes={boxes} />
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
  const user = state.users.find(user => user.id == ownProps.match.params.userId);
  if(user) {
  	return {user: user, boxes: state.boxes};
  } 
  else {
  	return { user: {} };
  }
};

function mapDispatchToProps(dispatch) {
	return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);

// <BoxesList boxes={boxes} />