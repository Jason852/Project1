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
            height: heightPercentageToDP(40),
            width: widthPercentageToDP(100),
          }}
        ></Image>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.passBtn}>
          <Text style={styles.textBtn}>Pass</Text>
          <Icon
            style={{
              color: "black",
              marginLeft: 5,
            }}
            name={"close-outline"}
            size={35}
          />
        </View>
        <View style={styles.likeBtn}>
          <Text style={styles.textBtn}>Like</Text>
          <Icon
            style={{
              color: "white",
              marginLeft: 5,
            }}
            name={"heart-outline"}
            size={30}
          />
        </View>
        <View style={styles.setupBtn}>
          <Text style={styles.textBtn}>Set Up</Text>
        </View>
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
  buttonsContainer: {
    backgroundColor: "grey",
    height: heightPercentageToDP(10),
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderBottomColor: "black",
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },
  passBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "yellow",
    marginTop: heightPercentageToDP(1.5),
    marginBottom: heightPercentageToDP(1.5),
    paddingLeft: widthPercentageToDP(1),
    borderRadius: 12,
  },
  likeBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "blue",
    marginTop: heightPercentageToDP(1.5),
    marginBottom: heightPercentageToDP(1.5),
    paddingLeft: widthPercentageToDP(2),
    paddingRight: widthPercentageToDP(2),
    borderRadius: 12,
  },
  setupBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "red",
    marginTop: heightPercentageToDP(1.5),
    marginBottom: heightPercentageToDP(1.5),
    paddingLeft: widthPercentageToDP(2),
    paddingRight: widthPercentageToDP(2),
    borderRadius: 12,
  },
  textBtn: {
    fontSize: 25,
  },
});

// DAILY NOTES: Added buttons and styling for buttons. Need to add lines between buttons and work on bottom border to make it not 100%. Questions for Dario.. for styling the buttons have all the same styling except for a few properties... how to better code it so its less redundant but still can have some differences.----- See if i can add multiple styling styles to each btn. Also work on buttons to make them all the same width...suggestion, put a width on the btn class that im going to create so they are all the exact same size.

/*{ <Icon
style={{
    color: 'white',
    marginTop: '50%',
  }}
  name={'ios-play'}
  size={45}
/> */
