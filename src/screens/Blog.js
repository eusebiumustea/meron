import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Searchicon from "../assets/icons/Searchicon";
import { newsdata } from "./Blog/Events";
import BlogNav from "../components/BlogNav";
import { moderateFontScale } from "../normalizeSize";
export default function Blog() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState("");
  function onUserStartSearch() {
    setData(newsdata.map((data) => data.title));
  }
  return (
    <View style={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>What would go with your coffe?</Text>
        <View style={styles.searchBar}>
          <TouchableOpacity onPress={() => onUserStartSearch(search)}>
            <Searchicon />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            keyboardType="web-search"
            placeholder="Search"
            placeholderTextColor={"#6A6A6A"}
            value={data}
            onChangeText={() => setSearch()}
          />
        </View>
      </View>
      <BlogNav />
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
    height: "35%",
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
    alignSelf: "center",
    width: "85%",
    color: "#202020",
    fontSize: moderateFontScale(28),
    paddingRight: 100,
  },
});
