import React from "react";
import { View, Text } from "react-native";
import { styles } from './styles';
import AuthHeader from "../../../components/AuthHeader";

const Signup = () => {
    return(
        <View style={styles.container}>
            <AuthHeader title="Sign Up" />
            <Text>FN</Text>
        </View>   
    )
}
 
export default Signup