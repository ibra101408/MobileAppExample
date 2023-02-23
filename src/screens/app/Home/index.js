import React, {useEffect, useState} from "react";
import { FlatList, Text, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from './styles';
import Header from "../../../components/Header";
import { categories } from "../../../data/categories";
import CategoryBox from "../../../components/CategoryBox";
import ProductHomeItem from "../../../components/ProductHomeItem";
import { products } from "../../../data/products";


const Home = ({navigation}) => {
    const [selectedCategory, setSelectedCategory] = useState()
    const [keyword, setKeyword] = useState()
    //const [navigation] = useState()
    const [selectedProducts, setSelectedProducts] = useState(products)

    useEffect(() => {
        if(selectedCategory && !keyword){
            const updatedSelectedProducts = products.filter((product) => 
                product?.category === selectedCategory)
            setSelectedProducts(updatedSelectedProducts)
        } else if(selectedCategory && keyword) {
            const updatedSelectedProducts = products.filter((product) => 
                product?.category === selectedCategory && product?.title?.toLowerCase().includes(keyword.toLowerCase()))
            setSelectedProducts(updatedSelectedProducts)
            //setSelectedProducts(products)
        } else if(!selectedCategory && keyword){
            const updatedSelectedProducts = products.filter((product) =>
                product?.title?.toLowerCase().includes(keyword?.toLowerCase()))
            setSelectedProducts(updatedSelectedProducts)
        }else if(!keyword && !selectedCategory){
            setSelectedProducts(products)
        }
    }, [selectedCategory, keyword])
 
    const renderCategoryItem = ({item}) => {
        return (
            <CategoryBox 
            onPress={() => setSelectedCategory(item?.id)}
            isSelected={item.id === selectedCategory}
            title={item?.title} 
            image={item?.image} />
        )
    }

    const renderProductItem = ({item}) => {
        
        const onProductPress= (product) => {
            navigation.navigate('ProductDetails', {product})
            
    }
        return (
            <ProductHomeItem onPress={() => onProductPress(item)} {...item}/>
        )
    }


    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Header showSearch={true} onSearchKeyword={setKeyword} keyword={keyword} title="Find All You Need" />

                <FlatList 
                    showsHorizontalScrollIndicator={false} 
                    style={styles.list} 
                    horizontal data={categories} 
                    renderItem={renderCategoryItem} 
                    keyExtractor={(item, index) => String(index)}
                />
                <FlatList 
                    numColumns={2} 
                    showsVerticalScrollIndicator={false} 
                    data={selectedProducts} 
                    ListFooterComponent={<View style={{height: 250}} />} 
                    renderItem={renderProductItem}
                    keyExtractor={(item) => String(item.id)} 
                />

            </View>
        </SafeAreaView>
        
    )
}
 
export default React.memo(Home)



