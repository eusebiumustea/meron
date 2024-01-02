import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Article from "../screens/Home/News/Article";
import Coffe from "../screens/Home/Menu/Coffe";
import NonCoffe from "../screens/Home/Menu/NonCoffe";
import Food from "../screens/Home/Menu/Food";
import Sweets from "../screens/Home/Menu/Sweets";
import NavBar from "./Navbar";
import Map from "../screens/Map";
import { NavigationContainer } from "@react-navigation/native";
import LocationDetails from "../screens/Map/LocationDetails";
export function StackNav() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="NavBar"
        screenOptions={{
          headerShown: false,
          animationEnabled: true,
        }}
      >
        <Stack.Screen children={() => <NavBar />} name="NavBar" />
        <Stack.Screen children={() => <Map />} name="Map" />

        <Stack.Screen children={() => <Article />} name="Article" />
        <Stack.Screen children={() => <Coffe />} name="Coffe" />

        <Stack.Screen children={() => <NonCoffe />} name="NonCoffe" />
        <Stack.Screen children={() => <Food />} name="Food" />
        <Stack.Screen children={() => <LocationDetails />} name="Details" />

        <Stack.Screen children={() => <Sweets />} name="Sweets" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
