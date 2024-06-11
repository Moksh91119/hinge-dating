import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "../components/ButtonComponent";
import { getRegistrationProgress, saveRegistrationProgress } from "../registrationUtils";

const BirthScreen = () => {
  const navigation = useNavigation();
  const monthRef = useRef(null);
  const yearRef = useRef(null);
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleDayChange = (text) => {
    setDay(text);
    if (text.length === 2) {
      monthRef.current.focus();
    }
  };
  const handleMonthChange = (text) => {
    setMonth(text);
    if (text.length === 2) {
      yearRef.current.focus();
    }
  };
  const handleYearChange = (text) => {
    setYear(text);
  };

  useEffect(() => {
    getRegistrationProgress("Birth").then((progressData) => {
      if (progressData) {
        const { dateOfBirth } = progressData;
        const [dayValue, monthValue, yearValue] = dateOfBirth.split("/");
        setDay(dayValue);
        setMonth(monthValue);
        setYear(yearValue);
      }
    });
  }, []);

  const handleNext = () => {
    if(day.trim() !== '' && month.trim() !== '' && year.trim() !== '') {
      const dateOfBirth = `${day}/${month}/${year}`;
      
      saveRegistrationProgress("Birth", { dateOfBirth });
    }
    navigation.navigate("Location");
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
              name="cake-variant-outline"
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
          What's your date of birth?
        </Text>

        <View
          style={{
            flexDirection: "row",
            gap: 10,
            marginTop: 80,
            justifyContent: "center",
          }}
        >
          <TextInput
            autoFocus={true}
            placeholder="DD"
            maxLength={2}
            keyboardType="numeric"
            value={day}
            onChangeText={handleDayChange}
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "black",
              padding: 10,
              width: 60,
              fontSize: day ? 22 : 22,
              fontFamily: "sans-serif-condensed",
            }}
          />
          <TextInput
            ref={monthRef}
            placeholder="MM"
            maxLength={2}
            keyboardType="numeric"
            value={month}
            onChangeText={handleMonthChange}
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "black",
              padding: 10,
              width: 60,
              fontSize: month ? 22 : 22,
              fontFamily: "sans-serif-condensed",
            }}
          />
          <TextInput
            ref={yearRef}
            placeholder="YYYY"
            maxLength={4}
            keyboardType="numeric"
            value={year}
            onChangeText={handleYearChange}
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "black",
              padding: 10,
              width: 75,
              fontSize: year ? 22 : 22,
              fontFamily: "sans-serif-condensed",
            }}
          />
        </View>
        <TouchableOpacity onPress={handleNext} activeOpacity={0.8}>
          <ButtonComponent title="Next" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BirthScreen;

const styles = StyleSheet.create({});
