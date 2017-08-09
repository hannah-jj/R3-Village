import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UserShow from '../containers/UserShow';
import { Link } from 'react-router-dom';

const UsersList = ({ users }) => {
	const renderUsers = users.map(user =>
		<tr key={user.id}>
			<td>
				<Link style={{ marginRight: '12px' }}
			 	to={`/users/${user.id}`}>{user.name}</Link>
			</td>
			<td>{user.happiness}</td>
			<td>{user.pollution}</td>
		</tr>
	);

	return (
		<div>
			<table>
				<thead><tr><th>Villager Name</th><th style={{color: "purple"}}>&hearts;</th><th>&#128465;</th></tr></thead>
				<tbody>{renderUsers}</tbody>
			</table>
		</div>
	);
};

export default UsersList;