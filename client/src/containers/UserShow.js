import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BoxesList from '../components/BoxesList';
import * as actions from '../actions/index.js';

class UserShow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentClick: -1
		};

		this.handleClickCallback = this.handleClickCallback.bind(this);
	}

	componentWillMount(){
		this.props.actions.fetchBoxes(`/api${this.props.match.url}`);
	}

	componentDidUpdate(prevProps){
		if (this.props.user !== prevProps.user) {
			this.props.actions.fetchBoxes(`/api${this.props.match.url}`);
		}
	}

	handleClickCallback(e){
		let t = e.target;
		this.setState({currentClick: t.getAttribute('data-key')});
	}


	handleActionCallback = event => {
		let oldInfo = this.props.user;
		let updatedInfo = { happiness: oldInfo.happiness + 5 };
		let url = `/api${this.props.match.url}`;
		this.props.actions.updateUser(url, updatedInfo);
	}

	render(){
		const {boxes, user} = this.props;
		return (
			<div>
			<h1>Welcome {user.name}<strong style={{color: "purple"}}> &hearts; {user.happiness} &#128465; {user.pollution}</strong></h1>
			<BoxesList boxes={boxes} handleChange={this.handleClickCallback.bind(this)} 
				handleReduce={this.handleActionCallback.bind(this)} currentClick={this.state.currentClick}/>
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