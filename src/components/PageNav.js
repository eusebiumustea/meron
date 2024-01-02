import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import Membership from "../screens/Home/Membership";
import Menu from "../screens/Home/Menu";
import Nowroasting from "../screens/Home/Nowroasting";
import News from "../screens/Home/News";
import Membershipicon from "../assets/icons/Membershipicon";
import Nowroasticon from "../assets/icons/Nowroasticon";
import Menuicon from "../assets/icons/Menuicon";
import Newsicon from "../assets/icons/Newsicon";
import { StyleSheet, Text, View } from "react-native";
import { moderateFontScale, moderateScale } from "../normalizeSize";
const Tab = createMaterialTopTabNavigator();
export default function PageNav() {
  function MembershipView(props) {
    if (props.focused) {
      return (
        <View
          style={{
            alignItems: "center",
            height: 75,
            width: 75,
            justifyContent: "space-between",
            alignSelf: "center",
          }}
        >
          <Membershipicon focused />
          <Text style={styles.labelFocused}>Membership</Text>
        </View>
      );
    } else {
      return (
        <View
          style={{
            alignItems: "center",
            height: 75,
            width: 75,
            justifyContent: "space-between",
            alignSelf: "center",
          }}
        >
          <Membershipicon />
          <Text style={styles.label}>Membership</Text>
        </View>
      );
    }
  }
  function NowView(props) {
    if (props.focused) {
      return (
        <View
          style={{
            alignItems: "center",
            height: 75,
            width: 75,
            justifyContent: "space-between",
          }}
        >
          <Nowroasticon focused />
          <Text style={styles.labelFocused}>Now roasting</Text>
        </View>
      );
    } else {
      return (
        <View
          style={{
            alignItems: "center",
            height: 75,
            justifyContent: "space-between",
            width: 75,
          }}
        >
          <Nowroasticon />
          <Text style={styles.label}>Now roasting</Text>
        </View>
      );
    }
  }
  function MenuView(props) {
    if (props.focused) {
      return (
        <View
          style={{
            alignItems: "center",
            height: 75,
            width: 70,
            justifyContent: "space-between",
            alignSelf: "center",
          }}
        >
          <Menuicon focused />
          <Text style={styles.labelFocused}>Menu</Text>
        </View>
      );
    } else {
      return (
        <View
          style={{
            alignItems: "center",
            height: 75,
            width: 44,
            justifyContent: "space-between",
            alignSelf: "center",
          }}
        >
          <Menuicon />
          <Text style={styles.label}>Menu</Text>
        </View>
      );
    }
  }
  function NewsView(props) {
    if (props.focused) {
      return (
        <View
          style={{
            alignItems: "center",
            height: 75,
            width: 70,
            justifyContent: "space-between",
            alignSelf: "center",
          }}
        >
          <Newsicon focused />
          <Text style={styles.labelFocused}>News</Text>
        </View>
      );
    } else {
      return (
        <View
          style={{
            alignItems: "center",
            height: 75,
            width: 70,
            justifyContent: "space-between",
            alignSelf: "center",
          }}
        >
          <Newsicon />
          <Text style={styles.label}>News</Text>
        </View>
      );
    }
  }

  return (
    <Tab.Navigator
      style={{ backgroundColor: "#FDFDFD" }}
      screenOptions={{
        tabBarIndicatorContainerStyle: { display: "none" },
        tabBarContentContainerStyle: {
          backgroundColor: "#FDFDFD",
        },

        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => <MembershipView focused={focused} />,
          tabBarPressColor: "#FDFDFD",
          tabBarIconStyle: {
            height: "100%",
            width: "100%",
          },
          tabBarStyle: {
            elevation: 0,
            transform: [{ translateX: 15 }],
          },
        }}
        name="Membership"
        children={() => <Membership />}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => <NowView focused={focused} />,
          tabBarPressColor: "#FDFDFD",
          tabBarStyle: {
            elevation: 0,
            transform: [{ translateX: 15 }],
          },
          tabBarIconStyle: {
            height: "100%",
            width: "100%",
            transform: [{ translateX: 5 }],
          },
          swipeEnabled: false,
        }}
        name="Nowroasting"
        children={() => <Nowroasting />}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => <MenuView focused={focused} />,
          tabBarPressColor: "#FDFDFD",
          tabBarIconStyle: {
            height: "100%",
            width: "100%",
          },
          tabBarStyle: {
            elevation: 0,
            transform: [{ translateX: 15 }],
          },
        }}
        name="Menu"
        children={() => <Menu />}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => <NewsView focused={focused} />,
          tabBarPressColor: "white",
          tabBarIconStyle: {
            transform: [{ translateX: -25 }],
            height: "100%",
          },
          tabBarStyle: {
            elevation: 0,
            transform: [{ translateX: 15 }],
          },
        }}
        name="News"
        children={() => <News />}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  label: {
    color: "#202020",
    fontSize: moderateFontScale(10),
  },
  labelFocused: {
    fontSize: moderateFontScale(10),
    color: "#202020",
  },
});
