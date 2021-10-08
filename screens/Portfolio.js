import React from "react";
import { Text, View, Button } from "react-native";
import { globalStyles } from "../styles/AppStyles";

const Portolio = ({ navigation }) => {
    console.log(navigation);
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.text}>{navigation.getParam("name")}</Text>
            <Text style={globalStyles.text}>{navigation.getParam("country")}</Text>
            <Text style={globalStyles.text}>{navigation.getParam("totalImg")}</Text>
        </View>
    );
};

export default Portolio;
