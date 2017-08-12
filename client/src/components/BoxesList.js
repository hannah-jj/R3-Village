import React from 'react';
import { Link } from 'react-router-dom';

const BoxesList = ({handleChange, boxes, currentClick, handleAction}) => {

	var renderBoxes = boxes.map((box, index) => {
		if (currentClick == index) {
			if (box.name == 'default'){
				return <div key={index} style={{width: 200, backgroundColor: 'powderblue'}}className='gameBlock'>					
					Buy New Toy or <Link style={{ marginRight: '12px' }} to={'/learnGame'} onClick={handleAction}>Learn Something New</Link>
	          		</div>
			} else {
				return <div key={index} style={{width: 200, backgroundColor: 'powderblue'}}className='gameBlock'>					
						<Link style={{ marginRight: '12px' }} to={'/matchGame'} onClick={handleAction}>Reuse</Link>
		          		<Link style={{ marginRight: '12px' }} to={'/recycleGame'} onClick={handleAction}>Recycle</Link>
		          		<Link style={{ marginRight: '12px' }} to={'/Trash'} onClick={handleAction}>Trash</Link>
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