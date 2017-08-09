import React from 'react';

const BoxesList = ({ boxes }) => {
	console.log(boxes);
	const renderBoxes = boxes.map(box =>
		<tr><td>{box.name}</td></tr>		
	);

	return (
		<div>
			<table>
				<tbody>{renderBoxes}</tbody>
			</table>
		</div>
	);
};

export default BoxesList;