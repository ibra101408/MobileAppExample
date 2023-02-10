import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from './styles';
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";
import { SafeAreaProvider } from "react-native-safe-area-context";


const Signin = () => {
    const [checked, setChecked] = useState(false)
    return(
        <SafeAreaProvider>
            <View style={styles.container}>
                <AuthHeader title="Sign In" />
                <Input label="Email" placeholder="example@gmail.com"/>
                <Input isPassword label="Password" placeholder="********"/>
                
                <Button style={styles.button} title="Sign In" />
                <Separator text="Or sign up with" />
                <GoogleLogin />
                <Text style={styles.footerText}>Already have an account?
                    <Text style={styles.footerLink}>Sign Up</Text>
                </Text>
            </View>   
        </SafeAreaProvider>
    )
}
 
export default Signin