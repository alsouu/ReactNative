import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Header from '../../components/Header';
import { observer } from 'mobx-react-lite';

import ProductStore from '../../store/productStore';
import FavoriteStore from '../../store/favoriteStore';
import CartStore from '../../store/cartStore';

const ProductCard = ({ navigation, route }) => {
    const { itemId } = route.params;
    const product = ProductStore.products[itemId];

    const addToCart = () => {
        ProductStore.addCartCount(product.id)
        CartStore.addToCart(product)
    }

    const addToFavorites = () => {
        FavoriteStore.createFavorite(product);
        ProductStore.createFavorite(product.id)
    }

    const removeFromFavorites = () => {
        FavoriteStore.deleteFavorite(product.id);
        ProductStore.deleteFavorite(product.id)
    }

    return (
        <View>
            <Header navigation={navigation} />
            <View style={styles.container}>
                <Image source={product.img} style={styles.img} />
                <Text style={styles.title}> {product.name} </Text>
                <Text style={styles.price}> {product.price} ₽ </Text>
                <Text style={styles.description}> {product.description} </Text>
                <View style={styles.rating}>
                    {[1, 2, 3, 4, 5].map(i => <AntDesign key={i} name={i <= product.rating ? 'star' : 'staro'} size={28} color="black" />)}
                    <TouchableOpacity onPress={product.isFavorite ? removeFromFavorites : addToFavorites}>
                        <AntDesign style={{ marginLeft: 24 }} name={product.isFavorite ? 'heart' : 'hearto'} size={24} color='black' />
                    </TouchableOpacity>
                </View>
                {
                    !product.inCart ? (
                        <TouchableOpacity onPress={addToCart} style={styles.button}>
                            <Text style={styles.buttonText}>
                                Добавить в корзину
                            </Text>
                        </TouchableOpacity>
                    ) : <Text style={styles.warning}> Уже в корзине </Text>
                }
            </View>
        </View>
    );
};

export default observer(ProductCard);

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingHorizontal: 16,
        height: '100%',
    },
    img: {
        height: 300,
        width: 300,
    },
    title: {
        fontWeight: 'bold',
        marginTop: 20,
        fontSize: 24,
    },
    price: {
        fontWeight: 'bold',
        marginTop: 8,
        color: 'red',
        fontSize: 22,
    },
    description: {
        marginTop: 8,
        fontSize: 16,
        textAlign: 'center',
        color: '#919191',
    },
    rating: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 16,
    },
    button: {
        width: '90%',
        marginTop: 24,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'yellow',
        padding: 8,
        borderRadius: 16,
    },
    buttonText: {
        color: 'black',
    },
    warning: {
        marginTop: 16,
    }
});