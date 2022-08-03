import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MatchScreen from "../screens/MatchScreen";
import FourthScreen from "../screens/FourthScreen";
import LayoutScreen from "../screens/LayoutScreen";

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={FourthScreen} />
      <Tab.Screen name="Messages" component={MatchScreen} />
      <Tab.Screen name="Layout" component={LayoutScreen} />
    </Tab.Navigator>
  );
}
