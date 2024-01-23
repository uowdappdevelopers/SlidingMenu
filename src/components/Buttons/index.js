import React from "react";
import { Button, Text, View, Platform } from "react-native";
import Styles from "./styles";

export default function Buttons({ navigation }) {
  return (
    <View>
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate("Profile", { name: "Jane" })}
      />
      <Button
        title="HomePage"
        onPress={() => navigation.navigate("HomePage")}
      />
      <Button
        title="Login"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
}
