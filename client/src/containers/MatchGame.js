
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/index';


class MatchGame extends Component {
	constructor(props) {
		super(props);
		this.state = {
			flipped: [false, false, false, false, false,false, false, false,false, false, false, false],
			firstClick: {status: false, card: "", index: 10},
			last_round: [-1, -1]
		};

		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount(){
		this.props.actions.fetchItems('/api/items');
	}

	componentDidUpdate(prevProps, prevState) {

	}

	updateFlippedArray = (index1, index2 = -1) => {
		var new_array = this.state.flipped;
		if (index1 > -1) {
			new_array[index1] = !new_array[index1];
		}
		if (index2 > -1) {
			new_array[index2] = !new_array[index2];
		}
		this.setState({flipped: new_array});
	}

	delayFlip = (index1, index2) => { this.updateFlippedArray(index1, index2);}

	resetFirstClick = () => {
		console.log("resetting first Click");
		this.setState({firstClick: {status: false, card: "", index: 10}}, function () {
    		console.log("resetFirstClick"); console.log(this.state)});
	}

	setFirstClick = (card_name, index) => {
		this.setState({firstClick: {status: true, card: card_name, index: index}}, function () {
    		console.log("setFirstclick"); console.log(this.state)});
	}

	handleClick = event => {
		this.updateFlippedArray(this.state.last_round[0], this.state.last_round[1]);
		//this line delays the flipping of unmatched cards from last round
		this.setState({last_round: [-1, -1]});
		//reset the state for unmatched cards from last round
		
		var t = event.target;
		var clicked = t.getAttribute('data-key');
		var card_name = t.alt;

		if (this.state.flipped[clicked] === false ) { // if not already flipped go into action
			console.log("flip over");
			this.updateFlippedArray(clicked);

			if (this.state.firstClick.status === false){ //first click
				this.setFirstClick(card_name, clicked);
			} 
			else { //if firstClick already happened
				if (this.state.firstClick.card === card_name){
					// do some animation later
					console.log("matched!")
					this.resetFirstClick();
				}
				else {
					console.log("no match should cover them")
					console.log(`1st click is ${this.state.firstClick.index} 2nd is ${clicked}`)
					let index1 = this.state.firstClick.index;
					this.resetFirstClick();
					this.setState({last_round: [index1, clicked]});

				}
			}
		}// end of main if

		console.log("after")
		console.log(this.state);
	}


	win = () => {return !this.state.flipped.includes(false)}

	render(){
		if (!this.win()) {
			var renderGames = this.props.games.map((gamePiece, index) => {
				if (this.state.flipped[index] === false) {
				return (<div key={index} style={{display: 'inline-block', padding: 2}}>
					<img data-key={index} onClick={this.handleClick} src='/defaults/default.png' alt={gamePiece.name} />
				</div>)
			} else {
				return (<div key={index} onClick={this.handleClick} style={{display: 'inline-block', padding: 2}}>
					<img data-key={index} src={gamePiece.picture} alt={gamePiece.name} />
				</div>)
			}

			}
			);
		}
		else {
			// var renderGames = <div><h1>"YOU WON!"</h1><img style={{width: 820, display: 'inline-block'}} src='https://media.giphy.com/media/wl6l9trsOaktq/giphy.gif' alt='firework' /></div>;
		var renderGames = <div><h1>"YOU WON!"</h1><img style={{width: 820, display: 'inline-block'}} src='won.jpg' alt='firework' /></div>;	
		}

		return (
			<div style={{width: 820, height: 620, backgroundColor: 'powderblue'}} >
				{renderGames}
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
