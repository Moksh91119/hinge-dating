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
} from "react-native";
import React, { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { useNavigation, useRoute } from "@react-navigation/native";
import ButtonComponent from "../components/ButtonComponent";
import { saveRegistrationProgress } from "../registrationUtils";

const PromptsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const handleNext = () => {
    saveRegistrationProgress("Prompts", { prompts: route?.params?.prompts });
    navigation.navigate("PreFinal");
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
            <AntDesign name="eye" size={26} color="black" />
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
          Write your profile answers
        </Text>
        <View style={{marginTop: 20, flexDirection: 'column', gap: 20}}>
          {route?.params?.prompts ? (
            route?.params?.prompts?.map((item, index) => (
              <Pressable
                onPress={() => navigation.navigate('ShowPrompts')}
                style={{
                  borderColor: '#707070',
                  borderWidth: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderStyle: 'dashed',
                  borderRadius: 10,
                  height: 70,
                }}>
                <Text
                  style={{
                    fontWeight: '600',
                    fontStyle: 'italic',
                    fontSize: 15,
                  }}>
                  {item?.question}
                </Text>
                <Text
                  style={{
                    fontWeight: '600',
                    fontStyle: 'italic',
                    fontSize: 15,
                    marginTop: 3,
                  }}>
                  {item?.answer}
                </Text>
              </Pressable>
            ))
          ) : (
            <View>
              <Pressable
                onPress={() => navigation.navigate('ShowPrompts')}
                style={{
                  borderColor: '#707070',
                  borderWidth: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderStyle: 'dashed',
                  borderRadius: 10,
                  height: 70,
                
                }}>
                <Text
                  style={{
                    color: 'gray',
                    fontWeight: '600',
                    fontStyle: 'italic',
                    fontSize: 15,
                  }}>
                  Select a Prompt
                </Text>
                <Text
                  style={{
                    color: 'gray',
                    fontWeight: '600',
                    fontStyle: 'italic',
                    fontSize: 15,
                    marginTop: 3,
                  }}>
                  And write your own answer
                </Text>
              </Pressable>

              <Pressable
                onPress={() => navigation.navigate('ShowPrompts')}
                style={{
                  borderColor: '#707070',
                  borderWidth: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderStyle: 'dashed',
                  borderRadius: 10,
                  height: 70,
                  marginVertical: 15
                }}>
                <Text
                  style={{
                    color: 'gray',
                    fontWeight: '600',
                    fontStyle: 'italic',
                    fontSize: 15,
                  }}>
                  Select a Prompt
                </Text>
                <Text
                  style={{
                    color: 'gray',
                    fontWeight: '600',
                    fontStyle: 'italic',
                    fontSize: 15,
                    marginTop: 3,
                  }}>
                  And write your own answer
                </Text>
              </Pressable>

              <Pressable
                onPress={() => navigation.navigate('ShowPrompts')}
                style={{
                  borderColor: '#707070',
                  borderWidth: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderStyle: 'dashed',
                  borderRadius: 10,
                  height: 70,
                }}>
                <Text
                  style={{
                    color: 'gray',
                    fontWeight: '600',
                    fontStyle: 'italic',
                    fontSize: 15,
                  }}>
                  Select a Prompt
                </Text>
                <Text
                  style={{
                    color: 'gray',
                    fontWeight: '600',
                    fontStyle: 'italic',
                    fontSize: 15,
                    marginTop: 3,
                  }}>
                  And write your own answer
                </Text>
              </Pressable>
            </View>
          )}
          {/* {route?.params?.prompts?.map((item, index) => (
            <Pressable
              onPress={() => navigation.navigate('ShowPrompts')}
              style={{
                borderColor: '#707070',
                borderWidth: 2,
                justifyContent: 'center',
                alignItems: 'center',
                borderStyle: 'dashed',
                borderRadius: 10,
                height: 70,
              }}>
              <Text
                style={{
                  fontWeight: '600',
                  fontStyle: 'italic',
                  fontSize: 15,
                }}>
                {item?.question}
              </Text>
              <Text
                style={{
                  fontWeight: '600',
                  fontStyle: 'italic',
                  fontSize: 15,
                  marginTop: 3,
                }}>
                {item?.answer}
              </Text>
            </Pressable>
          ))}

          <Pressable
            onPress={() => navigation.navigate('ShowPrompts')}
            style={{
              borderColor: '#707070',
              borderWidth: 2,
              justifyContent: 'center',
              alignItems: 'center',
              borderStyle: 'dashed',
              borderRadius: 10,
              height: 70,
            }}>
            <Text
              style={{
                color: 'gray',
                fontWeight: '600',
                fontStyle: 'italic',
                fontSize: 15,
              }}>
              Select a Prompt
            </Text>
            <Text
              style={{
                color: 'gray',
                fontWeight: '600',
                fontStyle: 'italic',
                fontSize: 15,
                marginTop: 3,
              }}>
              And write your own answer
            </Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate('ShowPrompts')}
            style={{
              borderColor: '#707070',
              borderWidth: 2,
              justifyContent: 'center',
              alignItems: 'center',
              borderStyle: 'dashed',
              borderRadius: 10,
              height: 70,
            }}>
            <Text
              style={{
                color: 'gray',
                fontWeight: '600',
                fontStyle: 'italic',
                fontSize: 15,
              }}>
              Select a Prompt
            </Text>
            <Text
              style={{
                color: 'gray',
                fontWeight: '600',
                fontStyle: 'italic',
                fontSize: 15,
                marginTop: 3,
              }}>
              And write your own answer
            </Text>
          </Pressable> */}
        </View>
        <TouchableOpacity onPress={handleNext} activeOpacity={0.8}>
          <ButtonComponent title="Next" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PromptsScreen;

const styles = StyleSheet.create({});
