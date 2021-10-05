import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Photo from "../screens/Photo";
import Portfolio from "../screens/Portfolio";

const screens = {
    Home: { screen: Home },
    Portfolio: { screen: Portfolio },
    Photo: { screen: Photo },
};

const StackNav = createStackNavigator(screens);

export default createAppContainer(StackNav);
