import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import PagerView from "react-native-pager-view";
import { moderateFontScale, moderateScale } from "../../normalizeSize";
export default function Nowroasting() {
  const data = [
    {
      image: require("../../assets/images/columbia.png"),
      name: "Colombia Bucharamanga",
    },
    {
      image: require("../../assets/images/columbia.png"),
      name: "Colombia Bucharamanga",
    },
    {
      image: require("../../assets/images/columbia.png"),
      name: "Colombia Bucharamanga",
    },
  ];

  return (
    <PagerView
      style={{
        flex: 1,
        backgroundColor: "#FDFDFD",
      }}
      pageMargin={moderateScale(-65)}
      offscreenPageLimit={40}
      initialPage={1}
    >
      {data.map((data, index) => (
        <TouchableOpacity activeOpacity={1} data={data} key={index}>
          <View style={styles.card}>
            <Image source={data.image} style={styles.image} />
            <Text style={styles.name}>{data.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </PagerView>
  );
}

const styles = StyleSheet.create({
  card: {
    alignSelf: "center",
  },
  name: {
    fontSize: moderateFontScale(12),
    alignSelf: "center",
    paddingTop: moderateScale(20),
  },
  image: {
    alignSelf: "center",
    width: moderateScale(289),
    height: moderateScale(336),
  },
});
