import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";

export default function SecScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 450,
          backgroundColor: "red",
          marginBottom: 80,
        }}
      >
        <ImageBackground
          source={require("../images/pexels-stephen-tam-11943277.jpg")}
          resizeMode="cover"
          style={{ height: "100%", width: "100%" }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text style={styles.logo}>NETFLIX</Text>
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
                Files
              </Text>
              <Text style={styles.headerText}>Menu</Text>
            </View>
          </View>
          <View style={styles.subHeader}>
            <Text style={styles.subText}>TV Shows</Text>
            <Text style={styles.subText}>Movies</Text>
            <Text style={styles.subText}>Categories</Text>
          </View>
          <View style={{ alignItems: "center", marginTop: 290 }}>
            <Text style={{ color: "white", fontSize: 30 }}>Turning Point</Text>
            <Text style={{ color: "white", fontSize: 20 }}>
              #2 in the world
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.midSection}>
          <View style={styles.midButtons}>
            <Text style={styles.midText}>+</Text>
            <Text style={styles.midText}>My List</Text>
          </View>
          <View style={styles.midButtons}>
            <Text style={styles.midText}>></Text>
            <Text style={styles.midText}>Play</Text>
          </View>
          <View style={styles.midButtons}>
            <Text style={styles.midText}>i</Text>
            <Text style={styles.midText}>Info</Text>
          </View>
        </View>
      </View>
      <View style={{ backgroundColor: "green" }}>
        <Text style={{ fontSize: 23, color: "white", padding: 10 }}>
          New Releases
        </Text>
        <View style={styles.boxContainer}>
          <View style={styles.box}>
            <Text>Box 1</Text>
          </View>
          <View style={styles.box}>
            <Text>Box 2</Text>
          </View>
          <View style={styles.box}>
            <Text>Box 3</Text>
          </View>
          <View style={styles.box}>
            <Text>Box 4</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomNav}>
        <View style={styles.bottomNavBtn}>
          <Text>88</Text>
          <Text>HOME</Text>
        </View>
        <View style={styles.bottomNavBtn}>
          <Text>88</Text>
          <Text>New and Hot</Text>
        </View>
        <View style={styles.bottomNavBtn}>
          <Text>88</Text>
          <Text>Fast Laughs</Text>
        </View>
        <View style={styles.bottomNavBtn}>
          <Text>88</Text>
          <Text>Search</Text>
        </View>
        <View style={styles.bottomNavBtn}>
          <Text>88</Text>
          <Text>Downloads</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    //alignContent: "center",
  },
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
  subHeader: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  subText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  midSection: {
    flexDirection: "row",
    backgroundColor: "grey",
    justifyContent: "space-evenly",
    padding: 15,
  },
  midButtons: {
    alignItems: "center",
  },
  midText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    padding: 5,
  },
  boxContainer: {
    flexDirection: "row",
    padding: 10,
    paddingTop: 10,
    paddingBottom: 20,
    justifyContent: "space-between",
  },
  box: {
    height: 100,
    width: 70,
    borderRadius: 10,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomNav: {
    height: 130,
    flexDirection: "row",
    backgroundColor: "brown",
    justifyContent: "center",
    //alignContent: "center",
  },
  bottomNavBtn: {
    justifyContent: "center",
    padding: 10,
    alignItems: "center",
  },
});
