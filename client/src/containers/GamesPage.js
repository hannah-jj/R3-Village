
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import MatchGame from './MatchGame';
import RecycleGame from './RecycleGame';


class GamesPage extends Component {

	render(){

	  return(
		<Router>
			<Switch>
				<Route path='/matchGame' component={MatchGame} />
				<Route path='/recycleGame' component={RecycleGame} />
				<Route exact path='/Games' render = {() => 
					<div>
						<Link style={{ marginRight: '12px' }} to={'/matchGame'}>Reuse The Toy</Link>
	          			<Link style={{ marginRight: '12px' }} to={'/recycleGame'}>Recycle The Toy</Link>
	          		</div>
	      		}/>
			</Switch>
		</Router>
	   )
	}
}

export default GamesPage;
