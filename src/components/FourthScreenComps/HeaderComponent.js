import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../utils/scaler";

export default function HeaderComponent(props) {
  return (
    <View style={styles.header}>
      <View style={styles.headerInfo}>
        <Text style={{ fontSize: 35, fontWeight: "bold" }}>{props.name}</Text>
      </View>
      <View style={styles.headerInfo}>
        <Text style={styles.headerText}>{props.age}</Text>
      </View>
      <View style={styles.headerInfo}>
        <Text style={styles.headerText}>{props.city}</Text>
      </View>
      <View style={styles.headerInfo}>
        <Text style={styles.headerText}>{props.height}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "grey",
    height: heightPercentageToDP(12),
    //justifyContent: "flex-end",
    flexDirection: "row",
  },
  headerInfo: {
    justifyContent: "flex-end",
    marginLeft: widthPercentageToDP(2),
  },
  headerText: {
    //fontSize: 18,
    fontSize: heightPercentageToDP(2),
    marginBottom: heightPercentageToDP(0.7),
  },
});
