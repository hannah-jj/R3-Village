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

//add User, API will return all users info
const updateUser = (url, info) => {
  return function(dispatch) {
    return VillageAPI.updateInfo(url, info)
      .then(users => {
      dispatch(success('FETCH_USER', users))
    })
  }
}

//update User
const addUser = (url, name) => {
  return function(dispatch) {
    return VillageAPI.addInfo(url, name)
      .then(users => {
      dispatch(success('ADD_USER', users))
    })
  }
}

//FETCH_MATCH_ITEMS for Matching Game
const fetchItems = (url) => {
  return function(dispatch) {
    return VillageAPI.getInfo(url)
      .then(items => {
      dispatch(success('FETCH_MATCH_ITEMS', items))
    })
  }
}

//FETCH_RECYCLE_ITEMS for RECYCLE Game
const fetchRItems = (url) => {
  return function(dispatch) {
    return VillageAPI.getInfo(url)
      .then(items => {
      dispatch(success('FETCH_RECYCLE_ITEMS', items))
    })
  }
}


export {
  fetchUsers,
  fetchBoxes,
  addUser,
  updateUser,
  fetchItems,
  fetchRItems
}