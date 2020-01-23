import React from "react";
import { Text, ActivityIndicator ,View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { requestMenu } from "../../store/action/actions";
import stylesMenu from "./styleMenu";
import MenuList from "../../components/MenuList/MenuList";

const Menu = () => {
  const menu = useSelector(state => state.menu);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!menu.length) {
      dispatch(requestMenu());
    }
  }, [dispatch]);

  if (!menu.length) {
    return (
      <View style={[stylesMenu.container, stylesMenu.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return <MenuList data={menu}/> ;
};

export default Menu;
