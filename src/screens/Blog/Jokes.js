import React, { useEffect, useState } from "react";
import {
  Button,
  View,
  Text,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from "react-native";
import { moderateScale } from "../../normalizeSize";

export default function Jokes() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const getJoke = async () => {
    setLoading(true),
      await fetch("https://official-joke-api.appspot.com/random_joke").then(
        (response) =>
          response
            .json()
            .then(
              (data) => setText(data.setup + "  " + data.punchline),
              setLoading(false)
            )
      );
  };
  function Joke() {
    if (loading) {
      return <ActivityIndicator size={"large"} />;
    }
    return <Text>{text}</Text>;
  }
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <View
        style={{
          width: "60%",
          alignSelf: "center",
          paddingBottom: moderateScale(30),
        }}
      >
        <Button title="Get a joke" onPress={() => getJoke()} color={"teal"} />
      </View>
      <Text
        style={{
          fontSize: 25,
          color: "black",
          fontStyle: "italic",
          alignSelf: "center",
        }}
      >
        <Joke />
      </Text>
    </View>
  );
}
