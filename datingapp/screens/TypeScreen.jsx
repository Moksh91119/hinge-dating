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
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "../components/ButtonComponent";
import {
  getRegistrationProgress,
  saveRegistrationProgress,
} from "../registrationUtils";
const TypeScreen = () => {
  const [type, setType] = useState("");
  const navigation = useNavigation();
  useEffect(() => {
    getRegistrationProgress("Type").then((progressData) => {
      if (progressData) {
        setType(progressData.type || "");
      }
    });
  }, []);
  const handleNext = () => {
    if (type.trim() !== "") {
      saveRegistrationProgress("Type", { type });
    }
    navigation.navigate("Dating");
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
          What's your sexuality?
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "grey",
            marginTop: 20,
          }}
        >
          Users are matched based on the sexuality available below. You can add
          more about your sexuality afterwards.
        </Text>

        <View style={{ marginTop: 30 }}>
          <View>
            <Pressable
              onPress={() => setType("Straight")}
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
              <Text style={{ fontSize: 15, fontWeight: "500" }}>Straight</Text>
              <FontAwesome
                name="circle"
                size={26}
                color={type == "Straight" ? "#581845" : "#F0F0F0"}
              />
            </Pressable>
          </View>
          <View>
            <Pressable
              onPress={() => setType("Gay")}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingVertical: 10,
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "500" }}>Gay</Text>
              <FontAwesome
                name="circle"
                size={26}
                color={type == "Gay" ? "#581845" : "#F0F0F0"}
              />
            </Pressable>
          </View>
          <View>
            <Pressable
              onPress={() => setType("Lesbian")}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingVertical: 10,
                borderTopColor: "grey",
                borderTopWidth: 1,
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "500" }}>Lesbian</Text>
              <FontAwesome
                name="circle"
                size={26}
                color={type == "Lesbian" ? "#581845" : "#F0F0F0"}
              />
            </Pressable>
          </View>
          <View>
            <Pressable
              onPress={() => setType("Bisexual")}
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
              <Text style={{ fontSize: 15, fontWeight: "500" }}>Bisexual</Text>
              <FontAwesome
                name="circle"
                size={26}
                color={type == "Bisexual" ? "#581845" : "#F0F0F0"}
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

export default TypeScreen;

const styles = StyleSheet.create({});
