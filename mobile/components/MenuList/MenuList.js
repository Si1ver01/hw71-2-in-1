import React from "react";
import styles from "./styleMenuList";
import { FlatList, SafeAreaView } from "react-native";
import MenuItem from "./MenuItem/MenuItem";

const MenuList = ({ data }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <MenuItem item={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default MenuList;
