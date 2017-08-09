export default (state = [], action) => {
  switch (action.type) {
  	case 'FETCH_USERS':
  	  return action.users;  
  	case 'ADD_USER':
  	  return action.users; 
    default:
      return state;
  }
};