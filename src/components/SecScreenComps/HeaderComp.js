import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HeaderComp(props) {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View>
        <Text style={styles.logo}>{props.logo}</Text>
      </View>
      <View style={styles.headerRight}>
        <Text
          style={{
            color: "white",
            paddingRight: 10,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {props.files}
        </Text>
        <Text style={styles.headerText}>{props.menu}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    color: "red",
    fontWeight: "bold",
    fontSize: 35,
    padding: 10,
  },
  headerRight: {
    flexDirection: "row",
    //color: "white",
    //fontSize: 28,
    paddingTop: 20,
    paddingRight: 25,
    //paddingLeft: 170,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
