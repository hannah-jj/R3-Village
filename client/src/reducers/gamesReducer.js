export default (state = [], action) => {
  switch (action.type) {
  	case 'FETCH_MATCH_ITEMS':
  	  return action.gamepieces;  
  	case 'ADD_USER':
  	  return action.games; 
    default:
      return state;
  }
};