import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestDishes, requestOrders } from "../../store/action/actions";
import OrdersItem from "../../components/OrdersList/OrdersItem";

const Orders = () => {
  const orders = useSelector(state => state.orders);
  const menu = useSelector(state => state.menu);
  const dispatch = useDispatch();
  const isLoadingComplite = !!orders.length && !!menu.length;
  console.log("orders", orders);
  console.log("menu", menu);

  useEffect(() => {
    if (!orders.length) {
      dispatch(requestOrders());
    }
  }, [orders, dispatch]);

  useEffect(() => {
    if (!menu.length) {
      dispatch(requestDishes());
    }
  }, [menu, dispatch]);

  if (!isLoadingComplite) {
    return <p className="text-primary text-center">Loading ... </p>;
  }

  return (
    <div className="container">
      <h3>Orders</h3>
      {orders.map(elem => (
        <OrdersItem menu={menu} order={elem} key={elem.id} />
      ))}
    </div>
  );
};

export default Orders;
