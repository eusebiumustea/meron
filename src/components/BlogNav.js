import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import Events from "./../screens/Blog/Events";
import Latestnews from "./../screens/Blog/Latestnews";
const Tab = createMaterialTopTabNavigator();
import { StyleSheet, Text, View } from "react-native";
import { moderateFontScale } from "../normalizeSize";
import Jokes from "../screens/Blog/Jokes";
export default function BlogNav() {
  const navigationData = [
    {
      title: "Latestnews",
      Icon: LatestNewsIcon,
      screen: Latestnews,
    },
    {
      title: "Events",
      Icon: Peopleofmeron,
      screen: Events,
    },
    {
      title: "Jokes",
      Icon: JokesIcon,
      screen: Jokes,
    },
  ];
  function LatestNewsIcon(props) {
    if (props.focused) {
      return (
        <View style={{ borderBottomWidth: 1, borderBottomColor: "#F7D703" }}>
          <Text style={styles.label}>latest News</Text>
        </View>
      );
    } else {
      return <Text style={styles.label}>latest News</Text>;
    }
  }
  function Peopleofmeron(props) {
    if (props.focused) {
      return (
        <View style={{ borderBottomWidth: 1, borderBottomColor: "#F7D703" }}>
          <Text style={styles.label}>#peopleofmeron</Text>
        </View>
      );
    } else {
      return <Text style={styles.label}>#peopleofmeron</Text>;
    }
  }
  function EventsIcon(props) {
    if (props.focused) {
      return (
        <View style={{ borderBottomWidth: 1, borderBottomColor: "#F7D703" }}>
          <Text style={styles.label}>events</Text>
        </View>
      );
    } else {
      return <Text style={styles.label}>events</Text>;
    }
  }
  function JokesIcon(props) {
    if (props.focused) {
      return (
        <View style={{ borderBottomWidth: 1, borderBottomColor: "#F7D703" }}>
          <Text style={styles.label}>Jokes</Text>
        </View>
      );
    } else {
      return <Text style={styles.label}>Jokes</Text>;
    }
  }
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          display: "none",
        },
        tabBarScrollEnabled: true,
        tabBarShowLabel: false,
      }}
    >
      {navigationData.map((data) => (
        <Tab.Screen
          key={data.title}
          data={data}
          name={data.title}
          options={{
            tabBarPressColor: "#FDFDFD",
            tabBarIcon: data.Icon,
            tabBarStyle: {
              elevation: 0,
            },
            tabBarIconStyle: {
              width: "100%",
            },
          }}
          component={data.screen}
        />
      ))}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  label: {
    color: "#202020",
    fontSize: moderateFontScale(12),
  },
});
