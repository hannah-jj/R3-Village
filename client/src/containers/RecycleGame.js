import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/index';
import * as arrayActions from '../actions/arrayMutater';


class RecycleGame extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  count: 32,
		  firstClick: false,
		  currentGame: '',
		  hiddenPieces: []
		};

		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount(){
		this.props.actions.fetchRItems('/api/ingredients');
	}

	componentWillReceiveProps(nextProps) {
		if (this.state.firstClick === false ) {
			this.setState({currentGame : nextProps.games[0].name});
			console.log(this.state.currentGame);
		}
  		this.setState({games: nextProps.games});
  	}


	handleClick = event => {
		var t = event.target;
		var i = t.getAttribute('data-key');
		
		if (this.state.firstClick === false) {
			this.setState ({firstClick: true});
		}

		if (t.alt == this.state.currentGame) {
			var newHidden = this.state.hiddenPieces;
			newHidden.push(i);
			console.log(newHidden);
			this.setState({hiddenPieces: newHidden, count: this.state.count-1});
		}
	}


	render(){
		if (this.state.count > 0) {
			var games = this.props.games;
			var renderGames = games.map((gamePiece, index) => {
				return(
				<div key={index} style={{display: 'inline-block', padding: 1}} className={this.state.hiddenPieces.includes(index.toString())? 'hidden' : ''}>
					<img data-key={index} src={gamePiece.picture}  onClick={this.handleClick} 
					alt={gamePiece.name} style={{width: 50, height: 50}}
					className={this.state.hiddenPieces.includes(index.toString())? 'hidden' : ''}
					/>
				</div>);
			});

			if (games.length > 0) {
				var currentGame = <div style={{display: 'inline-block'}}><img src={games[0].picture} alt={games[0].name} style={{width: 50, height: 50}}/> ? </div>
			} else {
				var currentGame ="";
			}
		} else {
			var renderGames = <div><h1>"Thank you for recycling!!!"</h1><img style={{width: 820, display: 'inline-block'}} src='won.jpg' alt='firework' /></div>;	
		}

		return (
		  <div>can you recycle all the {currentGame} count <strong>{this.state.count}</strong>
			<div style={{width: 835, height: 670, backgroundColor: 'powderblue'}} >
				{renderGames}
			</div>
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


