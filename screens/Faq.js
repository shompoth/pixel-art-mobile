// Librairies
import React from "react";
import { Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

// Components
import { globalStyles } from "../styles/AppStyles";
import MaterialIconsHeader from "../components/MaterialIconsHeader/MaterialIconsHeader";
import Colors from "../styles/Colors";

const Faq = () => {
    return (
        <View>
            <Text>Faq</Text>
        </View>
    );
};

Faq.navigationOptions = ({ navigation }) => {
    return {
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={MaterialIconsHeader}>
                <Item
                    title="Menu"
                    iconName="menu"
                    // navigation.to
                    onPress={() => navigation.toggleDrawer()}
                />
            </HeaderButtons>
        ),
    };
};

export default Faq;
