import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import PracticeScreen from "../screens/PracticeScreen";
import SecScreen from "../screens/SecScreen";
import FourthScreen from "../screens/FourthScreen";
import LayoutScreen from "../screens/LayoutScreen";
import BottomTabsNav from "./BottomTabsNav";

const Stack = createStackNavigator();

export default function MainNav() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SecScreen" component={SecScreen} />
      <Stack.Screen name="PracticeScreen" component={PracticeScreen} />
      <Stack.Screen
        options={{ headerShown: false }}
        name="FourthScreen"
        component={FourthScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="LayoutScreen"
        component={LayoutScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="BottomTabs"
        component={BottomTabsNav}
      />
    </Stack.Navigator>
  );
}
