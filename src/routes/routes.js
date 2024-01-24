import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPageScreen from "../pages/LandingPageScreen";
import ProfileScreen from "../pages/ProfileScreen";
import LoginScreen from "../pages/LoginScreen";
import HomePageScreen from "../pages/HomePageScreen";
import { Button } from "react-native";

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
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert("This is a button!")}
              title="Info"
              color="#000"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};
