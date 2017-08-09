import VillageAPI from '../components/VillageAPI';

function getUsersSuccess(users) {
  return {type: 'FETCH_USERS', users: users};
}

function getUserSuccess(boxes) {
  return {type: 'FETCH_BOXES', boxes: boxes};
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



export {
  fetchUsers,
  fetchBoxes
}