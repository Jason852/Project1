import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { heightPercentageToDP } from "../../../utils/scaler";

export default function TabsComp(props) {
  return (
    <View style={styles.topTabs}>
      <View style={styles.matchTab}>
        <Text style={styles.matchTabText}>{props.matches}</Text>
      </View>
      <View style={styles.friendsTab}>
        <Text style={styles.friendsTabText}>{props.friends}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topTabs: {
    //backgroundColor: "red",
    height: heightPercentageToDP(7),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  friendsTab: {
    paddingTop: heightPercentageToDP(1),
    paddingBottom: heightPercentageToDP(1),
    borderBottomWidth: 2.5,
    borderBottomColor: "black",
  },
  matchTabText: {
    fontSize: 19,
  },
  friendsTabText: {
    fontSize: 19,
    fontWeight: "bold",
  },
});
