import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPageScreen from "../pages/LandingPageScreen";
import ProfileScreen from "../pages/ProfileScreen";
import LoginScreen from "../pages/LoginScreen";
import HomePageScreen from "../pages/HomePageScreen";

const Stack = createNativeStackNavigator();
export default Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LandingPageScreen"
        component={LandingPageScreen}
        options={{
          title: "Welcome",
        }}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="HomePage"
        component={HomePageScreen}
      />
    </Stack.Navigator>
  );
};
