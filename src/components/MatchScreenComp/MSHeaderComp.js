import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../utils/scaler";

export default function MSHeaderComp(props) {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingBottom: heightPercentageToDP(1),
      }}
    >
      <Image
        source={require("../../images/match-pro.jpg")}
        style={styles.profileImage}
      ></Image>
      <View
        style={{
          flexDirection: "column",
          marginLeft: widthPercentageToDP(5),
          justifyContent: "space-evenly",
        }}
      >
        <Text style={{ fontSize: 15 }}>{props.welcome}</Text>
        <Text style={{ fontSize: 19, fontWeight: "bold" }}>{props.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    borderRadius: 50,
    marginLeft: widthPercentageToDP(5),
  },
});
