// Librairies
import React, { useState, useEffect } from "react";
import { FlatList, Modal, View, StyleSheet, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { MaterialIcons } from "@expo/vector-icons";

// Components
import PressableItems from "../components/PressableItems/PressableItems";
import { globalStyles } from "../styles/AppStyles";
import MaterialIconsHeader from "../components/MaterialIconsHeader/MaterialIconsHeader";
import NoData from "../components/NoData/NoData";
import Colors from "../styles/Colors";
import ModalSettings from "../components/ModalSettings/ModalSettings";

// Redux
import { useSelector } from "react-redux";

const Home = ({ navigation }) => {
    useEffect(() => {
        navigation.setParams({ handleModal: handleSettingsModal });
    }, [handleSettingsModal]);

    // State
    const [modalVisible, setModalVisible] = useState(false);

    // Redux
    const selectedCategories = useSelector(state => state.users.selectedCategories);

    // Function
    const renderProfils = ({ item }) => {
        return (
            <PressableItems
                item={item}
                handleNavigate={() => navigation.navigate("Portfolio", item)}
            />
        );
    };

    const handleSettingsModal = () => {
        setModalVisible(!modalVisible);
    };

    return (
        <View style={globalStyles.container}>
            <Modal visible={modalVisible} animation="slide">
                <View style={styles.modalBody}>
                    <MaterialIcons
                        name="close"
                        size={24}
                        style={styles.modalClose}
                        onPress={handleSettingsModal}
                    />
                    <ModalSettings closeModal={handleSettingsModal} />
                </View>
            </Modal>
            <FlatList
                data={selectedCategories}
                keyExtractor={item => item.id}
                renderItem={renderProfils}
            />
        </View>
    );
};

Home.navigationOptions = ({ navigation }) => {
    // variable
    const handleModal = navigation.getParam("handleModal");

    return {
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={MaterialIconsHeader}>
                <Item
                    title="Menu"
                    iconName="menu"
                    onPress={() => navigation.toggleDrawer()}
                />
            </HeaderButtons>
        ),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={MaterialIconsHeader}>
                <Item title="Réglages" iconName="settings" onPress={handleModal} />
            </HeaderButtons>
        ),
    };
};

const styles = StyleSheet.create({
    modalBody: {
        flex: 1,
        backgroundColor: Colors.ghost,
        marginVertical: 60,
        padding: 20,
        alignSelf: "center",
        borderRadius: 10,
        width: "90%",
    },
    modalClose: {
        alignSelf: "flex-end",
    },
});

export default Home;
