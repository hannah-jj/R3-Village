import React from 'react';
import { Link } from 'react-router-dom';

const BoxesList = ({handleChange, boxes, currentClick}) => {

	var renderBoxes = boxes.map((box, index) => {
		console.log(`index is ${index} currentClick=${currentClick}`);
		if (currentClick == index) {
			if (box.name == 'default'){
				return <div key={index} style={{width: 200, backgroundColor: 'powderblue'}}className='gameBlock'>					
					Buy New Toy or Learn something new
	          		</div>
			} else {
				return <div key={index} style={{width: 200, backgroundColor: 'powderblue'}}className='gameBlock'>					
						<Link style={{ marginRight: '12px' }} to={'/matchGame'}>Reuse The Toy</Link>
		          		<Link style={{ marginRight: '12px' }} to={'/recycleGame'}>Recycle The Toy</Link>
		          		</div>
	         }
		} else {
			return <div key={index} className='gameBlock'> <img onClick={handleChange} src={box.picture} alt={box.name} data-key={index} /></div>
		}
	});

	return <div> {renderBoxes} </div>
};

BoxesList.defaultProps = {
  handleClickCallback: function() {}
};

export default BoxesList;