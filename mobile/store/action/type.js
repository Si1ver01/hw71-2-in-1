export const GET_MENU = "GET_MENU";
export const ADD_DISH = "ADD_DISH";
export const DEL_DISH = "DEL_DISH";
export const CLEAR_CART = "CLEAR_CART";
export const SEND_ORDER = "SEND_ORDER";
export const COMPLITE_ORDER = "COMPLITE_ORDER";

export const getMenu = response => ({ type: GET_MENU, payload: response });
export const addDish = id => ({ type: ADD_DISH, payload: id });
export const delDish = id => ({ type: DEL_DISH, payload: id });
export const clearCart = () => ({ type: CLEAR_CART });
export const sendOrder = order => ({ type: SEND_ORDER, payload: order });
export const compliteOrder = () => ({ type: COMPLITE_ORDER });
