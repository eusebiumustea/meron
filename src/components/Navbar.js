import React from "react";
import Homeicon from "../assets/icons/Homeicon";
import Blogicon from "../assets/icons/Blogicon";
import Mapicon from "../assets/icons/Mapicon";
import Home from "../screens/Home";
import Blog from "../screens/Blog";
import Map from "../screens/Map";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
export default function NavBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarItemStyle: {
            left: "50%",
          },
          headerShown: false,
          tabBarIcon: ({ focused }) => <Homeicon focused={focused} />,
          tabBarStyle: {
            height: 70,
            width: "100%",
          },
        }}
        name="Home"
        children={() => <Home />}
      />

      <Tab.Screen
        name="Map"
        children={() => <Map />}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => <Mapicon focused={focused} />,
          tabBarStyle: {
            height: 70,
            width: "100%",
          },
        }}
      />
      <Tab.Screen
        name="Blog"
        children={() => <Blog />}
        options={{
          tabBarShowLabel: false,
          tabBarItemStyle: {
            right: "50%",
          },
          headerShown: false,
          tabBarIcon: ({ focused }) => <Blogicon focused={focused} />,
          tabBarStyle: {
            height: 70,
            width: "100%",
          },
        }}
      />
    </Tab.Navigator>
  );
}
