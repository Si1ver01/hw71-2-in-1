import React from "react";
import { useDispatch } from "react-redux";
import { requestCompliteOrder } from "../../store/action/actions";

const OrdersItem = ({ menu, order }) => {
  const keys = Object.keys(order);
  const COST_OF_DELIVERY = 150;
  const dispatch = useDispatch();

  const findParams = (id, type) => {
    const index = menu.findIndex(el => el.id === id);
    return menu[index][type];
  };
  const total =
    keys.reduce((sum, current) => {
      if (current !== "id") {
        return sum + order[current] * Number(findParams(current, "price"));
      } else {
        return sum;
      }
    }, 0) + COST_OF_DELIVERY;
  console.log(total);

  return (
    <div className="row border rounded p-2 align-items-center mb-2">
      <div className="col-4">
        <ul className="list-unstyled mb-0">
          {keys.map(elem => {
            if (elem !== "id") {
              return (
                <li className="border-bottom" key={elem}>
                  {order[elem]} x {findParams(elem, "name")}
                </li>
              );
            } else {
              return;
            }
          })}
          <li>Delivery</li>
        </ul>
      </div>
      <div className="col-4">
        <ul className="list-unstyled mb-0">
          {keys.map(elem => {
            if (elem !== "id") {
              return (
                <li className="border-bottom" key={elem}>
                  {findParams(elem, "price")} kgs
                </li>
              );
            } else {
              return;
            }
          })}
          <li>{COST_OF_DELIVERY} kgs</li>
        </ul>
      </div>
      <div className="col-4">
        <ul className="list-unstyled text-center mb-0">
          <li>Order total :</li>
          <li className="font-weight-bold">{total} kgs</li>
          <li>
            <button
              className="btn btn-outline-success mt-1"
              onClick={() => dispatch(requestCompliteOrder(order.id))}
            >
              Заказ выполнен
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OrdersItem;
