import React from "react";
import { Image, Linking, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import Header from "../../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import ListItem from "../../../components/ListItem";
import EditableBox from "../../../components/EditableBox";

const Settings = () => {
    const onItemPress = () => {
        Linking.openURL('https://google.com')
    }

    return(
        <SafeAreaView style={{flex: 1}}>
            <Header title="Settings" />
            <View style={styles.container}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Personal Information</Text>
                    <Image style={styles.icon} source={require('../../../assets/tabs/edit.png')} />
                </View>

                <EditableBox label="Name" value="User name" editable="false" />
                <EditableBox label="Email" value="User email" editable="true" />

                <Text style={styles.sectionTitle}>Help Center</Text>
                <ListItem onPress={onItemPress} style={styles.item} title="FAQ" />
                <ListItem onPress={onItemPress} style={styles.item} title="Contact Us" />
                <ListItem onPress={onItemPress} style={styles.item} title="Privacy & Terms" />
            </View>
        </SafeAreaView>
    )
}

export default React.memo(Settings)