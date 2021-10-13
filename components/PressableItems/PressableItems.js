// Librairies
import React from "react";
import { Text, View, Pressable, Image } from "react-native";
import { globalStyles } from "../../styles/AppStyles";
import Colors from "../../styles/Colors";

const PressableItems = ({ item, handleNavigate }) => {
    return (
        <Pressable
            onPress={handleNavigate}
            style={({ pressed }) => [
                { backgroundColor: pressed ? Colors.clicked : Colors.white },
                globalStyles.profilItem,
            ]}
        >
            <Text style={globalStyles.titleText}>{item.name}</Text>
            <Image style={globalStyles.profilImg} source={{ uri: item.img }} />
            <View style={globalStyles.infoContainer}>
                <Text style={globalStyles.infos}>{item.country}</Text>
                <Text style={globalStyles.infos}>{item.photos.length}</Text>
            </View>
        </Pressable>
    );
};

export default PressableItems;
