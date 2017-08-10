import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/index';
import * as arrayActions from '../actions/arrayMutater';


class RecycleGame extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  seconds: 10,
		  done: false,
		  count: 0
		};

		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount(){
		this.props.actions.fetchRItems('/api/ingredients');
	}


	handleClick = event => {}


	render(){
		console.log("game pieces")
		console.log(this.props.games)
		var renderGames = this.props.games.map((gamePiece, index) => {
			return(
			<div key={index} onClick={this.handleClick} style={{display: 'inline-block', padding: 1}}>
				<img data-key={index} src={gamePiece.picture} alt={gamePiece.name} style={{width: 50, height: 50}}/>
			</div>);
		});

		return (
			<div style={{width: 835, height: 670, backgroundColor: 'powderblue'}} >
				{renderGames}
			</div>
		);
	};
}

function mapStateToProps(state) {
	return { games: state.games};
}

function mapDispatchToProps(dispatch) {
	return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(RecycleGame);
