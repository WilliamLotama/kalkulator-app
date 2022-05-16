import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Calculator from "./src/screens/Calculator";
export default function App() {
  return (
    <View style={styles.container}>
      <Calculator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#303334",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    color: "white",
  },
});
