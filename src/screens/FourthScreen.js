import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { heightPercentageToDP, widthPercentageToDP } from "../../utils/scaler";
import Icon from "react-native-vector-icons/Ionicons";
import HeaderComponent from "../components/FourthScreenComps/HeaderComponent";
import BigButtonsComp from "../components/FourthScreenComps/BigButtonsComp";

export default function FourthScreen() {
  return (
    <View style={styles.container}>
      <HeaderComponent
        name={"Amy"}
        age={"23"}
        city={"Los Angeles"}
        height={"5'5"}
      />
      <View style={styles.imageContainer}>
        <Image
          source={require("../images/pexels-frida.jpg")}
          style={{
            height: heightPercentageToDP(40),
            width: widthPercentageToDP(100),
          }}
        ></Image>
      </View>
      <BigButtonsComp pass={"Pass"} like={"Like"} setup={"Set Up"} />
      {/* <View style={styles.buttonsContainer}>
        <View style={[styles.btn, styles.passBtn]}>
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
        <View style={{ height: 65, width: 2, backgroundColor: "black" }}></View>
        <View style={[styles.btn, styles.likeBtn]}>
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
        <View style={{ height: 65, width: 2, backgroundColor: "black" }}></View>
        <View style={[styles.btn, styles.setupBtn]}>
          <Text style={styles.textBtn}>Set Up</Text>
        </View>
      </View> */}
      <View style={styles.partialLineBtm}></View>
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.infoGroup}>People in common</Text>
          <Text style={styles.info}>Alex Gold and 100 others</Text>
        </View>
        <View>
          <Text style={styles.infoGroup}>Education</Text>
          <Text style={styles.info}>University of Austin</Text>
        </View>
        <View>
          <Text style={styles.infoGroup}>Job</Text>
          <Text style={styles.info}>Job</Text>
        </View>
        <View>
          <Text style={styles.infoGroup}>Details</Text>
          <Text style={styles.info}>Details</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
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
  partialLineBtm: {
    height: 2,
    width: widthPercentageToDP(85),
    backgroundColor: "black",
    alignSelf: "center",
  },
  infoContainer: {
    backgroundColor: "grey",
    flexDirection: "column",
    height: heightPercentageToDP(38),
    justifyContent: "space-around",
    paddingLeft: widthPercentageToDP(7),
    paddingTop: heightPercentageToDP(1.5),
    paddingBottom: heightPercentageToDP(1.5),
  },
  infoGroup: {
    fontSize: heightPercentageToDP(2),
    fontWeight: "bold",
  },
  info: {
    fontSize: heightPercentageToDP(1.8),
  },
});

// Daily Notes: Is this the way to make lines? I used decimals for some of my measurements, is that ok? For the buttons... is the styling ok? I didn't want to repeat too much

/*{ <Icon
style={{
    color: 'white',
    marginTop: '50%',
  }}
  name={'ios-play'}
  size={45}
/> */
