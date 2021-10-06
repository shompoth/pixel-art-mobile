import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Home = ({ navigation }) => {
    // Function
    const handlePress = () => {
        navigation.navigate("Portfolio");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
            <Button title="Vers Portfolio" onPress={handlePress} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "lightblue",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontFamily: "InriaSans_700Bold_Italic",
        fontSize: 25,
    },
});

export default Home;
