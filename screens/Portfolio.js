import React, { useCallback, useEffect } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

// Composants
import { Text, View, ScrollView, StyleSheet, Image, Alert } from "react-native";
import { globalStyles } from "../styles/AppStyles";
import Colors from "../styles/Colors";
import TouchableImage from "../components/TouchableImage/TouchableImage";
import MaterialIconsHeader from "../components/MaterialIconsHeader/MaterialIconsHeader";

// Redux
import { useDispatch } from "react-redux";
import { setSelection } from "../redux/actions/actionSelection";

const Portolio = ({ navigation }) => {
    const dispatch = useDispatch();
    // Variables
    const favColor = navigation.getParam("favColor");
    const name = navigation.getParam("name");
    const profilImg = navigation.getParam("img");
    const description = navigation.getParam("desc");
    const photoArray = navigation.getParam("photos");
    const userId = navigation.getParam("id");

    // Fonctions
    const selectPhoto = photo => {
        navigation.navigate("Photo", photo);
    };

    const handleDispatch = useCallback(() => {
        dispatch(setSelection(userId));

        Alert.alert(
            "Photos enregistrées",
            "Elles sont disponibles dans votre sélection",
            [{ text: "OK" }],
        );
    }, [dispatch, userId]);

    useEffect(() => {
        navigation.setParams({ handleLike: handleDispatch });
    }, [handleDispatch]);

    return (
        <ScrollView style={globalStyles.container}>
            <View style={{ ...styles.profilInfos, backgroundColor: favColor }}>
                <Image style={styles.smallprofilImg} source={{ uri: profilImg }} />
                <Text style={styles.profilName}>{name}</Text>
            </View>
            <View style={styles.profilDescription}>
                <Text style={styles.titleBioText}>BIO</Text>
                <Text style={styles.textBio}>{description} </Text>
            </View>
            <View>
                {photoArray.map(photo => (
                    <TouchableImage
                        key={photo.id}
                        imgUrl={photo.url}
                        imgTitle={photo.title}
                        onSelectPhoto={() => selectPhoto(photo)}
                    />
                ))}
            </View>
        </ScrollView>
    );
};

Portolio.navigationOptions = navigationData => {
    const name = navigationData.navigation.getParam("name");
    const favColor = navigationData.navigation.getParam("favColor");
    const handleLike = navigationData.navigation.getParam("handleLike");

    return {
        headerTitle: `Profil de ${name}`,
        headerStyle: {
            backgroundColor: favColor,
        },
        headerTintColor: Colors.white,
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={MaterialIconsHeader}>
                <Item title="add" iconName="thumb-up" onPress={() => handleLike} />
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
        borderWidth: 5,
        borderColor: Colors.white,
    },
    profilName: {
        fontFamily: "InriaSans_700Bold",
        color: Colors.white,
        fontSize: 25,
    },
    profilDescription: {
        backgroundColor: Colors.ghost,
        padding: 15,
        fontSize: 25,
        fontFamily: "InriaSans_400Regular",
    },
    titleBioText: {
        fontSize: 25,
        padding: 9,
        fontFamily: "InriaSans_700Bold",
    },
    textBio: {
        fontFamily: "InriaSans_400Regular",
        fontSize: 18,
        padding: 9,
    },
});

export default Portolio;
