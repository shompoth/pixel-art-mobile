import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import Selected from "../screens/Selected";
import Colors from "../styles/Colors";
import StackNav from "./HomeStackNav";

const RouteConfigs = {
    Home: {
        screen: StackNav,
        navigationOptions: {
            tabBarIcon: tabInfo => (
                <MaterialIcons name="home" size={24} color={tabInfo.tintColor} />
            ),
            tabBarLabel: "Accueil",
        },
    },
    Likes: {
        screen: Selected,
        navigationOptions: {
            tabBarIcon: tabInfo => (
                <MaterialIcons name="thumb-up" size={24} color={tabInfo.tintColor} />
            ),
            tabBarLabel: "Sélection",
        },
    },
};

const TabNavigatorConfig = {
    tabBarOptions: {
        inactiveTintColor: Colors.darkGrey,
        activeTintColor: Colors.clicked,
    },
};

const BottomTabNav = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);
export default BottomTabNav;
