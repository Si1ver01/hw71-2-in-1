import React from "react";
import { View, Text , Button } from "react-native";
import styles from "./styleOrderItem";
import {addDish, delDish} from "../../store/action/type";
import {useDispatch} from "react-redux";

const OrderItem = ({ menu, id, list }) => {
  const dispatch = useDispatch();

  const findParams = (id, type) => {
    const index = menu.findIndex(el => el.id === id);
    return menu[index][type];
  };

  const quantity = list.filter(el => el === id).length;


  return (
    <View style={styles.orderItem}>
      <Text>{findParams(id, "name")}</Text>
      <Text>x {quantity}</Text>
      <Button
        title="Remove"
        color="#f194ff"
        onPress={() => dispatch(delDish(id))}
      />
    </View>
  );
};

export default OrderItem;
