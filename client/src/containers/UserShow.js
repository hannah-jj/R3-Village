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


	handleActionCallback = e => {
		let actionItem = e.target.getAttribute('href');
		//5 different possibilities /learnGame /matchGame /recycleGame /trash /addToy
		actionItem = actionItem.substr(1);

		//p for pollution h for happiness
		let scores = {
		 learnGame: {p: 0, h: 5}, //reduce
		 matchGame: {p: 0, h: 5}, //reuse
		 recycleGame: {p: 3, h: 3}, //recycle
		 addToy: {p: 3, h: 3},
		 Trash: {p: 5, h: 0}};

		let oldInfo = this.props.user;
		let updatedInfo = { happiness: oldInfo.happiness + scores[actionItem].h,
		 pollution: oldInfo.pollution + scores[actionItem].p};
		let url = `/api${this.props.match.url}`;
		this.props.actions.updateUser(url, updatedInfo);
	}

	render(){
		const {boxes, user} = this.props;
		return (
			<div>
			<h1>Welcome {user.name}<strong style={{color: "purple"}}> &hearts; {user.happiness} &#128465; {user.pollution}</strong></h1>
			<BoxesList boxes={boxes} handleChange={this.handleClickCallback.bind(this)} 
				handleAction={this.handleActionCallback.bind(this)} currentClick={this.state.currentClick}/>
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