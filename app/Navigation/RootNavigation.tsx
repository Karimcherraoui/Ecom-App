import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import { NavigatorScreenParams } from "@react-navigation/native";
import TabNavigation, { TabStackParamList } from "./TabNavigation";

export type RootStackParamList = {
  TabStack: NavigatorScreenParams<TabStackParamList>;
//   Profile: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        options={{ headerShown: false }}
        name="TabStack"
        component={TabNavigation}
      />
      {/* <RootStack.Screen name="Profile" component={ProfileScreen} /> */}
    </RootStack.Navigator>
  );
};

export default RootNavigation;
