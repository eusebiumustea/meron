import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  ImageBackground,
} from "react-native";
import Coffe from "../../assets/icons/CoffeIcon";
import Food from "../../assets/icons/FoodIcon";
import Noncoffe from "../../assets/icons/NoncoffeIcon";
import Sweets from "../../assets/icons/SweetsIcon";
import { useNavigation } from "@react-navigation/native";
import { moderateFontScale } from "../../normalizeSize";
export default function Menu() {
  const navigation = useNavigation();
  function goToCoffe() {
    navigation.navigate("Coffe");
  }
  function goToNonCoffe() {
    navigation.navigate("NonCoffe");
  }
  function goToFood() {
    navigation.navigate("Food");
  }
  function goToSweets() {
    navigation.navigate("Sweets");
  }
  return (
    <View style={styles.content}>
      <ImageBackground
        source={require("../../assets/images/Group173.png")}
        style={styles.lines}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "105%",
            height: "40%",
          }}
        >
          <TouchableOpacity onPress={() => goToCoffe()}>
            <View style={{ alignItems: "center" }}>
              <Coffe />
              <Text style={styles.label}>Coffee</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => goToNonCoffe()}>
            <View style={{ alignItems: "center" }}>
              <Noncoffe />
              <Text style={styles.label}>Non-Coffee</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "95%",
            height: "50%",
          }}
        >
          <TouchableOpacity onPress={() => goToSweets()}>
            <View style={{ alignItems: "center" }}>
              <Sweets />
              <Text style={styles.label}>Pastry & Sweets</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => goToFood()}>
            <View style={{ alignItems: "center" }}>
              <Food />
              <Text style={styles.label}>Food</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#FDFDFD",
    flex: 1,
  },
  label: {
    fontSize: moderateFontScale(12),
    color: "#202020",
    textAlign: "center",
    paddingTop: 15,
  },
  lines: {
    width: "100%",
    height: "90%",
    alignSelf: "center",
    justifyContent: "center",
  },
});
