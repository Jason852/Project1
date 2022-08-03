import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableHighlight } from "react-native-gesture-handler";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen2</Text>
      <Button
        title="Go to Second Page"
        onPress={() => navigation.navigate("SecScreen")}
      />
      <Button
        title="Go to Fourth Page"
        onPress={() => navigation.navigate("FourthScreen")}
      />
      <TouchableHighlight
        onPress={() =>
          navigation.navigate("PracticeScreen", {
            itemId: 88,
            otherParams: "hello hello",
          })
        }
      >
        <Text style={{ fontSize: 20 }}>Practice Screen</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate("LayoutScreen")}>
        <Text style={{ fontSize: 20, marginTop: 8 }}>LayoutScreen</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate("BottomTabs")}>
        <Text style={{ fontSize: 20, marginTop: 8 }}>Bottom Navigation</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
  },
  text: {
    color: "green",
    fontWeight: "bold",
  },
});
