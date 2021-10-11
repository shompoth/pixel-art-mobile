import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
// Components
import StackNav from "./HomeStackNav";
import FaqStackNav from "./FaqStackNav";
import Colors from "../styles/Colors";

const RouteConfig = {
    Home: {
        screen: StackNav,
        navigationOptions: {
            title: "Accueil",
        },
    },
    Faq: {
        screen: FaqStackNav,
        navigationOptions: {
            title: "FAQ",
        },
    },
};

const DrawerNavigatorConfig = {
    drawerWidth: "50%",
    drawerType: "slide",
    drawerBackgroundColor: "#333",
    contentOptions: {
        labelStyle: {
            fontSize: 19,
        },
        activeTintColor: Colors.clicked,
        inactiveTintColor: Colors.white,
    },
};

const MainNavigator = createDrawerNavigator(RouteConfig, DrawerNavigatorConfig);
export default createAppContainer(MainNavigator);
