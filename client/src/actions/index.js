import VillageAPI from './VillageAPI';

//success msgs and payloads for reducer
function success(msg, payload) {
  return {type: msg, payload: payload};
}

//fetch users from users index api
const fetchUsers = (url) => {
  return function(dispatch) {
    return VillageAPI.getInfo(url)
      .then(users => {
      dispatch(success('FETCH_USERS', users))
    })
  }
}

//fetch all the active boxes from an user
const fetchBoxes = (url) => {
  return function(dispatch) {
    return VillageAPI.getInfo(url)
      .then(user => {
      dispatch(success('FETCH_BOXES', user.active_boxes))
    })
  }
}

//add User
const addUser = (url, name) => {
  return function(dispatch) {
    return VillageAPI.addUser(url, name)
      .then(users => {
      dispatch(success('ADD_USER', users))
    })
  }
}

//FETCH_MATCH_ITEMS for Matching Game




export {
  fetchUsers,
  fetchBoxes,
  addUser
}