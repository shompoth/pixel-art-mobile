import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

// Components
import { globalStyles } from "../../styles/AppStyles";
import Colors from "../../styles/Colors";
import CustomSwitch from "../CustomSwitch/CustomSwitch";

const ModalSettings = () => {
    // State
    const [isAnimals, setIsAnimals] = useState(true);
    const [isTravel, setIsTravel] = useState(true);
    const [isCars, setIsCars] = useState(true);

    // Fonctions
    const saveSettings = () => {
        const savedSettings = {
            animals: isAnimals,
            travel: isTravel,
            cars: isCars,
        };
    };

    // Redux

    return (
        <View style={globalStyles.container}>
            <Text style={styles.settingsTitle}>Réglages</Text>
            <Text style={styles.settingsText}>
                Utilisez les paramètres ci-dessous pour gérer les catégories à afficher
            </Text>
            <View style={styles.separator}></View>
            <CustomSwitch
                label="Animaux"
                state={isAnimals}
                handleSwitch={newVal => setIsAnimals(newVal)}
            />
            <CustomSwitch
                label="Voyages"
                state={isTravel}
                handleSwitch={newVal => setIsTravel(newVal)}
            />
            <CustomSwitch
                label="Voitures"
                state={isCars}
                handleSwitch={newVal => setIsCars(newVal)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    settingsTitle: {
        fontSize: 20,
        padding: 9,
        fontFamily: "InriaSans_700Bold",
        textAlign: "center",
        margin: 16,
        textTransform: "uppercase",
    },
    settingsText: {
        fontFamily: "InriaSans_300Light",
        fontSize: 19,
        padding: 9,
    },
    separator: {
        borderWidth: 0.5,
        borderColor: Colors.lightGrey,
        marginVertical: 25,
    },
});

export default ModalSettings;
