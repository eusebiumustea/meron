import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { moderateFontScale } from "../../normalizeSize";
export default function News() {
  const navigation = useNavigation();
  const data = {
    image: {
      uri: "https://media.istockphoto.com/id/500238157/photo/cluj-napoca-romania.jpg?s=612x612&w=0&k=20&c=MpYIu8ugR2FeqOGciy-l6poPdTs59qPy_AMWWw0NQZA=",
    },
    title: "Headline for news post",
  };
  return (
    <ScrollView style={{ backgroundColor: "#FDFDFD" }}>
      <View style={styles.content}>
        <TouchableOpacity
          style={{ alignSelf: "center" }}
          onPress={() => navigation.navigate("Article")}
          activeOpacity={0.9}
        >
          <View style={styles.card}>
            <Image style={styles.image} source={data.image} />
            <Text style={styles.title}>{data.title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignSelf: "center",
    paddingBottom: "10%",
    top: "5%",
  },
  card: {
    paddingBottom: 35,
    alignSelf: "center",
  },
  image: {
    width: 310,
    height: 150.49,
  },
  title: {
    fontSize: moderateFontScale(12),
    paddingTop: 11,
    color: "#202020",
    width: "65%",
  },
  hideText: {
    display: "none",
  },
});
