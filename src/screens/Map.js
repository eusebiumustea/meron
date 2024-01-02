import React, { useState, useRef, useEffect, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
  Alert,
  Linking,
  DevSettings,
} from "react-native";
import Searchicon2 from "../assets/icons/Searchicon2";
import MeronLogo from "../assets/MeronLogo";
import YellowLine from "../assets/YellowLine";
import Point from "../assets/icons/Point";
import Details from "../assets/icons/Details";
import DirectionSign from "../assets/icons/DirectionSign";
import MapView, { Marker } from "react-native-maps";
import { moderateFontScale, moderateScale } from "../normalizeSize";
import { useNavigation } from "@react-navigation/native";
export default function Map() {
  const [permissionStatus, setPermissionStatus] = useState("");
  const navigation = useNavigation();
  const dataMap = { title: "find your nearest meron coffee shop" };
  const [card, setCard] = useState(false);
  const [openStatus, setOpenStatus] = useState(true);
  const Header = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>{dataMap.title}</Text>
        <TouchableOpacity style={{ width: 30, height: 40 }}>
          <Searchicon2 />
        </TouchableOpacity>
      </View>
    );
  };
  const Anim = useRef(new Animated.Value(0)).current;

  const startAnim = (value = 1) => {
    if (value === 1) {
      setCard(true);
    }
    Animated.timing(Anim, {
      toValue: value,
      duration: 200,
      easing: Easing.sin,
      useNativeDriver: true,
    }).start(() => {
      if (value === 0) {
        setCard(false);
      }
    });
  };
  function goHome() {
    navigation.goBack();
  }

  function openAppInfo() {
    Linking.openSettings();
    // DevSettings.reload();
  }

  return (
    <>
      <MapView
        initialRegion={{
          latitude: 46.750261406177955,
          longitude: 23.53375339819527,
          latitudeDelta: 0.9,
          longitudeDelta: 0.9,
        }}
        loadingEnabled={true}
        loadingIndicatorColor={"yellow"}
        userInterfaceStyle={"light"}
        loadingBackgroundColor={"black"}
        showsUserLocation={true}
        showsTraffic={false}
        pitchEnabled={card ? false : true}
        scrollEnabled={card ? false : true}
        zoomEnabled={card ? false : true}
        zoomControlEnabled={card ? false : true}
        zoomTapEnabled={card ? false : true}
        customMapStyle={require("./../Map-style.json")}
        style={{ flex: 1 }}
      >
        <Marker
          image={require("./../assets/images/Mark.png")}
          coordinate={{
            latitude: 46.750261406177955,
            longitude: 23.53375339819527,
          }}
          tappable={true}
          onPress={card ? () => startAnim(0) : () => startAnim(1)}
        />
      </MapView>
      {card && (
        <TouchableOpacity
          onPress={() => startAnim(0)}
          activeOpacity={1}
          style={{
            position: "absolute",
            alignSelf: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <View
            style={{
              position: "absolute",
              alignSelf: "center",
              top: "50%",
              alignItems: "center",
            }}
          >
            <Animated.View
              style={[
                styles.card,
                {
                  opacity: Anim,
                  transform: [
                    {
                      translateY: Anim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [20, 0],
                      }),
                    },
                  ],
                },
              ]}
            >
              <View style={[styles.content]}>
                <View
                  style={{
                    justifyContent: "space-evenly",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.locationName}>VIVO, FLORESTI</Text>
                  <MeronLogo />
                </View>
                <YellowLine />
                <View
                  style={{
                    justifyContent: "space-evenly",
                    flexDirection: "column",
                    height: 120,
                    paddingTop: moderateScale(5),
                  }}
                >
                  <Text style={styles.streetName}>
                    Strada Avram Iancu 492-50...
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      width: "100%",
                      alignItems: "center",
                    }}
                  >
                    <Text style={styles.status}>Open</Text>
                    <Point />
                    <Text style={styles.TimeClose}>closes 21:00</Text>
                  </View>
                  <View
                    style={{
                      width: "90%",
                      alignItems: "flex-end",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Details")}
                    >
                      <Details />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Animated.View>
            <TouchableOpacity>
              <Animated.View
                style={[
                  styles.directionCard,
                  {
                    opacity: Anim,
                    transform: [
                      {
                        translateY: Anim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [20, 0],
                        }),
                      },
                    ],
                  },
                ]}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <View
                    style={{
                      width: "50%",
                      justifyContent: "center",
                    }}
                  >
                    <View
                      style={{
                        borderWidth: 1,
                        width: "40%",
                        alignSelf: "center",
                        borderStyle: "dashed",
                        borderColor: "gray",
                      }}
                    >
                      <DirectionSign
                        style={{
                          alignSelf: "center",
                        }}
                      />
                    </View>
                  </View>
                  <View style={{ width: "50%" }}>
                    <Text
                      style={{
                        fontSize: moderateFontScale(12),
                        color: "black",
                      }}
                    >
                      directions
                    </Text>
                  </View>
                </View>
              </Animated.View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      )}
      <Header />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: "10%",
    width: "50%",
    transform: [{ translateX: 15 }],
  },
  title: {
    fontSize: moderateFontScale(28),
    color: "black",
    paddingBottom: moderateScale(15),
  },
  card: {
    width: 179,
    height: 204,
    backgroundColor: "white",
    elevation: 2,
    shadowRadius: 3,
    borderRadius: 2,
  },
  hide: {
    display: "none",
  },
  directionCard: {
    width: 185,
    height: 45,
    borderRadius: 5,
    backgroundColor: "#F7D703",
    top: moderateScale(20),
  },
  content: {
    top: moderateScale(10),
  },
  locationName: {
    color: "black",
    width: moderateScale(100),
    fontSize: moderateFontScale(24),
  },
  streetName: {
    fontSize: moderateFontScale(12),
    color: "#4A4A4A",
    width: "85%",
    alignSelf: "center",
  },
  TimeClose: {
    fontSize: moderateFontScale(13),
    color: "#4A4A4A",
    right: 7,
  },
  status: {
    color: "#409B3F",
    fontSize: moderateFontScale(13),
  },
});
