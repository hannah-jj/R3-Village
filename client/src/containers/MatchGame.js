
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/index';


class MatchGame extends Component {
	componentDidMount(){
		this.props.actions.fetchItems('/api/items');
	}
	render(){
		const renderGames = this.props.games.map((gamePiece, index) => 
			<td key={index} onClick={this.handleClick}>
				<img src={gamePiece.picture} alt={gamePiece.name} />
			</td>
		);

		return (
			<div>
				<table>
					<tbody><tr>{renderGames}</tr></tbody>
				</table>
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

export default connect(mapStateToProps, mapDispatchToProps)(MatchGame);
