export default (state = [], action) => {
  switch (action.type) {
  	case 'FETCH_USERS':
  	  return action.payload;  
  	case 'ADD_USER':
  	  return [...state, action.payload]
  	  // return action.payload; 
    default:
      return state;
  }
};