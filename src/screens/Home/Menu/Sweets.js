import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Searchicon from "../../../assets/icons/Searchicon";
import BlackBackIcon from "../../../assets/icons/BlackBackIcon";
import { useNavigation } from "@react-navigation/native";
import { moderateFontScale } from "../../../normalizeSize";
export default function Sweets() {
  const navigation = useNavigation();
  return (
    <View style={styles.content}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "85%",
            alignSelf: "center",
          }}
        >
          <TouchableOpacity onPress={navigation.goBack}>
            <BlackBackIcon />
          </TouchableOpacity>
          <Text style={styles.title}>Pastry & Sweets</Text>
        </View>
        <View style={styles.searchBar}>
          <TouchableOpacity>
            <Searchicon />
          </TouchableOpacity>

          <TextInput
            style={styles.input}
            keyboardType="web-search"
            placeholder="Search"
            placeholderTextColor={"#6A6A6A"}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#FDFDFD",
    flex: 1,
  },
  header: {
    backgroundColor: "#FDFDFD",
    width: "100%",
    height: "25%",
    justifyContent: "space-evenly",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#6A6A6A",
    justifyContent: "space-evenly",
    width: "85%",
    alignSelf: "center",
  },
  input: {
    width: "80%",
    height: 40,
    alignSelf: "center",
    fontSize: moderateFontScale(14),
  },
  title: {
    color: "#202020",
    fontSize: moderateFontScale(28),
  },
});
