import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const BoxesList = ({handleChange, boxes, currentClick, handleAction, handleNewToy}) => {

	var renderBoxes = boxes.map((box, index) => {
		if (currentClick == index) {
			if (box.name == 'default'){
				return <div key={index} style={{width: 200}}className='gameBlock'>					
					<Button onClick={handleNewToy} >Add a Toy</Button>
					<Button ><Link to={'/learnGame'} onClick={handleAction}>Play</Link></Button>
	          		</div>
			} else {
				return <div key={index} style={{width: 200, backgroundColor: 'powderblue'}} className='gameBlock'>
						<p> reused: {box.reuse} times </p>					
						<Button><Link to={'/matchGame'} onClick={handleAction}  data-key={box.box_id}>Reuse</Link></Button>
		          		<Button><Link to={'/recycleGame'} onClick={handleAction}  data-key={box.box_id}>Recycle</Link></Button>
		          		<Button><Link to={'/Trash'} onClick={handleAction} data-key={box.box_id}>&#128465;</Link></Button>
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