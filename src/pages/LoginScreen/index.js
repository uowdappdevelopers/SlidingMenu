import React from "react";
import { SafeAreaView, Text, View, Platform } from "react-native";
import Styles from "./styles";

export default function LoginScreen({ navigation }) {
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
        <Text>Login</Text>
      </View>
    </SafeAreaView>
  );
}
