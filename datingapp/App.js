import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform, Modal } from "react-native";
import StackNavigation from "./navigation/StackNavigation";
import { ModalPortal } from "react-native-modals";
import { AuthProvider } from "./AuthContext";

export default function App() {
  return (
    <>
      <AuthProvider>
        <>
          <StackNavigation />
          <ModalPortal />
        </>
      </AuthProvider>
    </>
  );
}

const styles = StyleSheet.create({});
