import {ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART} from './constants';

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [action.data, ...data];
      case REMOVE_FROM_CART:
        data.length = data.length ? data.length-1 : 0
      return [...data];
      case EMPTY_CART:
      return [];
    default:
        return data
  }
};
