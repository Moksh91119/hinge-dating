import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Fontisto from "react-native-vector-icons/Fontisto";
import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "../components/ButtonComponent";
import { getRegistrationProgress, saveRegistrationProgress } from "../registrationUtils";

const EmailScreen = () => {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();
  useEffect(() => {
    getRegistrationProgress("Email").then(progressData => {
      if(progressData) {
        setEmail(progressData.email || '');
      }
    });
  }, [])
  const handleNext = () => {
    if(email.trim() !== "") {
      saveRegistrationProgress("Email", { email })
    }
    navigation.navigate("Password");
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View style={{ marginTop: 90, marginHorizontal: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              borderWidth: 2,
              borderColor: "black",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Fontisto name="email" size={26} color="black" />
          </View>

          <Image
            style={{ width: 100, height: 40 }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/10613/10613685.png",
            }}
          />
        </View>

        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            fontFamily: "sans-serif-condensed",
            marginTop: 15,
          }}
        >
          Please provide a valid email
        </Text>
        <Text style={{ marginTop: 10, fontSize: 15, color: "grey" }}>
          Email Verification helps us keep the account secure
        </Text>
        <TextInput
          autoFocus={true}
          value={email}
          onChangeText={(email) => setEmail(email)}
          placeholder="Enter your email"
          placeholderTextColor={"#BEBEBE"}
          style={{
            width: 340,
            marginVertical: 10,
            marginTop: 25,
            borderBottomWidth: 1,
            borderBottomColor: "black",
            paddingBottom: 10,
            fontFamily: "sans-serif-condensed",
            fontSize: email ? 22 : 22,
          }}
        />

        <Text style={{ color: "grey", marginTop: 7, fontSize: 15 }}>
          Note: You will be asked to verify your email
        </Text>
        <TouchableOpacity onPress={handleNext} activeOpacity={0.8}>
          <ButtonComponent title="Next" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EmailScreen;

const styles = StyleSheet.create({});
