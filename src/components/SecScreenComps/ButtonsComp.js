import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ButtonsComp(props) {
  return (
    <View style={styles.midSection}>
      <View style={styles.midButtons}>
        <Text style={styles.midText}>{props.addBtn}</Text>
        <Text style={styles.midText}>{props.myList}</Text>
      </View>
      <View style={styles.midButtons}>
        <Text style={styles.midText}>{props.playBtn}</Text>
        <Text style={styles.midText}>{props.play}</Text>
      </View>
      <View style={styles.midButtons}>
        <Text style={styles.midText}>{props.infoBtn}</Text>
        <Text style={styles.midText}>{props.info}</Text>
      </View>
    </View>
  );
}

styles = StyleSheet.create({
  midSection: {
    flexDirection: "row",
    backgroundColor: "grey",
    justifyContent: "space-evenly",
    padding: 15,
  },
  midButtons: {
    alignItems: "center",
  },
  midText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    padding: 5,
  },
});
