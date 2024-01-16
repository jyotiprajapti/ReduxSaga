export const FETCH_USERS = 'FETCH_USERS';
export const SET_USERS = 'SET_USERS';

export const fetchUsers = () => ({
  type: FETCH_USERS,
});

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users,
});
