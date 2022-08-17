import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { widthPercentageToDP } from "../../utils/scaler";

export default function MainPictureComp(props) {
  return (
    <View style={styles.containerB}>
      <Image
        source={require("../images/practiceImage.jpeg")}
        style={styles.image}
      />
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
        {props.time}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerB: {
    flex: 1,
  },
  image: {
    height: 430,
    width: 430,
  },
});
