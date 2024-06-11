import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Image,
  TextInput,
  Pressable,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import PreFinalScreen from './PreFinalScreen';
import axios from 'axios';
import env from '../env';


const SendLikeScreen = () => {
  const route = useRoute();
  const [comment, setComment] = useState("");
  const navigation = useNavigation();
  const userId = route?.params?.userId;
  console.log(route.params?.userId);
  const likeProfile = async () => {
    try {
      const response = await axios.post(`http://${env.IP}:4000/like-profile`, {
        userId: route.params.userId,
        likedUserId: route.params.likedUserId,
        image: route?.params?.image,
        comment: comment,
      });
      console.log(response.data.message); // Log success message
      if (response.status == 200) {
        navigation.goBack();
      }
      // Handle success: Update UI, show notifications, etc.
    } catch (error) {
      console.error('Error liking profile:', error);
      // Handle error: Show error message, retry logic, etc.
    }
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View
        style={{
          marginTop: "auto",
          marginBottom: "auto",
          marginHorizontal: 40,
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>
          {route?.params?.name}
        </Text>
        <Image
          style={{
            width: "100%",
            height: 350,
            resizeMode: "cover",
            borderRadius: 10,
            marginTop: 20,
          }}
          source={{ uri: route?.params?.image }}
        />
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "black",
            padding: 10,
            margin: 10,
            borderRadius: 10,
          }}
          placeholder="Add a comment"
          value={comment}
          onChangeText={(text) => setComment(text)}
        />

        <View
          style={{
            marginVertical: 12,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFC0CB",
              paddingHorizontal: 14,
              paddingVertical: 10,
              gap: 4,
              borderRadius: 22,
            }}
          >
            <Text>1</Text>
            <Ionicons name="rose-outline" size={22} color="black" />
          </View>
          <Pressable
            onPress={likeProfile}
            style={{
              backgroundColor: "#FFFDD0",
              borderRadius: 20,
              padding: 10,
              flex: 1,
            }}
          >
            <Text style={{ textAlign: "center", fontWeight: "bold" }}>
              Send Like
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SendLikeScreen;

const styles = StyleSheet.create({});
