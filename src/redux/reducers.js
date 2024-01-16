import { SET_USERS } from './actions';

const initialState = {
  users: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
