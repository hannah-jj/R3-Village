import VillageAPI from './VillageAPI';

function getUsersSuccess(users) {
  return {type: 'FETCH_USERS', users: users};
}

function getUserSuccess(boxes) {
  return {type: 'FETCH_BOXES', boxes: boxes};
}

function addUserSuccess(users) {
  return {type: 'ADD_USER', users: users};
}

const fetchUsers = (url) => {
  return function(dispatch) {
    return VillageAPI.getInfo(url)
      .then(users => {
      dispatch(getUsersSuccess(users))
    })
  }
}

const fetchBoxes = (url) => {
  return function(dispatch) {
    return VillageAPI.getInfo(url)
      .then(user => {
      dispatch(getUserSuccess(user.active_boxes))
    })
  }
}

const addUser = (url, name) => {
  return function(dispatch) {
    return VillageAPI.addUser(url, name)
      .then(users => {
      dispatch(addUserSuccess(users))
    })
  }
}



export {
  fetchUsers,
  fetchBoxes,
  addUser
}