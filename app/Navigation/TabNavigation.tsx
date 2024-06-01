import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen";

import Icons from "@expo/vector-icons/MaterialIcons";



export type TabStackParamList = {
  Home: undefined;
  Profile: undefined;
  Payment: undefined;
  Cart: undefined;
};

const TabsStack = createBottomTabNavigator<TabStackParamList>();

const TabNavigation = () => {
  return (
    <TabsStack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <TabsStack.Screen
        options={{
          tabBarIcon: (props ) => (
            <Icons name="home"{...props} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <TabsStack.Screen
         options={{
            tabBarIcon: (props ) => (
              <Icons name="shopping-cart"{...props} />
            ),
          }}
        name="Profile"
        component={ProfileScreen}
      />
      <TabsStack.Screen
          options={{
            tabBarIcon: (props ) => (
              <Icons name="account-balance-wallet"{...props} />
            ),
          }}
        name="Payment"
        component={Exemple}
      />
      <TabsStack.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Icons name="person" size={24} color={color} />
          ),
        }}
        name="Cart"
        component={Exemple}
      />
    </TabsStack.Navigator>
  );
};

export default TabNavigation;

const Exemple = () => {
  return (
    <View>
      <Text>exemple</Text>
    </View>
  );
};
