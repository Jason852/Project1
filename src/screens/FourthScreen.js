import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { heightPercentageToDP, widthPercentageToDP } from "../../utils/scaler";
import Icon from "react-native-vector-icons/Ionicons";

export default function FourthScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerInfo}>
          <Text style={{ fontSize: 35, fontWeight: "bold" }}>Amy</Text>
        </View>
        <View style={styles.headerInfo}>
          <Text style={styles.headerText}>23,</Text>
        </View>
        <View style={styles.headerInfo}>
          <Text style={styles.headerText}>Los Angeles,</Text>
        </View>
        <View style={styles.headerInfo}>
          <Text style={styles.headerText}>5'5</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../images/pexels-frida.jpg")}
          style={{
            height: heightPercentageToDP(45),
            width: widthPercentageToDP(100),
          }}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
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
    fontSize: 15,
    marginBottom: heightPercentageToDP(0.8),
  },
  imageContainer: {
    backgroundColor: "yellow",
    //height: heightPercentageToDP(1),
  },
});

// <Icon
// style={{
//     color: 'white',
//     marginTop: '50%',
//   }}
//   name={'ios-play'}
//   size={45}
// />
