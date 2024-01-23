import React from "react";
import { SafeAreaView, Text, View, Platform } from "react-native";
import Styles from "./styles";
import Buttons from "../../components/Buttons";

export default function LandingPageScreen({ navigation }) {
  return (
    <SafeAreaView
      style={[
        Styles.conteiner,
        {
          marginLeft: Platform.OS === "android" ? 0 : 20,
          marginRight: Platform.OS === "android" ? 0 : 20,
        },
      ]}
    >
      <View>
        <Text>Welcome Back!</Text>
        <Buttons navigation={navigation}></Buttons>
      </View>
    </SafeAreaView>
  );
}
