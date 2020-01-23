import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    marginBottom: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%"
  },
  title: {
    fontSize: 14
  },
  image: {
    width: 70,
    height: 70
  },
  ["image-wrap"]: {
    width: "20%"
  },
  ["title-wrap"]: {
    width: "30%",
    paddingLeft: 5
  },
  ["price-wrap"]: {
    width: "20%"
  },
  price: {
    fontWeight: "bold"
  },
  ["btn-wrap"]: {
    width: "30%",
    paddingRight: 5
  }
});

export default styles;
