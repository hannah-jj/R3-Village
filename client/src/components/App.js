import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch, Link} from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import UsersPage from '../containers/UsersPage';
import UsersNew from '../containers/UsersNew';
import MatchGame from '../containers/MatchGame';
import RecycleGame from '../containers/RecycleGame';
import LearnGame from '../containers/LearnGame';
import GamesPage from './GamesPage';
import TrashMsg from './Trash';

const App = (props) => 
	<Router>
		<div>
	    <Navbar>
	            	<Navbar.Header>
	            		<Navbar.Brand><a href='/'>Home</a></Navbar.Brand>
	            		<Navbar.Brand><a href='/users'>Villagers</a></Navbar.Brand>
	            		<Navbar.Brand><a href='/users/new'>Join Village</a></Navbar.Brand>
	            	<Navbar.Toggle />
	            	</Navbar.Header>
        		</Navbar>
      		
			<Switch>
				<Route exact path='/' component={UsersNew} />
				<Route exact path='/users/new' component={UsersNew} />
				<Route path="/users" component={UsersPage} />
				<Route path='/matchGame' component={MatchGame} />
				<Route path='/recycleGame' component={RecycleGame} />
				<Route path='/learnGame' component={LearnGame} />
				<Route path='/Games' component={GamesPage} />
				<Route path='/Trash' component={TrashMsg} />
			</Switch>
		</div>
	</Router>

export default App;
