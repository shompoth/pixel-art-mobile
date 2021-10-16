import React, { useState, useCallback } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

// Components
import { globalStyles } from "../../styles/AppStyles";
import Colors from "../../styles/Colors";
import CustomSwitch from "../CustomSwitch/CustomSwitch";

// Redux
import { useDispatch } from "react-redux";
import { setCategorySettings } from "../../redux/actions/actionSettings";

const ModalSettings = ({ closeModal }) => {
    // generate Dispatch redux
    const dispatch = useDispatch();

    // State
    const [isAnimals, setIsAnimals] = useState(true);
    const [isTravel, setIsTravel] = useState(true);
    const [isCars, setIsCars] = useState(true);

    // Fonctions

    const saveSettings = useCallback(() => {
        const savedSettings = {
            animals: isAnimals,
            travel: isTravel,
            cars: isCars,
        };

        // Dispatch action
        dispatch(setCategorySettings(savedSettings));
        closeModal();
    }, [isAnimals, isTravel, isCars]);

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
            {isAnimals === false && isTravel === false && isCars === false ? (
                <Text
                    style={{
                        ...styles.settingsText,
                        color: Colors.clicked,
                        textAlign: "center",
                    }}
                >
                    Veuillez au moins choisir une catégorie
                </Text>
            ) : (
                <Button title="Validez les paramètres" onPress={saveSettings} />
            )}
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
