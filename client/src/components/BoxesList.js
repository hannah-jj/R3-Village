import React from 'react';

const BoxesList = ({ boxes }) => {

	const renderBoxes = boxes.map(box => 
			<td key={box.id}><img src={box.item_url} alt={box.item_name} /></td>
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