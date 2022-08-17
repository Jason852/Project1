import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { heightPercentageToDP, widthPercentageToDP } from "../../utils/scaler";
import Section1 from "../components/LayoutScreenComps/Section1";
import TitleBar from "../components/LayoutScreenComps/TitleBarComp";

export default function LayoutScreen() {
  return (
    <View style={styles.container}>
      <Section1 firstSection={"Section 1"} />
      <TitleBar titleBar={"Title Bar"} />
      <View style={styles.subsectionOne}>
        <Text>Sub Section One</Text>
      </View>
      <View style={styles.subsectionTwo}>
        <Text>Sub Section Two</Text>
      </View>
      <View style={styles.body}>
        <Text style={{ fontSize: 40 }}>Body</Text>
      </View>
      <View style={styles.ending}>
        <Text style={{ fontSize: 20 }}>Ending</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
  subsectionOne: {
    backgroundColor: "blanchedalmond",
    height: heightPercentageToDP(2),
    width: widthPercentageToDP(60),
    marginTop: heightPercentageToDP(5),
    alignSelf: "center",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  subsectionTwo: {
    backgroundColor: "blanchedalmond",
    height: heightPercentageToDP(2),
    width: widthPercentageToDP(60),
    marginTop: heightPercentageToDP(2),
    alignSelf: "center",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    backgroundColor: "darkcyan",
    height: heightPercentageToDP(20),
    width: widthPercentageToDP(80),
    marginTop: heightPercentageToDP(5),
    alignSelf: "center",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  ending: {
    backgroundColor: "aqua",
    height: heightPercentageToDP(5),
    width: widthPercentageToDP(85),
    marginTop: heightPercentageToDP(5),
    alignSelf: "center",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
