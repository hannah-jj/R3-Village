
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/index';


class RecycleGame extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};

		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount(){
		// this.props.actions.fetchItems('/api/items');
	}


	handleClick = event => {}


	render(){
		
		return (
			<div>
				Recycle Game!!!
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { games: state.games};
}

function mapDispatchToProps(dispatch) {
	return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(RecycleGame);
