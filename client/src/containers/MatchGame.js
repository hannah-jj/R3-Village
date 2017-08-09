
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/index';


class MatchGame extends Component {
	constructor(props) {
		super(props);
		this.state = {
			flipped: [false, false, false, false, false,false, false, false,false, false, false, false],
			firstClick: {status: false, card: "", index: 10}
		};

		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount(){
		this.props.actions.fetchItems('/api/items');
	}

	componentDidUpdate(prevProps, prevState) {

	}

	updateFlippedArray = (array, index, new_item) => {
		var new_array = array;
		new_array[index] = new_item;
		this.setState({flipped: new_array});
	}

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
		console.log("before")
		console.log(this.state);
		var t = event.target;
		var clicked = t.getAttribute('data-key');
		var card_name = t.alt;

		if (this.state.flipped[clicked] === false ) { // if not already flipped go into action
			console.log("flip over");
			this.updateFlippedArray(this.state.flipped, clicked, true);

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
					this.resetFirstClick();
					this.updateFlippedArray(this.state.flipped, this.state.firstClick.index, false);
					this.updateFlippedArray(this.state.flipped, clicked, false);

				}
			}
		}// end of main if

		console.log("after")
		console.log(this.state);
	}



	render(){
		if (this.state.flipped.includes(false)) {
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
			var renderGames = <div><h1>"YOU WON!"</h1><img style={{width: 820, display: 'inline-block'}} src='https://media.giphy.com/media/wl6l9trsOaktq/giphy.gif' alt='firework' /></div>;
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
