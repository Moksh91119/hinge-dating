import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "../components/ButtonComponent";
import {
  getRegistrationProgress,
  saveRegistrationProgress,
} from "../registrationUtils";

const HomeTownScreen = () => {
  const [homeTown, setHomeTown] = useState("");
  const navigation = useNavigation();
  useEffect(() => {
    getRegistrationProgress("HomeTown").then((progressData) => {
      if (progressData) {
        setHomeTown(progressData.homeTown || "");
      }
    });
  }, []);
  const handleNext = () => {
    if (homeTown.trim() !== "") {
      saveRegistrationProgress("HomeTown", { homeTown });
    }
    navigation.navigate("Photos");
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
            <AntDesign name="hearto" size={26} color="black" />
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
          What's your hometown?
        </Text>

        <TextInput
          autoFocus={true}
          value={homeTown}
          onChangeText={(text) => setHomeTown(text)}
          placeholder="HomeTown"
          placeholderTextColor={"#BEBEBE"}
          style={{
            width: 340,
            marginVertical: 10,
            marginTop: 25,
            borderBottomWidth: 1,
            borderBottomColor: "black",
            paddingBottom: 10,
            fontFamily: "sans-serif-condensed",
            fontSize: homeTown ? 22 : 22,
          }}
        />

        <TouchableOpacity onPress={handleNext} activeOpacity={0.8}>
         <ButtonComponent title="Next" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeTownScreen;

const styles = StyleSheet.create({});
