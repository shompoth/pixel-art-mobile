import React from "react";
import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/AppStyles";

const Photo = ({ navigation }) => {
    const url = navigation.getParam("url");
    const title = navigation.getParam("title");
    const photoDesc = navigation.getParam("photoDesc");

    return (
        <ScrollView style={globalStyles.container}>
            <Image style={styles.selectedImg} source={{ uri: url }} />
            <View style={styles.photoDescription}>
                <Text style={globalStyles.titleText}>{title}</Text>
                <Text style={styles.textDescription}>{photoDesc}</Text>
                <Text style={styles.textDescription}>{photoDesc}</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    text: {
        fontFamily: "InriaSans_700Bold_Italic",
        fontSize: 25,
    },
    selectedImg: {
        width: "100%",
        height: 300,
    },
    photoDescription: {
        padding: 15,
        fontSize: 20,
        fontFamily: "InriaSans_400Regular",
    },
    textDescription: {
        fontFamily: "InriaSans_400Regular",
        fontSize: 18,
        padding: 9,
    },
});

Photo.navigationOptions = ({ navigation }) => {
    const photoTitle = navigation.getParam("title").toUpperCase();

    return {
        headerTitle: photoTitle,
    };
};

export default Photo;
