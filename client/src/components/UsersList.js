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
				<tr><th>Villager Name</th><th>Happiness</th><th>Pollution</th></tr>
			{renderUsers}
			</table>
		</div>
	);
};

export default UsersList;