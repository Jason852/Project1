import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen2</Text>
      <Button
        title="Go to Second Page"
        onPress={() => navigation.navigate("SecScreen")}
      />
      <Button
        title="Go to Fourth Page"
        onPress={() => navigation.navigate("FourthScreen")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  text: {
    color: "green",
    fontWeight: "bold",
  },
});
