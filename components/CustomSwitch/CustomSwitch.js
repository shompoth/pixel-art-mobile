import React from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import Colors from "../../styles/Colors";

const CustomSwitch = ({ label, state, handleSwitch }) => {
    return (
        <View style={styles.settingsContainer}>
            <Text style={styles.settingsLabel}>{label}</Text>
            <Switch
                value={state}
                onValueChange={handleSwitch}
                trackColor={{ false: Colors.lightGrey, true: Colors.clicked }}
                thumbColor={state && Colors.white}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    settingsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 25,
        marginBottom: 14,
    },
    settingsLabel: {
        fontSize: 19,
    },
});

export default CustomSwitch;
