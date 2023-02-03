import React from "react";
import { View, Text } from "react-native";
import { styles } from './styles';
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";

const Signup = () => {
    return(
        <View style={styles.container}>
            <AuthHeader title="Sign Up" />
            <Input label="Name" placeholder="Jhon Doe"/>
            <Input label="Email" placeholder="example@gmail.com"/>
            <Input isPassword label="Password" placeholder="********"/>
            <Text></Text>
        </View>   
    )
}
 
export default Signup