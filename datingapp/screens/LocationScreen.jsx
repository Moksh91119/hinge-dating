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
import React, { useRef, useState } from "react";
import Entypo from "react-native-vector-icons/Entypo";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "../components/ButtonComponent";
import { saveRegistrationProgress } from "../registrationUtils";

const LocationScreen = () => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const cityRef = useRef(null);
  const navigation = useNavigation();
  const handleNext = () => {
    if (country.trim() !== "" && city.trim() !== "") {
      saveRegistrationProgress("Location", { country, city });
    }
    navigation.navigate("Gender");
  };
  const [markerLocation, setMarkerLocation] = useState({
    latitude: 53.35,
    longitude: 18.8,
  });
  const handleCountryChange = async (text) => {
    setCountry(text);
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${text}?fullText=true`
      );
      const data = await response.json();
      if (data && data.length > 0) {
        const { latlng } = data[0];
        if (latlng && latlng.length === 2) {
          const latitude = latlng[0];
          const longitude = latlng[1];
          setMarkerLocation({ latitude, longitude });
        }
      }
    } catch (error) {
      console.error("Error fetching country data:", error);
    }
  };
  const handleCityChange = async (cityName) => {
    setCity(cityName);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          cityName
        )}&format=json&limit=1`
      );
      const data = await response.json();
      if (data && data.length > 0) {
        if (data[0].lat && data[0].lon) {
          const { lat, lon } = data[0];
          setMarkerLocation({
            latitude: parseFloat(lat),
            longitude: parseFloat(lon),
          });
        }
      }
    } catch (error) {
      console.error("Error fetching city data:", error);
    }
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
            <Entypo name="location" size={26} color="black" />
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
          Enter your location
        </Text>

        <View
          style={{
            flexDirection: "column",
            gap: 10,
            marginTop: 50,
            justifyContent: "center",
          }}
        >
          <TextInput
            autoFocus={true}
            placeholder="Country"
            value={country}
            onChangeText={handleCountryChange}
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "black",
              padding: 10,
              width: "99%",
              fontSize: country ? 20 : 20,
              fontFamily: "sans-serif-condensed",
            }}
            onEndEditing={() => {cityRef.current.focus();}}
          />
          <TextInput
            placeholder="City"
            ref={cityRef}
            value={city}
            onChangeText={handleCityChange}
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "black",
              padding: 10,
              width: "99%",
              fontSize: city ? 20 : 20,
              fontFamily: "sans-serif-condensed",
            }}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <MapView
            style={{ width: "100%", height: 200 }}
            region={{
              latitude: markerLocation.latitude,
              longitude: markerLocation.longitude,
              latitudeDelta: 7,
              longitudeDelta: 7,
            }}
          >
            <Marker coordinate={markerLocation} />
          </MapView>
        </View>
        <TouchableOpacity onPress={handleNext} activeOpacity={0.8}>
          <ButtonComponent title="Next" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({});
