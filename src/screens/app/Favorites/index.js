import React from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import { styles } from './styles';
import { products } from "../../../data/products";
import FavoriteItem from "../../../components/FavoriteItem";


const Favorites = () => {
    const renderItem = ({item}) => {
        return (
            <FavoriteItem
                {...item}
        />)
    }
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Header title="Favorites" />
                <FlatList 
                    data={products} 
                    renderItem={renderItem} 
                    keyExtractor={(item) => String(item.id)} 
                />
            </View>
        </SafeAreaView>
        
    )
}
 
export default React.memo(Favorites)
