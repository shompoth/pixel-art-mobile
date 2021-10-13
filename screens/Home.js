// Librairies
import React from "react";
import { FlatList, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

// Components
import PressableItems from "../components/PressableItems/PressableItems";
import { globalStyles } from "../styles/AppStyles";
import MaterialIconsHeader from "../components/MaterialIconsHeader/MaterialIconsHeader";
import { DATA } from "../data/usersData";
import Colors from "../styles/Colors";

const Home = ({ navigation }) => {
    // Function

    const renderProfils = ({ item }) => {
        return (
            <PressableItems
                item={item}
                handleNavigate={() => navigation.navigate("Portfolio", item)}
            />
        );
    };

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={DATA}
                keyExtractor={item => item.id}
                renderItem={renderProfils}
            />
        </View>
    );
};

Home.navigationOptions = ({ navigation }) => {
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

export default Home;
