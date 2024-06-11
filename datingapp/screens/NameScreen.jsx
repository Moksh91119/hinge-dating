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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "../components/ButtonComponent";
import { getRegistrationProgress, saveRegistrationProgress } from "../registrationUtils";

const NameScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigation = useNavigation();
  useEffect(() => {
    getRegistrationProgress("Name").then(progressData => {
      if(progressData) {
        setFirstName(progressData.firstName || '');
        setLastName(progressData.lastName || '');
      }
    });
  }, [])
  const handleNext = () => {
    if(firstName.trim() !== "") {
      saveRegistrationProgress("Name", { firstName, lastName })
    }
    navigation.navigate("Email");
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <Text style={{ marginTop: 50, textAlign: "center", color: "grey" }}>
        NO BACKGROUND CHECKS ARE CONDUCTED
      </Text>
      <View style={{ marginTop: 30, marginHorizontal: 20 }}>
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
            <MaterialCommunityIcons
              name="newspaper-variant-outline"
              size={26}
              color="black"
            />
          </View>

          <Image
            style={{ width: 100, height: 40 }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/10613/10613685.png",
            }}
          />
        </View>
        <View style={{ marginTop: 30 }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              fontFamily: "sans-serif-condensed",
            }}
          >
            What's your name?
          </Text>
          <TextInput
            autoFocus={true}
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
            placeholder="First name (required)"
            placeholderTextColor={"#BEBEBE"}
            style={{
              width: 340,
              marginVertical: 10,
              marginTop: 25,
              borderBottomWidth: 1,
              borderBottomColor: "black",
              paddingBottom: 10,
              fontFamily: "sans-serif-condensed",
              fontSize: firstName ? 22 : 22,
            }}
          />

          <TextInput
            value={lastName}
            onChangeText={(text) => setLastName(text)}
            placeholder="Last name"
            placeholderTextColor={"#BEBEBE"}
            style={{
              width: 340,
              marginVertical: 10,
              marginTop: 20,
              borderBottomWidth: 1,
              borderBottomColor: "black",
              paddingBottom: 10,
              fontFamily: "sans-serif-condensed",
              fontSize: lastName ? 22 : 22,
            }}
          />
          <Text style={{ fontSize: 15, color: "grey", fontWeight: "500" }}>
            Last name is optional
          </Text>
        </View>
        <TouchableOpacity onPress={handleNext} activeOpacity={0.8}>
          <ButtonComponent title="Next" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NameScreen;

const styles = StyleSheet.create({});
