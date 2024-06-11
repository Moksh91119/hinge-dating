import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";

import {
  BasicInfo,
  BirthScreen,
  ChatScreen,
  DatingType,
  EmailScreen,
  GenderScreen,
  HomeScreen,
  HomeTownScreen,
  LikesScreen,
  LocationScreen,
  LookingFor,
  NameScreen,
  PasswordScreen,
  PhotoScreen,
  PreFinalScreen,
  ProfileScreen,
  PromptsScreen,
  ShowPromptsScreen,
  TypeScreen,
  SendLikeScreen,
  LoginScreen,
  HandleLikeScreen,
  ChatRoom,
  ProfileDetailsScreen,
  AnimationScreen,
} from "../screens/index";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";
const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const { isLoading, token } = useContext(AuthContext);
  console.log("token:", token);
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
  function BottomTabs() {
    return (
      <Tab.Navigator
        screenOptions={() => ({
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarStyle: { backgroundColor: "#101010" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialCommunityIcons name="alpha" size={35} color="white" />
              ) : (
                <MaterialCommunityIcons
                  name="alpha"
                  size={35}
                  color="#989898"
                />
              ),
          }}
        />

        <Tab.Screen
          name="Likes"
          component={LikesScreen}
          options={{
            tabBarStyle: { backgroundColor: "#101010" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="heart" size={30} color="white" />
              ) : (
                <Entypo name="heart" size={30} color="#989898" />
              ),
          }}
        />

        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            tabBarStyle: { backgroundColor: "#101010" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialIcons
                  name="chat-bubble-outline"
                  size={30}
                  color="white"
                />
              ) : (
                <MaterialIcons
                  name="chat-bubble-outline"
                  size={30}
                  color="#989898"
                />
              ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarStyle: { backgroundColor: "#101010" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons
                  name="person-circle-outline"
                  size={30}
                  color="white"
                />
              ) : (
                <Ionicons
                  name="person-circle-outline"
                  size={30}
                  color="#989898"
                />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }

  const AuthStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Basic"
          component={BasicInfo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Name"
          component={NameScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Email"
          component={EmailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Password"
          component={PasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Birth"
          component={BirthScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Location"
          component={LocationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Gender"
          component={GenderScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Type"
          component={TypeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dating"
          component={DatingType}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LookingFor"
          component={LookingFor}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Hometown"
          component={HomeTownScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Photos"
          component={PhotoScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Prompts"
          component={PromptsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ShowPrompts"
          component={ShowPromptsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PreFinal"
          component={PreFinalScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  };

  function MainStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Animation"
          component={AnimationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SendLike"
          component={SendLikeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HandleLike"
          component={HandleLikeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChatRoom"
          component={ChatRoom}
        />
        <Stack.Screen
          name="Details"
          component={ProfileDetailsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      {token === null || token === "" ? <AuthStack /> : <MainStack />}
      {/* <AuthStack /> */}
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});



