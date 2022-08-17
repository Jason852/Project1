import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function BottomNavComp(props) {
  return (
    <View style={styles.bottomNav}>
      <View style={styles.bottomNavBtn}>
        <Text>{props.icon}</Text>
        <Text>{props.home}</Text>
      </View>
      <View style={styles.bottomNavBtn}>
        <Text>{props.icon}</Text>
        <Text>{props.new}</Text>
      </View>
      <View style={styles.bottomNavBtn}>
        <Text>{props.icon}</Text>
        <Text>{props.laugh}</Text>
      </View>
      <View style={styles.bottomNavBtn}>
        <Text>{props.icon}</Text>
        <Text>{props.search}</Text>
      </View>
      <View style={styles.bottomNavBtn}>
        <Text>{props.icon}</Text>
        <Text>{props.downloads}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    height: 130,
    flexDirection: "row",
    backgroundColor: "brown",
    justifyContent: "center",
    //alignContent: "center",
  },
  bottomNavBtn: {
    justifyContent: "center",
    padding: 10,
    alignItems: "center",
  },
});
