import React from "react";
import { Pressable, Image, Text, View } from "react-native";
import { styles } from './styles';


const Header = ({title, onBackPress, onSearch, onLogout, showBack, showSearch, showLogout}) => {
    
    return (
            <View style={styles.container}>
                {
                    showBack ? (
                        <Pressable hitSlop={20} onPress={onBackPress}>
                            <Image style={styles.icon} source={require('../../assets/tabs/back.png')} />
                        </Pressable>
                    ) : showSearch ? (
                        <Pressable hitSlop={20} onPress={onSearch}>
                            <Image style={styles.icon} source={require('../../assets/tabs/search.png')} />
                        </Pressable>
                    ) : null
                }
            </View>
            //<Text...
        
    )
}
 
export default React.memo(Header)
