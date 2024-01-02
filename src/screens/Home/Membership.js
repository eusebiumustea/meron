import React, { useEffect, useState, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  ScrollView,
  ImageBackground,
} from "react-native";
import Point from "../../assets/icons/Point";
import Learnmore from "../../assets/icons/Learnmore";
import ProductCardlogo from "../../assets/ProductCardLogo";
import MeronTextLogo from "../../assets/MeronTextLogo";
import MeronLogo from "../../assets/MeronLogo";
import { moderateFontScale, moderateScale } from "../../normalizeSize";
export default function Membership() {
  const [card, setCard] = useState(false);
  const [color, setColor] = useState("black");
  const [focused, setFocused] = useState(false);
  const colors = {
    def: "black",
    green: "green",
    yellow: "#F7D703",
    red: "red",
    cyan: "cyan",
    blue: "blue",
    aquamrine: "aquamarine",
  };

  const datalist = [
    {
      text: "10% discount in all Meron locations.",
    },
    {
      text: "exclusive event invites.",
    },
    {
      text: "exclusive acces to new products before anyone else",
    },
  ];
  const dataCard = {
    discount: "20%",
  };

  return (
    <ScrollView
      style={{
        backgroundColor: "#FDFDFD",
      }}
    >
      <View style={styles.cardView}>
        <View style={[styles.productCard, { backgroundColor: color }]}>
          <View
            style={{
              alignSelf: "center",
              flexDirection: "column",
              height: "100%",
              justifyContent: "center",
            }}
          >
            <ProductCardlogo />
          </View>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              transform: [{ translateY: -40 }],
              margin: 11,
            }}
          >
            <Text style={styles.discount}>{dataCard.discount}</Text>
            <MeronTextLogo />
          </View>
        </View>
      </View>
      <View style={styles.Options}>
        <ScrollView horizontal>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setColor(colors.def)}
            style={{
              width: 50,
              height: 50,
              backgroundColor: "black",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white" }}>Default</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setColor(colors.green)}
            activeOpacity={0.9}
            style={{
              width: 50,
              height: 50,
              backgroundColor: colors.green,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MeronLogo style={color === "green" ? styles.show : styles.hide} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setColor(colors.yellow)}
            activeOpacity={0.5}
            style={[
              {
                width: 50,
                height: 50,
                backgroundColor: "#F7D703",
                alignItems: "center",
                justifyContent: "center",
              },
            ]}
          >
            <MeronLogo
              style={color === "#F7D703" ? styles.show : styles.hide}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setColor(colors.red)}
            activeOpacity={0.5}
            style={{
              width: 50,
              height: 50,
              backgroundColor: "red",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MeronLogo style={color === "red" ? styles.show : styles.hide} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setColor(colors.blue)}
            activeOpacity={0.5}
            style={{
              width: 50,
              height: 50,
              backgroundColor: "blue",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MeronLogo style={color === "blue" ? styles.show : styles.hide} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setColor(colors.cyan)}
            activeOpacity={0.5}
            style={{
              width: 50,
              height: 50,
              backgroundColor: "cyan",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MeronLogo style={color === "cyan" ? styles.show : styles.hide} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setColor(colors.aquamrine)}
            activeOpacity={0.5}
            style={{
              width: 50,
              height: 50,
              backgroundColor: colors.aquamrine,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MeronLogo
              style={color === "aquamarine" ? styles.show : styles.hide}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.content}>
        <View style={styles.info}>
          <Text style={styles.title}>What’s in it for me?</Text>
          <View style={styles.list}>
            <View style={styles.row}>
              <Point />
              <Text style={styles.text}>{datalist[0].text}</Text>
            </View>
            <View style={styles.row}>
              <Point />
              <Text style={styles.text}>{datalist[1].text}</Text>
            </View>
            <View style={styles.row}>
              <Point />
              <Text style={styles.text}>{datalist[2].text}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={
              (styles.button,
              {
                alignSelf: "center",
                width: "86%",
              })
            }
          >
            <Learnmore />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    alignSelf: "center",
    flexDirection: "row",
    paddingTop: 5,
    width: 290,
    paddingRight: "15%",
  },
  info: {
    alignSelf: "center",
    width: 290,
    paddingTop: moderateScale(20),
  },
  title: {
    color: "#202020",
    fontSize: moderateFontScale(20),
  },
  text: {
    color: "#6F6F6F",
    fontSize: moderateFontScale(13),
    paddingLeft: 16,
  },
  list: { paddingBottom: 17, paddingTop: moderateScale(26) },
  cardView: {
    width: "100%",
    height: 185,
  },
  productCard: {
    width: "95%",
    alignSelf: "center",
    borderRadius: 5,
    height: 185,
  },
  discount: {
    fontSize: moderateFontScale(16),
    color: "white",
  },
  show: {
    display: "flex",
  },
  hide: {
    display: "none",
  },
  Options: {
    width: "90%",
    flexDirection: "row",
    alignSelf: "center",
  },
  content: {
    width: "95%",
    alignSelf: "center",
  },
});
