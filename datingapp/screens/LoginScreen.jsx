import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  KeyboardAvoidingView,
  Pressable,
  TextInput,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import LottieView from "lottie-react-native";
import axios from "axios";
import AsyncStorage, {
  useAsyncStorage,
} from "@react-native-async-storage/async-storage";
import { AuthContext } from "../AuthContext";
import { useNavigation } from "@react-navigation/native";
import env from '../env';

const LoginScreen = () => {
  const [option, setOption] = useState("Create account");
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token, isLoading, setToken } = useContext(AuthContext);
  useEffect(() => {
    if (token) {
      navigation.replace("MainStack", { screen: "Main" });
    }
  }, [token, navigation]);
  const signInUser = async () => {
    setOption("Sign In");
    try {
      console.log(email);
      console.log(password);
      const user = {
        email: email,
        password: password,
      };
      const response = await axios.post(`http://${env.IP}:4000/login`, user);
      console.log(response);
      const token = response.data.token;

      // Store the token in AsyncStorage
      await AsyncStorage.setItem("token", token);

      setToken(token);
      // navigation.replace('Main');
    } catch (error) {
      console.log("error", error);
    }
  };

  const createAccount = async () => {
    setOption("Create account");
    navigation.navigate("Basic");
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
          height: 200,
          backgroundColor: "#FF6B3C",
          width: "100%",
          borderBottomLeftRadius: 100,
          borderBottomRightRadius: 100,
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 25,
          }}
        >
          <Image
            style={{ width: 150, height: 80, resizeMode: "contain" }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/4310/4310217.png",
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            textAlign: "center",
            fontSize: 23,
            color: "white",
            fontFamily: "sans-serif-condensed",
            fontWeight: "800",
          }}
        >
          Let's get started
        </Text>
      </View>

      <View
        // behavior="padding"
        // style={{ flex: 1, backgroundColor: "white" }}
        // enabled
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Image
            style={{ width: 100, height: 80, resizeMode: "cover" }}
            source={{
              uri: "https://branditechture.agency/brand-logos/wp-content/uploads/wpdm-cache/Hinge-App-900x0.png",
            }}
          />
        </View>

        <View style={{ marginTop: 20, marginHorizontal: 25 }}>
          {option == "Sign In" ? (
            <>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                  backgroundColor: "#FF6B3C",
                  paddingVertical: 5,
                  borderRadius: 5,
                  marginTop: 30,
                }}
              >
                <MaterialIcons
                  style={{ marginLeft: 8 }}
                  name="email"
                  size={24}
                  color="white"
                />
                <TextInput
                  placeholder="Enter your email"
                  placeholderTextColor="white"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  style={{
                    color: "white",
                    marginVertical: 10,
                    width: 300,
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                  backgroundColor: "#FF6B3C",
                  paddingVertical: 5,
                  borderRadius: 5,
                  marginTop: 30,
                }}
              >
                <AntDesign
                  style={{ marginLeft: 8 }}
                  name="lock"
                  size={24}
                  color="white"
                />
                <TextInput
                  placeholder="Enter your Password"
                  secureTextEntry={true}
                  placeholderTextColor="white"
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  style={{
                    color: "white",
                    marginVertical: 10,
                    width: 300,
                  }}
                />
              </View>

              <View
                style={{
                  marginTop: 12,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text>Keep me logged in</Text>
                <Text>Forgot Password</Text>
              </View>
            </>
          ) : (
            <View>
              <LottieView
                source={require("../assets/login.json")}
                style={{
                  height: 180,
                  width: 300,
                  alignSelf: "center",
                  marginTop: 40,
                  justifyContent: "center",
                }}
                autoPlay
                loop={true}
                speed={0.7}
              />
            </View>
          )}
        </View>

        <View style={{ marginTop: 40 }} />

        <Pressable
          onPress={createAccount}
          //   onPress={() => setOption("Create account")}
          style={{
            width: 300,
            backgroundColor:
              option == "Create account" ? "#FF6B3C" : "transparent",
            borderRadius: 6,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 15,
            borderRadius: 30,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: option == "Create account" ? "white" : "black",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Create account
          </Text>
        </Pressable>

        <Pressable
          onPress={signInUser}
          //   onPress={() => setOption("Sign In")}
          style={{
            width: 300,
            backgroundColor: option == "Sign In" ? "#FF6B3C" : "transparent",
            borderRadius: 6,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 15,
            borderRadius: 30,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: option == "Sign In" ? "white" : "black",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Sign In
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
