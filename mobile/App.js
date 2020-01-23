import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Nav from "./components/Nav/Nav";
import { NativeRouter, Route, Switch } from "react-router-native";
import Menu from "./pages/Menu/Menu";
import Cart from "./pages/Cart/Cart";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./store/reducer/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(rootReducer,applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <NativeRouter>
        <View style={styles.container}>
          <Nav />
          <Switch>
            <Route path="/" exact component={Menu} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </View>
      </NativeRouter>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  }
});
