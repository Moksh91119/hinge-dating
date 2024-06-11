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
import React, { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "../components/ButtonComponent";
import { saveRegistrationProgress } from "../registrationUtils";
const PasswordScreen = () => {
  const [password, setPassword] = useState("");
  const nevigation = useNavigation();
  const handleNext = () => {
    if(password.trim() !== "") {
      saveRegistrationProgress("Password", { password });
    }
    nevigation.navigate("Birth");
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
            <AntDesign name="lock1" size={26} color="black" />
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
          Create a password
        </Text>
        <TextInput
          autoFocus={true}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Enter your password"
          placeholderTextColor={"#BEBEBE"}
          style={{
            width: 340,
            marginVertical: 10,
            marginTop: 25,
            borderBottomWidth: 1,
            borderBottomColor: "black",
            paddingBottom: 10,
            fontFamily: "sans-serif-condensed",
            fontSize: password ? 22 : 22,
          }}
        />
        <Text style={{ color: "grey", fontSize: 15, marginTop: 7 }}>
          Note: Your details will be safe with us
        </Text>
        <TouchableOpacity onPress={handleNext} activeOpacity={0.8}>
          <ButtonComponent title="Next" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordScreen;

const styles = StyleSheet.create({});
