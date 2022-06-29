import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function SecScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Second Screen</Text>
      <Button
        title="Go to Practice Page"
        onPress={() => navigation.navigate("PracticeScreen")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    //justifyContent: "center",
    backgroundColor: "yellow",
  },
  text: {
    color: "red",
    fontWeight: "bold",
    marginTop: 30,
    fontSize: 30,
  },
});
