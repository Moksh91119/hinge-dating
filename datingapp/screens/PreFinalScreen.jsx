import React, { useContext, useEffect, useState } from "react";
import { View, Text, Platform, StatusBar, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import LottieView from "lottie-react-native";
import { AuthContext } from "../AuthContext";
import { useNavigation } from "@react-navigation/native";
import { getRegistrationProgress } from "../registrationUtils";
import env from '../env';

const PreFinalScreen = () => {
  const { token, setToken } = useContext(AuthContext);
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (token) {
      navigation.replace("MainStack", { screen: "Main" });
    }
  }, [token]);

  useEffect(() => {
    async function fetchData() {
      const screens = [
        "Name",
        "Email",
        "Password",
        "Birth",
        "Location",
        "Gender",
        "Type",
        "DatingType",
        "LookingFor",
        "HomeTown",
        "Photos",
        "Prompts",
      ];

      let userData = {};

      for (const screenName of screens) {
        const screenData = await getRegistrationProgress(screenName);
        if (screenData) {
          userData = { ...userData, ...screenData };
        }
      }

      setUserData(userData);
    }

    fetchData();
  }, []);

  const clearAllScreenData = async () => {
    try {
      const screens = [
        "Name",
        "Email",
        "Password",
        "Birth",
        "Location",
        "Gender",
        "Type",
        "DatingType",
        "LookingFor",
        "HomeTown",
        "Photos",
        "Prompts",
      ];

      for (const screenName of screens) {
        const key = `registration_progress_${screenName}`;
        await AsyncStorage.removeItem(key);
      }

      console.log("All screen data cleared successfully");
    } catch (error) {
      console.error("Error clearing screen data:", error);
    }
  };

  const registerUser = async () => {
    try {
      const response = await axios.post(
        `http://${env.IP}:4000/register`,
        userData
      );
      const token = response.data.token;
      AsyncStorage.setItem("token", token);
      setToken(token);
      clearAllScreenData();
    } catch (error) {
      console.error("Error registering user:", error);
      // Handle error here
    }
  };
  
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
          All set to register
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
          Setting up your profile
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
        onPress={registerUser}
      >
        <Text style={{ color: "white", fontSize: 15, fontWeight: "600" }}>
          Finish Registering
        </Text>
      </Pressable>
    </View>
  );
};

export default PreFinalScreen;

