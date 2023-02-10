import React, { useState } from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";
import { styles } from './styles';
    
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';


const GoogleLogin = ({text}) => {

    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            this.setState({ userInfo });
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
            } else {
            // some other error happened
            }
        }
    }
    return(
        <TouchableOpacity activeOpacity={0.6} onPress={signIn} style={styles.container}>
            <Image style={styles.image} source={require("../../assets/google.png")} />
        </TouchableOpacity>
    )
}
 
export default React.memo(GoogleLogin)



/////  clien id: 923292025088-4d75jue0hpm39rd9p7831ulfo9jdnlh6.apps.googleusercontent.com     
////   client server: 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 
