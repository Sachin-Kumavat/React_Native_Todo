import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../components/Login";
import Cards from "../components/Cards";
const Tab = createBottomTabNavigator();

const Tabs=()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Cards" component={Cards} />
        </Tab.Navigator>
    )
}

export default Tabs;