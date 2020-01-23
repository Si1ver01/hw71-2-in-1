import {addDish, compliteOrder, deleteDish, editDish, getDishes, getOrders} from "./types";

export const requestDishes = () => {
  return async dispatch => {
    const response = await fetch(
      "https://ddanshin-af25f.firebaseio.com/menu.json"
    );
    const data = await response.json();
    const formatData = Object.keys(data).map(key => ({
      ...data[key],
      id: key
    }));
    dispatch(getDishes(formatData));
  };
};

export const addRequestDish = dish => {
  return async dispatch => {
    try {
      const response = await fetch(
        "https://ddanshin-af25f.firebaseio.com/menu.json",
        {
          method: "POST",
          body: JSON.stringify(dish)
        }
      );
      const id = await response.json();
      dispatch(addDish({ ...dish, id: id.name }));
    } catch (e) {
      console.log(e);
    }
  };
};

export const editRequestDish = dish => {
  return async dispatch => {
    try {
      await fetch(
        `https://ddanshin-af25f.firebaseio.com/menu/${dish.id}.json`,
        {
          method: "PUT",
          body: JSON.stringify(dish)
        }
      );
      dispatch(editDish(dish));
    } catch (e) {
      console.log(e);
    }
  };
};

export const deleteRequest = id => {
  return async dispatch => {
    try {
      await fetch(`https://ddanshin-af25f.firebaseio.com/menu/${id}.json`, {
        method: "DELETE"
      });
      dispatch(deleteDish(id));
    } catch (e) {
      console.log(e);
    }
  };
};

export const requestOrders = () => {
  return async dispatch => {
    try {
      const response = await fetch(
        "https://ddanshin-af25f.firebaseio.com/orders.json"
      );
      const data = await response.json();
      const formatData = Object.keys(data).map(key => ({
        ...data[key],
        id: key
      }));
      dispatch(getOrders(formatData));
    } catch (e) {
      console.log(e);
    }
  };
};

export const requestCompliteOrder = id => {
  return async dispatch => {
    try {
      await fetch(`https://ddanshin-af25f.firebaseio.com/orders/${id}.json`, {
        method: "DELETE"
      });
      dispatch(compliteOrder(id));
    } catch (e) {
      console.log(e);
    }
  };
};
