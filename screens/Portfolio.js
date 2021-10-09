import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

// Composants
import { Text, View } from "react-native";
import { globalStyles } from "../styles/AppStyles";
import Colors from "../styles/Colors";
import MaterialIconsHeader from "../components/MaterialIconsHeader/MaterialIconsHeader";

const Portolio = ({ navigation }) => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.text}>{navigation.getParam("name")}</Text>
            <Text style={globalStyles.text}>{navigation.getParam("country")}</Text>
            <Text style={globalStyles.text}>{navigation.getParam("totalImg")}</Text>
            <Text style={globalStyles.text}>{navigation.getParam("favColor")}</Text>
        </View>
    );
};

Portolio.navigationOptions = navigationData => {
    const name = navigationData.navigation.getParam("name");
    const favColor = navigationData.navigation.getParam("favColor");

    return {
        headerTitle: `Profil de ${name}`,
        headerStyle: {
            backgroundColor: favColor,
        },
        headerTintColor: Colors.white,
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={MaterialIconsHeader}>
                <Item
                    title="info"
                    iconName="info-outline"
                    onPress={() => alert(`Portfolio de ${name}`)}
                />
            </HeaderButtons>
        ),
    };
};

export default Portolio;
