import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserContext } from "../../../../App";
import Button from "../../../components/Button";
import Header from "../../../components/Header";
import ListItem from "../../../components/ListItem";
import { styles } from './styles';


const Profile = ({ navigation }) => {
    const num = 10
    const {user, setUser} = useContext(UserContext)

    const onLogout = async () => {
        console.log('logout is clicked', user)
        await AsyncStorage.removeItem('auth_token')
        setUser(null)
    }
    
    const onSettingsPress = () => {
        navigation.navigate('Settings')
    }

    const onNewListingPress = () => {
        navigation.navigate('CreateListing')
    }

    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Header title="Profile" showLogout onLogout={onLogout} />
                    <Text style={styles.name}>User name</Text>
                    <Text style={styles.email}>User email</Text>
                
                
                    <ListItem title="My listing" subtitle={`Already have  ${num} listings`} />
                    <ListItem title="Settings" subtitle="Account, FAQ, Contact" onPress={onSettingsPress}/>
                </View>
                <Button onPress={onNewListingPress} style={styles.titleText} title="Add New Listing" />

            </View>
        </SafeAreaView>
    )
}
 
export default React.memo(Profile)
