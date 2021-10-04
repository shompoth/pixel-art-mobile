import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Portolio = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Portfolio</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "orange",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {},
});

export default Portolio;
