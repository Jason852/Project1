import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function NewReleasesComp(props) {
  return (
    <View style={{ backgroundColor: "green" }}>
      <Text style={{ fontSize: 23, color: "white", padding: 10 }}>
        {props.heading}
      </Text>
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <Text>{props.boxes}</Text>
        </View>
        <View style={styles.box}>
          <Text>{props.boxes}</Text>
        </View>
        <View style={styles.box}>
          <Text>{props.boxes}</Text>
        </View>
        <View style={styles.box}>
          <Text>{props.boxes}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  boxContainer: {
    flexDirection: "row",
    padding: 10,
    paddingTop: 10,
    paddingBottom: 20,
    justifyContent: "space-between",
  },
  box: {
    height: 100,
    width: 70,
    borderRadius: 10,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
