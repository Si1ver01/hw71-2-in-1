import React from "react";
import { Text, View, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import OrderItem from "../../components/OrderItem/OrderItem";
import styles from "./styleCart";
import { clearCart } from "../../store/action/type";
import { requestSendOrder } from "../../store/action/actions";

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const menu = useSelector(state => state.menu);
  const isComplite = useSelector(state => state.compliteOrder);
  const dispatch = useDispatch();
  let filterCart = null;

  if (isComplite) {
    return (
      <Text
        style={{
          color: "#8bc34a",
          textAlign: "center",
          fontSize: 22,
          marginTop: 20
        }}
      >
        Order complite =)
      </Text>
    );
  }

  if (!menu.length || !cart.length) {
    return <Text>Сначала добавте блюда в корзину</Text>;
  } else {
    filterCart = [...new Set(cart)];
  }

  const total = () => {
    return (
      cart.reduce((sum, current) => {
        const index = menu.findIndex(el => el.id === current);
        return sum + Number(menu[index].price);
      }, 0) + 150
    );
  };

  return (
    <View style={{ marginTop: 5 , width : "100%" , paddingLeft : 5}}>
      {filterCart.map(elem => (
        <OrderItem id={elem} menu={menu} list={cart} key={elem} />
      ))}
      <View style={styles.textWrap}>
        <Text>Delivery : 150 kgs</Text>
        <Text>Total : {total()} kgs </Text>
      </View>
      <View style={styles.btnWrap}>
        <Button
          title="Cancel"
          color="#ef5350"
          onPress={() => dispatch(clearCart())}
        />
      </View>
      <View style={styles.btnWrap}>
        <Button
          title="Order"
          color="#8bc34a"
          onPress={() => dispatch(requestSendOrder(cart))}
        />
      </View>
    </View>
  );
};

export default Cart;
