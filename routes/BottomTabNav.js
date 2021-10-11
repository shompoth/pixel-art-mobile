import { createBottomTabNavigator } from "react-navigation-tabs";
import Selected from "../screens/Selected";
import StackNav from "./HomeStackNav";

const RouteConfigs = {
    Home: {
        screen: StackNav,
    },
    Likes: {
        screen: Selected,
    },
};

const BottomTabNav = createBottomTabNavigator(RouteConfigs);
export default BottomTabNav;
