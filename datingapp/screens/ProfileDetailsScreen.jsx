import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const ProfileDetailsScreen = () => {
  const route = useRoute();
  // console.log(route?.params);

  let dayValue, monthValue, yearValue, age;
  const dateOfBirth = route?.params?.currentProfile?.dateOfBirth;
  if (dateOfBirth) {
    [dayValue, monthValue, yearValue] = dateOfBirth.split("/");
    age = 2024 - yearValue;
  }
  // console.log(age);s
  return (
    <View style={{ marginTop: 55 }}>
      <ScrollView>
        <View style={{ marginHorizontal: 12, marginVertical: 12 }}>
          {/* {profiles?.map((item, index) => ( */}
          <>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                    {route?.params?.currentProfile?.firstName}
                  </Text>
                  <View
                    style={{
                      backgroundColor: "#452c63",
                      paddingHorizontal: 12,
                      paddingVertical: 4,
                      borderRadius: 20,
                    }}
                  >
                    <Text style={{ textAlign: "center", color: "white" }}>
                      new here
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 15,
                  }}
                >
                  <Entypo
                    name="dots-three-horizontal"
                    size={22}
                    color="black"
                  />
                </View>
              </View>

              <View style={{ marginVertical: 15 }}>
                <View>
                  {route?.params?.currentProfile?.imageUrls.length > 0 && (
                    <View>
                      <Image
                        style={{
                          width: "100%",
                          height: 350,
                          resizeMode: "cover",
                          borderRadius: 10,
                        }}
                        source={{
                          uri: route?.params?.currentProfile?.imageUrls[0],
                        }}
                      />
                      {/* <View
                        style={{
                          position: 'absolute',
                          bottom: 10,
                          right: 10,
                          backgroundColor: 'white',
                          width: 42,
                          height: 42,
                          borderRadius: 21,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <AntDesign name="hearto" size={25} color="#C5B358" />
                      </View> */}
                    </View>
                  )}
                </View>
                <View
                  style={{
                    backgroundColor: "white",
                    padding: 10,
                    borderRadius: 8,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      paddingTop: 5,
                      alignItems: "center",
                      gap: 20,
                      borderBottomWidth: 0.8,
                      borderBottomColor: "#E0E0E0",
                      paddingBottom: 10,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <MaterialCommunityIcons
                        name="cake-variant-outline"
                        size={22}
                        color="black"
                      />
                      <Text style={{ fontSize: 15 }}>{age}</Text>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <Ionicons name="person-outline" size={20} color="black" />
                      <Text style={{ fontSize: 15 }}>
                        {route?.params?.currentProfile?.gender}
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <Ionicons name="magnet-outline" size={20} color="black" />
                      <Text style={{ fontSize: 15 }}>
                        {route?.params?.currentProfile?.type}
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <Octicons name="home" size={20} color="black" />
                      <Text style={{ fontSize: 15 }}>
                        {route?.params?.currentProfile?.homeTown}
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 12,
                      marginTop: 15,
                      borderBottomWidth: 0.7,
                      borderBottomColor: "#E0E0E0",
                      paddingBottom: 10,
                    }}
                  >
                    <Feather name="search" size={20} color="black" />
                    <Text>{route?.params?.currentProfile?.lookingFor}</Text>
                  </View>
                </View>

                <View style={{ marginVertical: 15 }}>
                  {route?.params?.currentProfile?.prompts
                    .slice(0, 1)
                    .map((prompt) => (
                      <>
                        <View
                          key={prompt.id}
                          style={{
                            backgroundColor: "white",
                            padding: 12,
                            borderRadius: 10,
                            height: 150,
                            justifyContent: "center",
                          }}
                        >
                          <Text style={{ fontSize: 15, fontWeight: "500" }}>
                            {prompt.question}
                          </Text>
                          <Text
                            style={{
                              fontSize: 20,
                              fontWeight: "600",
                              marginTop: 20,
                            }}
                          >
                            {prompt.answer}
                          </Text>
                        </View>
                        {/* <View
                        style={{
                          position: 'absolute',
                          bottom: 10,
                          right: 10,
                          backgroundColor: 'white',
                          width: 42,
                          height: 42,
                          borderRadius: 21,
                          justifyContent: 'center',
                          alignItems: 'center',
                          shadowColor: '#000',
                          shadowOffset: {width: 0, height: 1},
                          shadowOpacity: 0.25,
                          shadowRadius: 3.84,
                          // Shadow properties for Android
                          elevation: 5,
                        }}>
                        <AntDesign name="hearto" size={25} color="#C5B358" />
                      </View> */}
                      </>
                    ))}
                </View>

                {/* profile details to come here */}

                <View>
                  {route?.params?.currentProfile?.imageUrls
                    ?.slice(1, 3)
                    .map((item, index) => (
                      <View key={index} style={{ marginVertical: 10 }}>
                        <Image
                          style={{
                            width: "100%",
                            height: 350,
                            resizeMode: "cover",
                            borderRadius: 10,
                          }}
                          source={{
                            uri: item,
                          }}
                        />

                        {/* <View
                        style={{
                          position: 'absolute',
                          bottom: 10,
                          right: 10,
                          backgroundColor: 'white',
                          width: 42,
                          height: 42,
                          borderRadius: 21,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <AntDesign name="hearto" size={25} color="#C5B358" />
                      </View> */}
                      </View>
                    ))}
                </View>

                <View style={{ marginVertical: 15 }}>
                  {route?.params?.currentProfile?.prompts
                    .slice(1, 2)
                    .map((prompt) => (
                      <>
                        <View
                          key={prompt.id}
                          style={{
                            backgroundColor: "white",
                            padding: 12,
                            borderRadius: 10,
                            height: 150,
                            justifyContent: "center",
                          }}
                        >
                          <Text style={{ fontSize: 15, fontWeight: "500" }}>
                            {prompt.question}
                          </Text>
                          <Text
                            style={{
                              fontSize: 20,
                              fontWeight: "600",
                              marginTop: 20,
                            }}
                          >
                            {prompt.answer}
                          </Text>
                        </View>
                        {/* <View
                        style={{
                          position: 'absolute',
                          bottom: 10,
                          right: 10,
                          backgroundColor: 'white',
                          width: 42,
                          height: 42,
                          borderRadius: 21,
                          justifyContent: 'center',
                          alignItems: 'center',
                          shadowColor: '#000',
                          shadowOffset: {width: 0, height: 1},
                          shadowOpacity: 0.25,
                          shadowRadius: 3.84,
                          // Shadow properties for Android
                          elevation: 5,
                        }}>
                        <AntDesign name="hearto" size={25} color="#C5B358" />
                      </View> */}
                      </>
                    ))}
                </View>

                <View>
                  {route?.params?.currentProfile?.imageUrls
                    ?.slice(3, 4)
                    .map((item, index) => (
                      <View key={index} style={{ marginVertical: 10 }}>
                        <Image
                          style={{
                            width: "100%",
                            height: 350,
                            resizeMode: "cover",
                            borderRadius: 10,
                          }}
                          source={{
                            uri: item,
                          }}
                        />
                        {/* <View
                        style={{
                          position: 'absolute',
                          bottom: 10,
                          right: 10,
                          backgroundColor: 'white',
                          width: 42,
                          height: 42,
                          borderRadius: 21,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <AntDesign name="hearto" size={25} color="#C5B358" />
                      </View> */}
                      </View>
                    ))}
                </View>
                <View style={{ marginVertical: 15 }}>
                  {route?.params?.currentProfile?.prompts
                    .slice(2, 3)
                    .map((prompt) => (
                      <>
                        <View
                          key={prompt.id}
                          style={{
                            backgroundColor: "white",
                            padding: 12,
                            borderRadius: 10,
                            height: 150,
                            justifyContent: "center",
                          }}
                        >
                          <Text style={{ fontSize: 15, fontWeight: "500" }}>
                            {prompt.question}
                          </Text>
                          <Text
                            style={{
                              fontSize: 20,
                              fontWeight: "600",
                              marginTop: 20,
                            }}
                          >
                            {prompt.answer}
                          </Text>
                        </View>
                        {/* <View
                        style={{
                          position: 'absolute',
                          bottom: 10,
                          right: 10,
                          backgroundColor: 'white',
                          width: 42,
                          height: 42,
                          borderRadius: 21,
                          justifyContent: 'center',
                          alignItems: 'center',
                          shadowColor: '#000',
                          shadowOffset: {width: 0, height: 1},
                          shadowOpacity: 0.25,
                          shadowRadius: 3.84,
                          // Shadow properties for Android
                          elevation: 5,
                        }}>
                        <AntDesign name="hearto" size={25} color="#C5B358" />
                      </View> */}
                      </>
                    ))}
                </View>

                <View>
                  {route?.params?.currentProfile?.imageUrls
                    ?.slice(4, 7)
                    .map((item, index) => (
                      <View key={index} style={{ marginVertical: 10 }}>
                        <Image
                          style={{
                            width: "100%",
                            height: 350,
                            resizeMode: "cover",
                            borderRadius: 10,
                          }}
                          source={{
                            uri: item,
                          }}
                        />
                        {/* <View
                        style={{
                          position: 'absolute',
                          bottom: 10,
                          right: 10,
                          backgroundColor: 'white',
                          width: 42,
                          height: 42,
                          borderRadius: 21,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <AntDesign name="hearto" size={25} color="#C5B358" />
                      </View> */}
                      </View>
                    ))}
                </View>
              </View>

              {/* <View
              style={{
                position:"absolute",
                bottom: 10,
                left: 10,
                backgroundColor: 'white',
                width: 42,
                height: 42,
                borderRadius: 21,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Entypo name="cross" size={25} color="#C5B358" />
            </View> */}
            </View>
          </>
          {/* ))} */}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileDetailsScreen;

const styles = StyleSheet.create({});
