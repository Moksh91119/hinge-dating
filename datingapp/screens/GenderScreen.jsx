import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "../components/ButtonComponent";
import { getRegistrationProgress, saveRegistrationProgress } from "../registrationUtils";

const GenderScreen = () => {
  const [gender, setGender] = useState("");
  const navigation = useNavigation();
  useEffect(() => {
    getRegistrationProgress("Gender").then((progressData) => {
      if (progressData) {
        setGender(progressData.gender || "");
      }
    });
  }, []);
  const handleNext = () => {
    if (gender.trim() !== "") {
      saveRegistrationProgress("Gender", { gender });
    }
    navigation.navigate("Type");
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
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            fontFamily: "sans-serif-condensed",
            marginTop: 15,
          }}
        >
          Which gender describes you the best?
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "grey",
            marginTop: 20,
          }}
        >
          Users are matched based on these three gender groups. You can add more
          about your gender afterwards.
        </Text>
        <View style={{ marginTop: 30 }}>
          <View>
            <Pressable
              onPress={() => setGender("Men")}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingVertical: 10,
                borderTopColor: "grey",
                borderTopWidth: 1,
                borderBottomColor: "grey",
                borderBottomWidth: 1,
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "500" }}>Men</Text>
              <FontAwesome
                name="circle"
                size={26}
                color={gender == "Men" ? "#581845" : "#F0F0F0"}
              />
            </Pressable>
          </View>
          <View>
            <Pressable
              onPress={() => setGender("Women")}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingVertical: 10,
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "500" }}>Women</Text>
              <FontAwesome
                name="circle"
                size={26}
                color={gender == "Women" ? "#581845" : "#F0F0F0"}
              />
            </Pressable>
          </View>
          <View>
            <Pressable
              onPress={() => setGender("Non Binary")}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingVertical: 10,
                borderTopColor: "grey",
                borderTopWidth: 1,
                borderBottomColor: "grey",
                borderBottomWidth: 1,
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "500" }}>
                Non Binary"
              </Text>
              <FontAwesome
                name="circle"
                size={26}
                color={gender == "Non Binary" ? "#581845" : "#F0F0F0"}
              />
            </Pressable>
          </View>
        </View>
        <TouchableOpacity onPress={handleNext} activeOpacity={0.8}>
          <ButtonComponent title="Next" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GenderScreen;

const styles = StyleSheet.create({});
