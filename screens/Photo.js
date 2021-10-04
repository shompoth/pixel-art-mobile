import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Photo = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Photo</Text>
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
    text: {},
});

export default Photo;
