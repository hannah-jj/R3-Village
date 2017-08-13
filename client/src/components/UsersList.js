import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

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
			<table >
				<thead><tr><th>Villagers</th><th style={{color: "purple"}}>&hearts;</th><th>&#128465;</th></tr></thead>
				<tbody style={{background: "aqua"}}>{renderUsers}</tbody>
			</table>
		</div>
	);
};

export default UsersList;