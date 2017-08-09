import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import UsersPage from '../containers/UsersPage';
import UsersNew from '../containers/UsersNew';
import GamesPage from '../containers/GamesPage';

const App = (props) => 
	<Router>
		<div>
	      <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
	            <NavLink style={{ marginRight: '10px' }} to="/"><img src="favicon.ico" alt="Home" /></NavLink>
        		<NavLink style={{ marginRight: '10px' }} to="/users">See All The Villagers!</NavLink>
        		<NavLink style={{ marginRight: '10px' }} to="/users/new">Add A Villager</NavLink>
      		</div>
			<Switch>
				<Route exact path='/' component={UsersNew} />
				<Route exact path='/users/new' component={UsersNew} />
				<Route path="/users" component={UsersPage} />
				<Route path="/games" component={GamesPage} />
			</Switch>
		</div>
	</Router>

export default App;
