import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import React from "react";
import Timer from "./Components/Timer";

const App = () => (
  <View style={styles.container}>
    <StatusBar style="auto" />
    <Timer />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
export default App;