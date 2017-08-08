import React from 'react';
import { Link } from 'react-router-dom';

const UsersList = ({ users }) => {
	const renderUsers = users.map(user =>
		<tr>
			<td>
				<Link style={{ marginRight: '12px' }}
			 	key={user.id}
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