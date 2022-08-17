import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { heightPercentageToDP, widthPercentageToDP } from "../../utils/scaler";
import MainPictureComp from "../components/MainPictureComp";

const Author = "John Kearns";
const Views = "1.5M";
const TimeLapse = "4 days";

export default function PracticeScreen({ route }) {
  const { itemId, otherParams } = route.params;
  return (
    <View style={styles.container}>
      <MainPictureComp
        //image={"../images/practiceImage.jpeg"}
        time={"8:15"}
      />
      {/* <View style={styles.containerB}>
        <Image
          source={require("../images/practiceImage.jpeg")}
          style={styles.image}
        />
        put view here wrapping text, styling goes here
        <Text
          style={{
            position: "absolute",
            backgroundColor: "black",
            width: widthPercentageToDP(10),
            color: "white",
            textAlign: "center",
            bottom: 0,
            right: 0,
          }}
        >
          8:15
        </Text>
      </View> */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 15,
          height: 30,
        }}
      >
        <Image
          source={require("../images/icons8-find-iphone-48.png")}
          style={{ height: 60, width: 60 }}
        />
        <Text style={{ fontSize: 20, flexWrap: "wrap", marginTop: 5 }}>
          How to take a photo with your hands
        </Text>
      </View>
      <View>
        <Text style={{ marginTop: 20 }}>
          {Author} - {Views} - {TimeLapse}
        </Text>
      </View>
      <View>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParams: {JSON.stringify(otherParams)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    //justifyContent: "center",
    //backgroundColor: "red",
  },
  text: {
    //color: "red",
    fontWeight: "bold",
    marginTop: 20,
    fontSize: 20,
  },

  // time: {
  //   position: "absolute",
  //   marginLeft: 300,
  //   top: 100,
  //   //width: 30,
  //   backgroundColor: "darkgrey",
  //   // color: "white",
  // },
});
