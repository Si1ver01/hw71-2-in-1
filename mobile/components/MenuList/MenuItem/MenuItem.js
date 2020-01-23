import React from "react";
import { View, Text, Image, Button } from "react-native";
import styles from "./styleMenuItem";
import { useDispatch } from "react-redux";
import { addDish } from "../../../store/action/type";

const MenuItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.item}>
      <View style={styles["image-wrap"]}>
        <Image style={styles.image} source={{ uri: item.img }} />
      </View>
      <View style={styles["title-wrap"]}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
      <View style={styles["price-wrap"]}>
        <Text style={styles.price}>{item.price} kgs</Text>
      </View>
      <View style={styles["btn-wrap"]}>
        <Button
          title="Add to cart"
          color="#f194ff"
          onPress={() => dispatch(addDish(item.id))}
        />
      </View>
    </View>
  );
};

export default MenuItem;
