import {
  ADD_DISH,
  CLEAR_CART,
  COMPLITE_ORDER,
  compliteOrder,
  DEL_DISH,
  GET_MENU
} from "../action/type";

const initialState = {
  menu: [],
  cart: [],
  compliteOrder: false,
  loading: [],
  error: []
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MENU:
      return { ...state, menu: action.payload };
    case ADD_DISH:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        compliteOrder: false
      };
    case DEL_DISH:
      return {
        ...state,
        cart: [...state.cart].filter(el => el !== action.payload)
      };
    case CLEAR_CART:
      return { ...state, cart: [] };
    case COMPLITE_ORDER:
      return { ...state, cart: [], compliteOrder: true };
    default:
      return state;
  }
}
