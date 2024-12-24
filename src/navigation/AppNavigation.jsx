import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import UserProfile from '../screens/UserProfile';
import LoginPage from '../screens/LoginPage';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';
import Contact from '../screens/Contact';
import About from '../screens/About';
import Course from '../screens/Course';
import Student from '../screens/Student';
import ProductSummary from '../components/ProductSummary';
import Wishlist from '../screens/Wishlist';
import Date from '../screens/Date';

const AuthStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();


const AuthStackScreen = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen
            name="LoginPage"
            component={LoginPage}
            options={{ headerShown: false }}
        />
        <AuthStack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
        />
    </AuthStack.Navigator>
);



const AppStackScreen = () => (
    <AppStack.Navigator initialRouteName='Date'>
        <AppStack.Screen options={{ headerShown: false }} name="Home">
            {(props) => <Home {...props} centerName="Education App" />}
        </AppStack.Screen>
        <AppStack.Screen
            name="Contact"
            component={Contact}
            options={{ headerStyle: { fontSize: 25 }, headerTitleAlign: 'center' }}
        />
        <AppStack.Screen
            name="Date"
            component={Date}
            options={{ headerStyle: { fontSize: 25 }, headerTitleAlign: 'center' }}
        />
        <AppStack.Screen
            name="Student"
            component={Student}
            options={{ headerStyle: { fontSize: 25 }, headerTitle: 'Students Data', headerTitleAlign: 'center' }}
        />
        <AppStack.Screen
            name="Products"
            component={Course}
            options={{ headerStyle: { fontSize: 25 }, headerTitle: 'Courses', headerTitleAlign: 'center', headerShown: false}}
        />
        <AppStack.Screen
            name="Cart"
            component={About}
            options={{ headerStyle: { fontSize: 25 }, headerTitleAlign: 'center' }}
        />
        <AppStack.Screen
            name="UserProfile"
            component={UserProfile}
            options={{ headerShown: false }}
        />
        <AppStack.Screen
            name="ProductSummary"
            component={ProductSummary}
            // options={{ headerShown: false }}
        />
        <AppStack.Screen
            name="Wishlist"
            component={Wishlist}
        />
    </AppStack.Navigator>
);



const AppNavigation = () => {

    const loginCheck = useSelector((state) => state.authSlice.isLogin);
    console.log("jdjfjow bfdfj", loginCheck)

    return (

        <Stack.Navigator>
            {!loginCheck ? (
                <Stack.Screen
                    name="AppStackScreen"
                    component={AppStackScreen}
                    options={{ headerShown: false }}
                />  
            ) : (
                <Stack.Screen
                    name="AuthStackScreen"
                    component={AuthStackScreen}
                    options={{ headerShown: false }}
                />
            )}
        </Stack.Navigator>

    )
}

export default AppNavigation;