// Librairies
import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Button } from "react-native";

// Composants
import Home from "../screens/Home";
import Photo from "../screens/Photo";
import Portfolio from "../screens/Portfolio";
import Colors from "../styles/Colors";

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: "Accueil",
        },
    },
    Portfolio: {
        screen: Portfolio,
        navigationOptions: {
            title: "Profil",
        },
    },
    Photo: { screen: Photo },
};

const defaultNavigationOptions = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.lightBrown,
        },
        headerTintColor: Colors.white,
        headerTitleStyle: {
            fontWeight: "bold",
        },
    },
};

const StackNav = createStackNavigator(screens, defaultNavigationOptions);

export default createAppContainer(StackNav);
