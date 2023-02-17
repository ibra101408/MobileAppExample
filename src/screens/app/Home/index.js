import React from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from './styles';
import Header from "../../../components/Header";
import { categories } from "../../../data/categories";
import CategoryBox from "../../../components/CategoryBox";

const Home = () => {
    const renderCategoryItem = ({item}) => {
        console.log('item => ', item)
        return (
            <CategoryBox title={item.title} image={item.image} />
        )
    }

    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Header showSearch={true} title="Find All You Need" />
                <FlatList styles={styles.list} horizontal data={categories} renderItem={renderCategoryItem} keyExtractor={(item, index) => String(index)}/>
                <Text>Home</Text> 
            </View>
        </SafeAreaView>
        
    )
}
 
export default React.memo(Home)



