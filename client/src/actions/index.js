import VillageAPI from '../components/VillageAPI';

function getUsersSuccess(users) {
  return {type: 'FETCH_USERS', users: users};
}

const fetchUsers = () => {
  return function(dispatch) {
    return VillageAPI.getUsers()
      .then(users => {
      dispatch(getUsersSuccess(users))
    })
  }
}


export {
  getUsersSuccess,
  fetchUsers
}