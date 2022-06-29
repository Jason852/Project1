import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import PracticeScreen from "../screens/PracticeScreen";
import SecScreen from "../screens/SecScreen";

const Stack = createStackNavigator();

export default function MainNav() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SecScreen" component={SecScreen} />
      <Stack.Screen name="PracticeScreen" component={PracticeScreen} />
    </Stack.Navigator>
  );
}
