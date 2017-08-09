export default (state = [], action) => {
  switch (action.type) {
  	case 'FETCH_MATCH_ITEMS':

  	  return doubleNShuffle(action.payload);  
    default:
      return state;
  }
};

function doubleNShuffle (array){
	return shuffle(array.concat(array));
}

function shuffle (array) {

    for (var i = array.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = array[randomIndex]; 
         
        array[randomIndex] = array[i]; 
        array[i] = itemAtIndex;
    }
    return array;
}