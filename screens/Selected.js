import React from "react";
import { FlatList, Pressable, Text, View, StyleSheet, Image } from "react-native";
import { globalStyles } from "../styles/AppStyles";

// Composants
import NoData from "../components/NoData/NoData";
import Colors from "../styles/Colors";

// Redux
import { useSelector } from "react-redux";

const Selected = ({ navigation }) => {
    // Redux
    const selectedUsers = useSelector(state => state.users.selectedUsers);

    // Fonction
    const ListItem = ({ items }) => {
        return (
            <View>
                {items.item.photos.map(photo => {
                    return (
                        <View key={photo.id}>
                            <Pressable
                                onPress={() => navigation.navigate("Photo", photo)}
                                style={({ pressed }) => [
                                    {
                                        backgroundColor: pressed
                                            ? Colors.clicked
                                            : Colors.white,
                                    },
                                    styles.photoContainer,
                                ]}
                            >
                                <Image
                                    style={globalStyles.profilImg}
                                    source={{ uri: photo.url }}
                                />
                                <Text style={styles.selectedPhotoText}>
                                    {photo.title}
                                </Text>
                            </Pressable>
                        </View>
                    );
                })}
            </View>
        );
    };

    return (
        <View style={globalStyles.container}>
            {selectedUsers.length ? (
                <FlatList
                    data={selectedUsers}
                    renderItem={selectedUsers => {
                        return <ListItem items={selectedUsers} />;
                    }}
                    keyExtractor={item => item.id}
                />
            ) : (
                <NoData>Aucune image ?? afficher</NoData>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    photoContainer: {
        marginVertical: 9,
        alignItems: "center",
        padding: 20,
    },
    selectedPhotoText: {
        fontSize: 19,
        fontFamily: "InriaSans_300Light",
        margin: 9,
    },
});

export default Selected;
