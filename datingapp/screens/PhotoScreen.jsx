import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  Pressable,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "../components/ButtonComponent";
import * as ImagePicker from "expo-image-picker";
import {
  getRegistrationProgress,
  saveRegistrationProgress,
} from "../registrationUtils";

const PhotoScreen = () => {
  const [imageUrls, setImageUrls] = useState(["", "", "", "", "", ""]);
  const [imageUrl, setImageUrl] = useState("");
  const navigation = useNavigation();
  const handleAddImage = () => {
    // Find the first empty slot in the array
    const index = imageUrls.findIndex((url) => url === "");
    if (index !== -1) {
      const updatedUrls = [...imageUrls];
      updatedUrls[index] = imageUrl;
      setImageUrls(updatedUrls);
      setImageUrl("");
    }
  };
  useEffect(() => {
    // Fetch the saved image URLs from AsyncStorage
    getRegistrationProgress("Photos").then((progressData) => {
      if (progressData && progressData.imageUrls) {
        setImageUrls(progressData.imageUrls);
      }
    });
  }, []);

  const handleNext = () => {
    saveRegistrationProgress("Photos", { imageUrls });
    navigation.navigate("Prompts");
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
              borderColor: "black",
              borderWidth: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MaterialIcons name="photo-camera-back" size={22} color="black" />
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
            fontFamily: "sans-serif-light",
            marginTop: 15,
          }}
        >
          Pick your videos and photos
        </Text>
        <View style={{ marginTop: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",

              gap: 20,
            }}
          >
            {imageUrls.slice(0, 3).map((url, index) => (
              <Pressable
                key={index}
                style={{
                  borderColor: "#581845",
                  borderWidth: url ? 0 : 2,
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderStyle: "dashed",
                  borderRadius: 10,
                  height: 100,
                }}
              >
                {url ? (
                  <Image
                    source={{ uri: url }}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 10,
                      resizeMode: "cover",
                    }}
                  />
                ) : (
                  <EvilIcons name="image" size={22} color="black" />
                )}
              </Pressable>
            ))}
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 20,
            }}
          >
            {imageUrls.slice(3, 6).map((url, index) => (
              <Pressable
                key={index}
                style={{
                  borderColor: "#581845",
                  borderWidth: url ? 0 : 2,
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderStyle: "dashed",
                  borderRadius: 10,
                  height: 100,
                }}
              >
                {url ? (
                  <Image
                    source={{ uri: url }}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 10,
                      resizeMode: "cover",
                    }}
                  />
                ) : (
                  <EvilIcons name="image" size={22} color="black" />
                )}
              </Pressable>
            ))}
          </View>
        </View>

        <KeyboardAvoidingView
          behavior="padding"
          // style={{ flex: 1, backgroundColor: "white" }}
          enabled
        >
          <View style={{ marginTop: 25 }}>
            <Text>Add pictures of yourself</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                paddingVertical: 5,
                borderRadius: 5,
                marginTop: 10,
                backgroundColor: "#DCDCDC",
              }}
            >
              <EvilIcons
                style={{ marginLeft: 8 }}
                name="image"
                size={22}
                color="black"
              />
              <TextInput
                value={imageUrl}
                onChangeText={(text) => setImageUrl(text)}
                style={{ color: "gray", marginVertical: 10, width: 300 }}
                placeholder="enter your image url"
              />
            </View>
            <Button
              onPress={handleAddImage}
              style={{ marginTop: 5 }}
              title="Add Image"
            />
          </View>
        </KeyboardAvoidingView>

          <TouchableOpacity onPress={handleNext} activeOpacity={0.8}>
            <ButtonComponent title="Next" />
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default PhotoScreen;

const styles = StyleSheet.create({});
