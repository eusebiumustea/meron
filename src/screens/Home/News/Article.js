import React, { useState } from "react";
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import BackButton from "../../../assets/icons/BackButton";
import { useNavigation } from "@react-navigation/native";
export default function Article() {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  const { height, width } = Dimensions.get("window");
  const [value, setValue] = useState(-79);
  const data = {
    image: {
      uri: "https://romaniatourism.com/images/cluj-napoca/cluj-napoca-1.jpg",
    },
    reactangleAsset: require("./../../../assets/images/Rectangle45.png"),
    title: "Headline blog post",
    text: "Last week we launched a new location in Cluj-Napoca, in a spot well-known for its eclectic audience and coffee lovers: Meron Opera. Besides developing an excellent product, our focus includes also design. Design is a key element for us because we like to complete your coffee experience with a clean space, wide street windows, nice industrial touches, premium furniture and elements that you can recognize in every Meron locationWe had a new approach for this location and we think it would be great to have you backstage, to see how we plan and implement our concept from A to Z, together with our designer",
  };

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <ImageBackground source={data.image} style={styles.image}>
        <TouchableOpacity
          onPress={() => goBack()}
          style={{
            top: 55,
            width: 80,
            alignItems: "center",
          }}
        >
          <BackButton />
        </TouchableOpacity>
      </ImageBackground>
      <ImageBackground
        source={data.reactangleAsset}
        style={{
          width: "100%",
          height: "100%",
          transform: [{ translateY: -79 }],
        }}
        resizeMode="stretch"
      >
        <View style={styles.content}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.text}>{data.text}</Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 367,
  },
  content: {
    flexDirection: "column",
    margin: 33,
    paddingTop: "20%",
  },
  title: {
    fontSize: 24,
    color: "black",
  },
  text: {
    fontSize: 12,
    top: 35,
    lineHeight: 28,
  },
});
