import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import StackNav from "./routes/HomeStackNav";
import {
    useFonts,
    InriaSans_300Light,
    InriaSans_300Light_Italic,
    InriaSans_400Regular,
    InriaSans_400Regular_Italic,
    InriaSans_700Bold,
    InriaSans_700Bold_Italic,
} from "@expo-google-fonts/inria-sans";

import Home from "./screens/Home";

export default function App() {
    let [fontsLoaded] = useFonts({
        InriaSans_300Light,
        InriaSans_300Light_Italic,
        InriaSans_400Regular,
        InriaSans_400Regular_Italic,
        InriaSans_700Bold,
        InriaSans_700Bold_Italic,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return <StackNav />;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
