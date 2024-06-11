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
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "../components/ButtonComponent";
import {
  getRegistrationProgress,
  saveRegistrationProgress,
} from "../registrationUtils";

const LookingFor = () => {
  const [lookingFor, setLookingFor] = useState("");
  const navigation = useNavigation();
  useEffect(() => {
    getRegistrationProgress("LookingFor").then((progressData) => {
      if (progressData) {
        setLookingFor(progressData.lookingFor || "");
      }
    });
  }, []);

  const handleNext = () => {
    if (lookingFor.trim() !== "") {
      saveRegistrationProgress("LookingFor", { lookingFor });
    }
    navigation.navigate("Hometown");
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
          What are you looking for?
        </Text>

        <View style={{ marginTop: 30 }}>
          <View>
            <Pressable
              onPress={() => setLookingFor("Life Partner")}
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
                Life Partner
              </Text>
              <FontAwesome
                name="circle"
                size={26}
                color={lookingFor == "Life Partner" ? "#581845" : "#F0F0F0"}
              />
            </Pressable>
          </View>
          <View>
            <Pressable
              onPress={() => setLookingFor("Long-term Relationship")}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingVertical: 10,
                borderBottomColor: "grey",
                borderBottomWidth: 1,
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "500" }}>
                Long-term Relationship
              </Text>
              <FontAwesome
                name="circle"
                size={26}
                color={
                  lookingFor == "Long-term Relationship" ? "#581845" : "#F0F0F0"
                }
              />
            </Pressable>
          </View>
          <View>
            <Pressable
              onPress={() => setLookingFor("Short-term Relationship")}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingVertical: 10,
                borderBottomColor: "grey",
                borderBottomWidth: 1,
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "500" }}>
                Short-term Relationship
              </Text>
              <FontAwesome
                name="circle"
                size={26}
                color={
                  lookingFor == "Short-term Relationship"
                    ? "#581845"
                    : "#F0F0F0"
                }
              />
            </Pressable>
          </View>
          <View>
            <Pressable
              onPress={() =>
                setLookingFor("Long-term Relationship open to short-term")
              }
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingVertical: 10,
                borderBottomColor: "grey",
                borderBottomWidth: 1,
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "500" }}>
                Long-term Relationship open to short-term
              </Text>
              <FontAwesome
                name="circle"
                size={26}
                color={
                  lookingFor == "Long-term Relationship open to short-term"
                    ? "#581845"
                    : "#F0F0F0"
                }
              />
            </Pressable>
          </View>
          <View>
            <Pressable
              onPress={() =>
                setLookingFor("Short-term Relationship open to long-term")
              }
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingVertical: 10,
                borderBottomColor: "grey",
                borderBottomWidth: 1,
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "500" }}>
                Short-term Relationship open to long-term
              </Text>
              <FontAwesome
                name="circle"
                size={26}
                color={
                  lookingFor == "Short-term Relationship open to long-term"
                    ? "#581845"
                    : "#F0F0F0"
                }
              />
            </Pressable>
          </View>
          <View>
            <Pressable
              onPress={() => setLookingFor("Figuring out my dating goals")}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingVertical: 10,
                borderBottomColor: "grey",
                borderBottomWidth: 1,
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "500" }}>
                Figuring out my dating goals
              </Text>
              <FontAwesome
                name="circle"
                size={26}
                color={
                  lookingFor == "Figuring out my dating goals"
                    ? "#581845"
                    : "#F0F0F0"
                }
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

export default LookingFor;

const styles = StyleSheet.create({});
