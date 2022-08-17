import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../utils/scaler";

export default function TitleBar(props) {
  return (
    <View style={styles.sectionTwo}>
      <Text style={{ fontSize: 20 }}>{props.titleBar}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTwo: {
    backgroundColor: "aqua",
    height: heightPercentageToDP(5),
    width: widthPercentageToDP(85),
    marginTop: heightPercentageToDP(8),
    alignSelf: "center",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
