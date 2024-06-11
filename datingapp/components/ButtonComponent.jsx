import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ButtonComponent = (props) => {
  return (
    <View
      style={{
        backgroundColor: "#FF6B3C",
        height: 50,
        width: 300,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 40,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 20,
          fontWeight: "bold",
          fontFamily: "sans-serif-condensed",
        }}
      >
        {props.title}
      </Text>
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({});
