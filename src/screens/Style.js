import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
  // Button
  btnPink: {
    width: 80,
    height: 70,
    borderRadius: 30,
    backgroundColor: "#F99136",
    justifyContent: "center",
    alignItems: "center",
    margin: 6,
  },
  btnSamping: {
    width: 80,
    height: 70,
    borderRadius: 30,
    backgroundColor: "#917159",
    justifyContent: "center",
    alignItems: "center",
    margin: 6,
  },
  bNum: {
    width: 80,
    height: 70,
    borderRadius: 30,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    margin: 6,
    border: "1px solid #6D4848",
  },
  bSama: {
    width: 350,
    height: 70,
    backgroundColor: "#277d2a",
    justifyContent: "center",
    alignItems: "center",
    margin: 6,
    border: "1px solid black",
  },
  text: {
    color: "solid black",
    fontSize: 26,
  },
  viewBottom: {
    position: "absolute",
    bottom: 50,
  },
  row: {
    maxWidth: "100%",
    flexDirection: "row",
  },
  result: {
    maxWidth: "100%",
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
    padding: 30,
  },
});
