// Librairies
import React from "react";
import { FlatList, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

// Components
import PressableItems from "../components/PressableItems/PressableItems";
import { globalStyles } from "../styles/AppStyles";
import MaterialIconsHeader from "../components/MaterialIconsHeader/MaterialIconsHeader";
import NoData from "../components/NoData/NoData";

const Home = ({ navigation }) => {
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

    if (selectedCategories.length === 0) {
        return <NoData>Pas d'utilisateurs à afficher</NoData>;
    } else {
        return (
            <View style={globalStyles.container}>
                <FlatList
                    data={selectedCategories}
                    keyExtractor={item => item.id}
                    renderItem={renderProfils}
                />
            </View>
        );
    }
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
