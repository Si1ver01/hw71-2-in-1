import { compliteOrder, getMenu } from "./type";

export const requestMenu = () => {
  return async dispatch => {
    try {
      const response = await fetch(
        "https://ddanshin-af25f.firebaseio.com/menu.json"
      );
      const data = await response.json();
      const formatData = Object.keys(data).map(elem => ({
        ...data[elem],
        id: elem
      }));
      dispatch(getMenu(formatData));
    } catch (e) {
      console.log(e);
    }
  };
};

export const requestSendOrder = order => {
  return async dispatch => {
    const format = {};
    order.forEach(el => (format[el] > 0 ? format[el]++ : (format[el] = 1)));
    try {
      const response = await fetch(
        "https://ddanshin-af25f.firebaseio.com/orders.json",
        {
          method: "POST",
          body: JSON.stringify(format)
        }
      );
      await response.json();
      dispatch(compliteOrder());
    } catch (e) {
      console.log(e);
    }
  };
};
