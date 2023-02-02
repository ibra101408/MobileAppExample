import React from "react";
import { Pressable, Text } from "react-native";
import { styles } from "./styles";

const Button = ({title, onPress}) => {

    return(
        <Pressable activeOpacity={1} hitSlop={1} onPress={onPress} style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    )
}






export default Button