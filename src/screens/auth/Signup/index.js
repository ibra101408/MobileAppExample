import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from './styles';
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";

const Signup = () => {
    const [checked, setChecked] = useState(false)
    return(
        <View style={styles.container}>
            <AuthHeader title="Sign Up" />
            <Input label="Name" placeholder="Jhon Doe"/>
            <Input label="Email" placeholder="example@gmail.com"/>
            <Input isPassword label="Password" placeholder="********"/>
            <View style={styles.agreeRow}>
                <Checkbox checked={checked} onCheck={setChecked} />
                <Text style={styles.agreeText}>I agree with </Text>
                <Text style={styles.agreeTextBold}> Terms </Text> 
                <Text style={styles.agreeText}> & </Text> 
                <Text style={styles.agreeTextBold}> Privacy </Text>
            </View>
            <Button style={styles.button} title="Sign In" />
        </View>   
    )
}
 
export default Signup