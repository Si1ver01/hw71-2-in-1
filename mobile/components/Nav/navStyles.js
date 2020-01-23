import { StyleSheet } from "react-native";

const navStyles = StyleSheet.create({
  nav: {
    height: "10%",
    width: "100%",
    backgroundColor: "#3700b3",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between"
  },
  brand: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 5,
    marginLeft: 5,
    color: "#8c9a82"
  },
  navbar: {
    display: "flex",
    flexDirection: "row",
    marginRight: 10,
    marginBottom: 5
  },
  ["navbar-item"]: {
    color: "#ffffff",
    fontSize: 18,
    marginLeft: 20
  }
});

export default navStyles;
