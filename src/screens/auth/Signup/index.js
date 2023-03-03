import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import { styles } from './styles';
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";
import { SafeAreaProvider } from "react-native-safe-area-context";


const Signup = ({navigation}) => {
    const [checked, setChecked] = useState(false)
    const [values, setValues] = useState({})

    const onBack = () => {
        navigation.goBack()
    }

    const onSignin = (key, value) => {
        navigation.navigate('Signin')
    }

    const onChange = (key, value) => {
        setValues(v => ({...v, [key]: value}))
    }

    const onSubmit = () => {
        if(!values?.fullName || !values?.email || !values?.password){
            Alert.alert('All fields are required!')
            return
        }
        console.log('values => ', values)
    }

    return(
        <SafeAreaProvider>
            <View style={styles.container}>
                <AuthHeader onBackPress={onBack} title="Sign Up" />
                <Input 
                    value={values.fullName} 
                    onChangeText={(v) => onChange('fullName', v)} 
                    label="Name" 
                    placeholder="Jhon Doe"
                />
                <Input 
                    value={values.email} 
                    onChangeText={(v) => onChange('email', v)}
                    label="Email" 
                    placeholder="example@gmail.com"
                />
                <Input 
                    value={values.password} 
                    onChangeText={(v) => onChange('password', v)}
                    isPassword 
                    label="Password" 
                    placeholder="********"
                />
                <View style={styles.agreeRow}>
                    <Checkbox checked={checked} onCheck={setChecked} />
                    <Text style={styles.agreeText}>I agree with
                    <Text style={styles.agreeTextBold}> Terms </Text>&
                    <Text style={styles.agreeTextBold}> Privacy</Text></Text>
                </View>
                <Button onPress={onSubmit} style={styles.button} title="Sign Up/in?" />
                <Separator text="Or sign up with" />
                <GoogleLogin />
                <Text style={styles.footerText}>Already have an account?
                    <Text style={styles.footerLink}>Sign In</Text>
                </Text>
            </View> 
        </SafeAreaProvider>  
    )
}
 
export default Signup