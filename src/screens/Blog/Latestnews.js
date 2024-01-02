import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  Button,
} from "react-native";
import { moderateFontScale } from "../../normalizeSize";
export default function Latestnews() {
  const newsdata = [
    {
      image: {
        uri: "https://media.istockphoto.com/id/500238157/photo/cluj-napoca-romania.jpg?s=612x612&w=0&k=20&c=MpYIu8ugR2FeqOGciy-l6poPdTs59qPy_AMWWw0NQZA=",
      },
      title: "Cluj",
    },
    {
      image: {
        uri: "https://i.guim.co.uk/img/media/ccc826cd2961f5dc64b3e1283ac4224eab46a77f/0_383_5746_3448/master/5746.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=a3eb30e0c63d3ff11e88502f15d307c4",
      },
      title: "Title",
    },
    {
      image: {
        uri: "https://holaromania.com/wp-content/uploads/2020/08/centro-cluj-napoca.jpg",
      },
      title: "Statuie",
    },
    {
      image: {
        uri: "https://rolandia.eu/file/MC40ZGUzOC5DbHVqIE5hcG9jYSAoMSkuanBnLnR4dA==",
      },
      title: "Cluj",
    },
    {
      image: {
        uri: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fd/61/cluj-napoca.jpg?w=700&h=500&s=1",
      },
      title: "Panorama",
    },
  ];

  return (
    <ScrollView style={{ backgroundColor: "#FDFDFD", flex: 1 }}>
      <View style={styles.content}>
        {newsdata.map((data, index) => (
          <View style={styles.card} data={data} key={index}>
            <Image style={styles.image} source={data.image} />
            <Text style={styles.title}>{data.title}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignSelf: "center",
    paddingBottom: "10%",
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
  },
});
