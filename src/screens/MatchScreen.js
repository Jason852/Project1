import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { heightPercentageToDP, widthPercentageToDP } from "../../utils/scaler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MatchScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SafeAreaView></SafeAreaView>
        <View
          style={{
            flexDirection: "row",
            paddingBottom: heightPercentageToDP(1),
          }}
        >
          <Image
            source={require("../images/match-pro.jpg")}
            style={styles.profileImage}
          ></Image>
          <View
            style={{
              flexDirection: "column",
              marginLeft: widthPercentageToDP(5),
              justifyContent: "space-evenly",
            }}
          >
            <Text style={{ fontSize: 15 }}>Welcome Back</Text>
            <Text style={{ fontSize: 19, fontWeight: "bold" }}>John</Text>
          </View>
        </View>
      </View>
      <View style={styles.topTabs}>
        <View style={styles.matchTab}>
          <Text style={styles.matchTabText}>Matches</Text>
        </View>
        <View style={styles.friendsTab}>
          <Text style={styles.friendsTabText}>Friends</Text>
        </View>
      </View>
      <View style={styles.messageArea}>
        <View style={styles.messageContainer}>
          <Image
            source={require("../images/match-pro2.jpg")}
            style={styles.messageImage}
          ></Image>
          <View style={styles.messageTextArea}>
            <Text style={styles.messageName}>Haily</Text>
            <Text style={styles.messageText}>Hey, hows your night?</Text>
          </View>
        </View>
        <View style={styles.messageContainer}>
          <Image
            source={require("../images/match-pro3.jpg")}
            style={styles.messageImage}
          ></Image>
          <View style={styles.messageTextArea}>
            <Text style={styles.messageName}>Susan</Text>
            <Text style={styles.messageText}>What are you up to?</Text>
          </View>
        </View>
        <View style={styles.messageContainer}>
          <Image
            source={require("../images/match-pro4.jpg")}
            style={styles.messageImage}
          ></Image>
          <View style={styles.messageTextArea}>
            <Text style={styles.messageName}>Roberta</Text>
            <Text style={styles.messageText}>The game was awesome!</Text>
          </View>
        </View>
        <View style={styles.messageContainer}>
          <Image
            source={require("../images/match-pro5.jpg")}
            style={styles.messageImage}
          ></Image>
          <View style={styles.messageTextArea}>
            <Text style={styles.messageName}>Bobby</Text>
            <Text style={styles.messageText}>Is your cousin coming?</Text>
          </View>
        </View>
        <View style={styles.messageContainer}>
          <Image
            source={require("../images/match-pro6.jpg")}
            style={styles.messageImage}
          ></Image>
          <View style={styles.messageTextArea}>
            <Text style={styles.messageName}>Jay</Text>
            <Text style={styles.messageText}>What are you up to?</Text>
          </View>
        </View>
        <View style={styles.messageContainer}>
          <Image
            source={require("../images/match-pro7.jpg")}
            style={styles.messageImage}
          ></Image>
          <View style={styles.messageTextArea}>
            <Text style={styles.messageName}>Susana</Text>
            <Text style={styles.messageText}>Thats my pug!</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "yellow",
  },
  profileImage: {
    borderRadius: 50,
    marginLeft: widthPercentageToDP(5),
  },
  topTabs: {
    //backgroundColor: "red",
    height: heightPercentageToDP(7),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  friendsTab: {
    paddingTop: heightPercentageToDP(1),
    paddingBottom: heightPercentageToDP(1),
    borderBottomWidth: 2.5,
    borderBottomColor: "black",
  },
  matchTabText: {
    fontSize: 19,
  },
  friendsTabText: {
    fontSize: 19,
    fontWeight: "bold",
  },
  messageArea: {
    flexDirection: "column",
    //paddingTop: heightPercentageToDP(1),
  },
  messageContainer: {
    flexDirection: "row",
    //backgroundColor: "red",
    marginLeft: widthPercentageToDP(5),
    marginRight: widthPercentageToDP(5),
    paddingTop: heightPercentageToDP(2),
    paddingBottom: heightPercentageToDP(2),
    borderBottomColor: "grey",
    borderBottomWidth: 2,
  },
  messageImage: {
    borderRadius: 50,
  },
  messageTextArea: {
    paddingLeft: widthPercentageToDP(4),
    justifyContent: "space-evenly",
  },
  messageName: {
    fontSize: 18,
  },
  messageText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
