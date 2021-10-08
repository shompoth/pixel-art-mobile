import React from "react";

// Composants
import { Text, View } from "react-native";
import { globalStyles } from "../styles/AppStyles";
import Colors from "../styles/Colors";

const Portolio = ({ navigation }) => {
    console.log(navigation);
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.text}>{navigation.getParam("name")}</Text>
            <Text style={globalStyles.text}>{navigation.getParam("country")}</Text>
            <Text style={globalStyles.text}>{navigation.getParam("totalImg")}</Text>
            <Text style={globalStyles.text}>{navigation.getParam("favColor")}</Text>
        </View>
    );
};

// Portolio.navigationOptions={
//   headerTitle
// }

Portolio.navigationOptions = navigationData => {
    const name = navigationData.navigation.getParam("name");
    const favColor = navigationData.navigation.getParam("favColor");

    return {
        headerTitle: `Profil de ${name}`,
        headerStyle: {
            backgroundColor: favColor,
        },
        headerTintColor: Colors.white,
    };
};

export default Portolio;
