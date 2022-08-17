import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SubHeaderComp(props) {
  return (
    <View style={styles.subHeader}>
      <Text style={styles.subText}>{props.shows}</Text>
      <Text style={styles.subText}>{props.movies}</Text>
      <Text style={styles.subText}>{props.categories}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subHeader: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  subText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
