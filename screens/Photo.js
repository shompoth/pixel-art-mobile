import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Photo = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Photo</Text>
            <Button title="Vers Home" onPress={() => navigation.popToTop()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "lightgreen",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontFamily: "InriaSans_700Bold_Italic",
        fontSize: 25,
    },
});

export default Photo;
