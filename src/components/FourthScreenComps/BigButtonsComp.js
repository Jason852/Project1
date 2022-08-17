import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../utils/scaler";

export default function BigButtonsComp(props) {
  return (
    <View style={styles.buttonsContainer}>
      <View style={[styles.btn, styles.passBtn]}>
        <Text style={styles.textBtn}>{props.pass}</Text>
        <Icon
          style={{
            color: "black",
            marginLeft: 5,
          }}
          name={"close-outline"}
          size={35}
        />
      </View>
      <View style={{ height: 65, width: 2, backgroundColor: "black" }}></View>
      <View style={[styles.btn, styles.likeBtn]}>
        <Text style={styles.textBtn}>{props.like}</Text>
        <Icon
          style={{
            color: "white",
            marginLeft: 5,
          }}
          name={"heart-outline"}
          size={30}
        />
      </View>
      <View style={{ height: 65, width: 2, backgroundColor: "black" }}></View>
      <View style={[styles.btn, styles.setupBtn]}>
        <Text style={styles.textBtn}>{props.setup}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    backgroundColor: "grey",
    height: heightPercentageToDP(10),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    // borderBottomColor: "black",
    // borderBottomWidth: 2,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: heightPercentageToDP(6.0),
    width: widthPercentageToDP(26),
    //marginTop: heightPercentageToDP(1.5),
    //marginBottom: heightPercentageToDP(1.5),
    // paddingLeft: widthPercentageToDP(1),
    borderRadius: 12,
  },
  passBtn: {
    backgroundColor: "yellow",
  },
  likeBtn: {
    backgroundColor: "blue",
  },
  setupBtn: {
    backgroundColor: "red",
  },
  textBtn: {
    fontSize: 25,
  },
});
