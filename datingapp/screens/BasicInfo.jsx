import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Pressable,
} from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const Basicinfo = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View style={{ marginTop: 80 }}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            fontFamily: "sans-serif-condensed",
            marginLeft: 20,
          }}
        >
          You're one of a kind.
        </Text>
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            fontFamily: "sans-serif-condensed",
            marginLeft: 20,
            marginTop: 10,
          }}
        >
          Your profile should be too.
        </Text>
      </View>

      <View>
        <LottieView
          style={{
            height: 260,
            width: 300,
            alignSelf: "center",
            marginTop: 40,
            justifyContent: "center",
          }}
          source={require("../assets/love.json")}
          autoPlay
          loop={true}
          speed={0.7}
        />
      </View>

      <Pressable
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
        onPress={() => navigation.navigate("Name")}
      >
        <Text style={{color:'white', fontSize:15, fontWeight:'600'}} >Enter Basic Info</Text>
      </Pressable>
    </View>
  );
};

export default Basicinfo;

const styles = StyleSheet.create({});
