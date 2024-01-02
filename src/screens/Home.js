import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import PageNav from "../components/PageNav";
import { moderateFontScale } from "../normalizeSize";

export default function Home() {
  const Anim = useRef(new Animated.Value(0)).current;
  const [option, setOption] = useState(false);
  useEffect(() => {
    if (option) {
      Animated.timing(Anim, {
        toValue: 1,
        duration: 150,
        easing: Easing.cubic,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(Anim, {
        toValue: 0,
        duration: 150,
        easing: Easing.cubic,
        useNativeDriver: true,
      }).stop();
    }
  }, [option]);
  const startAnim = (value) => {
    if (value) {
      Animated.timing(Anim, {
        toValue: 1,
        duration: 150,
        easing: Easing.cubic,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(Anim, {
        toValue: 0,
        duration: 150,
        easing: Easing.cubic,
        useNativeDriver: true,
      }).stop();
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={[option ? styles.hideMessage : styles.welcome]}>
          <Text style={styles.title}>Hi, </Text>
          <Text style={styles.text}>Watcha brewing?</Text>
        </View>
      </View>
      <PageNav />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#FDFDFD",
    height: "18%",
    alignItems: "center",
  },
  title: {
    fontSize: moderateFontScale(28),
    color: "#202020",
    textTransform: "uppercase",
  },
  text: {
    fontSize: moderateFontScale(12),
    lineHeight: 18,
    color: "#202020",
    top: 6,
  },
  image: { width: 44, height: 44, borderRadius: 50 },
  hideMessage: {
    display: "none",
  },
  opened: {},
  menuBehind: {
    backgroundColor: "rgba(0, 0, 0, 0.21)",
    position: "absolute",
    width: "30%",
    height: "100%",
    alignSelf: "flex-end",
    zIndex: 999,
  },
});
