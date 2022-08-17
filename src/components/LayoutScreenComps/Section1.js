import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../utils/scaler";

export default function Section1(props) {
  return (
    <View style={styles.sectionOne}>
      <Text style={{ fontSize: 25 }}>{props.firstSection}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionOne: {
    backgroundColor: "aqua",
    height: heightPercentageToDP(23),
    width: widthPercentageToDP(50),
    borderRadius: 106,
    marginTop: heightPercentageToDP(10),
    //marginBottom: heightPercentageToDP(8),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
