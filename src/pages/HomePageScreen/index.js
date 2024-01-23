import React, {useRef} from "react";
import {
  Text,
  View,
  Button,
  DrawerLayoutAndroid,
} from "react-native";
import Styles from "./styles";

export default function HomePageScreen() {
  const drawer = useRef(null);

  const navigationView = () => (
    <View style={[Styles.container, Styles.navigationContainer]}>
      <Text style={Styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={navigationView}
    >
      <View style={Styles.container}>
        <Text style={Styles.paragraph}>Drawer on the left!</Text>
        <Button
          title="Change Drawer Position"
        />
        <Text style={Styles.paragraph}>
          Swipe from the side or press button below to see it!
        </Text>
        <Button
          title="Open drawer"
          onPress={() => drawer.current.openDrawer()}
        />
      </View>
    </DrawerLayoutAndroid>
  );
}
