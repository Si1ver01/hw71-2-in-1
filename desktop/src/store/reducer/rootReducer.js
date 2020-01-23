import {
  ADD_DISH, COMPLITE_ORDER,
  DELETE_DISH,
  EDIT_DISH,
  GET_DISHES,
  GET_ORDERS
} from "../action/types";

const initialState = {
  menu: [],
  orders: [],
  loading: false,
  error: null
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DISHES:
      return { ...state, menu: action.payload, loading: false };
    case ADD_DISH:
      return {
        ...state,
        menu: [...state.menu, action.payload],
        loading: false
      };
    case EDIT_DISH:
      return {
        ...state,
        menu: [...state.menu].map(elem =>
          elem.id === action.payload.id ? { ...action.payload } : elem
        ),
        loading: false
      };
    case DELETE_DISH:
      return {
        ...state,
        menu: [...state.menu].filter(elem => elem.id !== action.payload)
      };
    case GET_ORDERS: {
      return {
        ...state,
        orders: action.payload,
        loading: false
      };
    }
    case COMPLITE_ORDER : {
      return {
        ...state,
        orders: [...state.orders].filter(el => el.id !== action.payload)
      }
    }
    default:
      return state;
  }
}
