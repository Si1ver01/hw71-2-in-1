import React from "react";
import navStyles from "./navStyles";
import { View, Text } from "react-native";
import { Link } from "react-router-native";
import { useSelector } from "react-redux";

const Nav = () => {
  const cart = useSelector(state => state.cart);
  return (
    <View style={navStyles.nav}>
      <Text style={navStyles.brand}>Пир Духа</Text>
      <View style={navStyles.navbar}>
        <Link to={`/`}>
          <Text style={navStyles["navbar-item"]}>Menu </Text>
        </Link>
        <Link to={`/cart`}>
          <Text style={navStyles["navbar-item"]}>Cart ({cart.length})</Text>
        </Link>
      </View>
    </View>
  );
};

export default Nav;
