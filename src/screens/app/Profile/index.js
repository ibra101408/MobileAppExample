import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from './styles';


const Profile = () => {
    
    return(
        <SafeAreaView>
            <View style={styles.container}>
               <Text>Profile</Text>
            </View>
        </SafeAreaView>
        
    )
}
 
export default React.memo(Profile)
