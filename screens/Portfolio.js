import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

// Composants
import { Text, View, ScrollView, StyleSheet, Image } from "react-native";
import { globalStyles } from "../styles/AppStyles";
import Colors from "../styles/Colors";
import MaterialIconsHeader from "../components/MaterialIconsHeader/MaterialIconsHeader";

const Portolio = ({ navigation }) => {
    const favColor = navigation.getParam("favColor");
    const name = navigation.getParam("name");
    const profilImg = navigation.getParam("img");

    return (
        <ScrollView style={globalStyles.container}>
            <View style={{ ...styles.profilInfos, backgroundColor: favColor }}>
                <Image style={styles.smallprofilImg} source={{ uri: profilImg }} />
                <Text style={styles.profilName}>{name}</Text>
            </View>
        </ScrollView>
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

const styles = StyleSheet.create({
    profilInfos: {
        alignItems: "center",
        padding: 10,
    },
    smallprofilImg: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        margin: 9,
        borderWidth: 6,
        borderColor: Colors.white,
    },
    profilName: {
        fontFamily: "InriaSans_700Bold",
        color: Colors.white,
        fontSize: 25,
    },
});

export default Portolio;
