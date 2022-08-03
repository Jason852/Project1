import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { heightPercentageToDP, widthPercentageToDP } from "../../utils/scaler";

export default function LayoutScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.sectionOne}>
        <Text style={{ fontSize: 25 }}>Section 1</Text>
      </View>
      <View style={styles.sectionTwo}>
        <Text style={{ fontSize: 20 }}>Section 2</Text>
      </View>
      <View style={styles.sectionThree}>
        <Text>Section Three</Text>
      </View>
      <View style={styles.sectionFour}>
        <Text>Section Four</Text>
      </View>
      <View style={styles.sectionFive}>
        <Text style={{ fontSize: 40 }}>Section 5</Text>
      </View>
      <View style={styles.sectionSix}>
        <Text style={{ fontSize: 20 }}>Section Six</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
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
  sectionThree: {
    backgroundColor: "blanchedalmond",
    height: heightPercentageToDP(2),
    width: widthPercentageToDP(60),
    marginTop: heightPercentageToDP(5),
    alignSelf: "center",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionFour: {
    backgroundColor: "blanchedalmond",
    height: heightPercentageToDP(2),
    width: widthPercentageToDP(60),
    marginTop: heightPercentageToDP(2),
    alignSelf: "center",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionFive: {
    backgroundColor: "darkcyan",
    height: heightPercentageToDP(20),
    width: widthPercentageToDP(80),
    marginTop: heightPercentageToDP(5),
    alignSelf: "center",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionSix: {
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
