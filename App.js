import React, { useEffect } from "react";
import { Image, SafeAreaView } from "react-native";

import Signup from "./src/screens/auth/Signup";
import Signin from "./src/screens/auth/Signin";
import Splash from "./src/screens/auth/Splash";

import Home from "./src/screens/app/Home";
import Profile from "./src/screens/app/Profile";
import Favorites from "./src/screens/app/Favorites";

import Config from "react-native-config";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "./src/utils/colors";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const Tabs = () => {
    return (
        <Tab.Navigator 
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let icon;
    // todo: change folder and icons
                if (route.name === 'Home') {
                    icon = focused
                    ? require('./src/assets/tabs/home_active.png')
                    : require('./src/assets/tabs/home.png');
                } else if (route.name === 'Favorites') {
                    icon = focused 
                    ? require('./src/assets/tabs/favorites_active.png') 
                    : require('./src/assets/tabs/favorites.png');
                } else if (route.name === 'Profile') {
                    icon = focused 
                    ? require('./src/assets/tabs/profile_active.png') 
                    : require('./src/assets/tabs/profile.png');
                }
    
                // You can return any component that you like here!
                return <Image style={{width: 24, height: 24}} source={icon} />;
                },
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {borderTopColor: colors.lightGrey}
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Favorites" component={Favorites} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}

const App = () => {
    const isSignedIn = true
    useEffect(() => {
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'], 
            webClientId: Config.GOOGLE_WEB_CLIENT_ID, 
            offlineAccess: true,         
            iosClientId: Config.GOOGLE_IOS_CLIENT_ID, 
        })
    }, [])

    const theme = {
        colors: {
            background: colors.white
        },
    };

    return(
        <SafeAreaProvider>
            <NavigationContainer theme={theme}>
                <Stack.Navigator> 
                    {
                        isSignedIn ? (
                            <>
                                <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}} /> 
                            </>
                        ) : (
                            <>
                                <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
                                <Stack.Screen name="Signin" component={Signin} options={{headerShown: false}}/>
                                <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
                            </>
                        )
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};



export default React.memo(App)
