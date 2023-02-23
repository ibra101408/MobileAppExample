import React from "react";
import { ScrollView, Text, View, Image, Pressable } from "react-native";
import { styles } from './styles';
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../../components/Button";

const ProductDetails = ({navigation, route}) => {
    console.log('navigation => ', navigation)
    console.log('route => ', route)
    const {product} = route.params || {}
    console.log('product=> ', product)
    
    return(
        <SafeAreaView style={styles.save}>
            <ScrollView>
                <Image style={styles.image} source={{uri: product?.image}} />
                    <View style={styles.content}>
                        <Text style={styles.title}>{product?.title}</Text>
                        <Text style={styles.price}>{product?.price}</Text>
                        <Text style={styles.description}>{product?.description}</Text>
                    </View>
                </ScrollView>
                <View style={styles.footer}>
                    <Pressable style={styles.bookmarkContainer}>
                        <Image style={styles.bookmarkIcon} source={require('../../../assets/tabs/favorites.png')}/>
                    </Pressable>
                    <Button title="Contact seller" />
                </View>
        </SafeAreaView>      
    )
}
 
export default React.memo(ProductDetails)
