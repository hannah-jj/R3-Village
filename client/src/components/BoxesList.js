import React from 'react';
import { Link } from 'react-router-dom';

const BoxesList = ({handleChange, boxes, currentClick, handleAction}) => {

	var renderBoxes = boxes.map((box, index) => {
		if (currentClick == index) {
			if (box.name == 'default'){
				return <div key={index} style={{width: 200, backgroundColor: 'powderblue'}}className='gameBlock'>					
					Buy New Toy or <Link to={'/learnGame'} onClick={handleAction}>Learn Something New</Link>
	          		</div>
			} else {
				return <div key={index} style={{width: 200, backgroundColor: 'powderblue'}} className='gameBlock'>
						<p> reused: {box.reuse} times </p>					
						<Link to={'/matchGame'} onClick={handleAction}  data-key={box.box_id}>Reuse</Link>
		          		<Link to={'/recycleGame'} onClick={handleAction}  data-key={box.box_id}>Recycle</Link>
		          		<Link to={'/Trash'} onClick={handleAction} data-key={box.box_id}>Trash</Link>
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