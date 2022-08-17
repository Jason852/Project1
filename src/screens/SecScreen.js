import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import HeaderComp from "../components/SecScreenComps/HeaderComp";
import SubHeaderComp from "../components/SecScreenComps/SubHeaderComp";
import ButtonsComp from "../components/SecScreenComps/ButtonsComp";
import NewReleasesComp from "../components/SecScreenComps/NewReleasesComp";
import BottomNavComp from "../components/SecScreenComps/BottomNavComp";

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
          <HeaderComp logo={"NETFLIX"} files={"Files"} menu={"Menu"} />

          <SubHeaderComp
            shows={"TV Shows"}
            movies={"Movies"}
            categories={"Categories"}
          />
          <View style={{ alignItems: "center", marginTop: 290 }}>
            <Text style={{ color: "white", fontSize: 30 }}>Turning Point</Text>
            <Text style={{ color: "white", fontSize: 20 }}>
              #2 in the world
            </Text>
          </View>
        </ImageBackground>
        <ButtonsComp
          addBtn={"+"}
          myList={"My List"}
          playBtn={">"}
          play={"Play"}
          infoBtn={"i"}
          info={"Info"}
        />
      </View>
      <NewReleasesComp heading={"New Releases"} boxes={"Box"} />
      {/* <View style={{ backgroundColor: "green" }}>
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
      </View> */}
      <BottomNavComp
        icon={"88"}
        home={"HOME"}
        new={"New and Hot"}
        laugh={"Fast Laughs"}
        search={"Search"}
        downloads={"Downloads"}
      />
      {/* <View style={styles.bottomNav}>
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
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    //alignContent: "center",
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
