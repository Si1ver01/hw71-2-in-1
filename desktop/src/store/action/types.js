export const GET_DISHES = "GET_DISHES";
export const ADD_DISH = "ADD_DISH";
export const EDIT_DISH = "EDIT_DISH";
export const DELETE_DISH = "DELETE_DISH";

export const GET_ORDERS = "GET_ORDERS";
export const COMPLITE_ORDER = "COMPLITE_ORDER";

export const getDishes = response => ({ type: GET_DISHES, payload: response });
export const addDish = dish => ({ type: ADD_DISH, payload: dish });
export const editDish = dish => ({ type: EDIT_DISH, payload: dish });
export const deleteDish = id => ({ type: DELETE_DISH, payload: id });

export const getOrders = response => ({ type: GET_ORDERS, payload: response });
export const compliteOrder = id => ({ type: COMPLITE_ORDER, payload: id });
