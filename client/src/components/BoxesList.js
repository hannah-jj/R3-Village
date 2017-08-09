import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class BoxesList extends Component {

	handleClick = event => {
		if (event.target.alt !== "default"){
			console.log("this box is full");
		} else {
			console.log("this box is empty");
		}
	}


	render() {
		const renderBoxes = this.props.boxes.map((box, index) => 
			<td key={index} onClick={this.handleClick}><Link to={`/games`}><img src={box.item_url} alt={box.item_name} /></Link></td>
		);

		return (
			<div>
				<table>
					<tbody><tr>{renderBoxes}</tr></tbody>
				</table>
			</div>
		);
	}
};


export default BoxesList;