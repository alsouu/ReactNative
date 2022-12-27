import { StyleSheet, ScrollView, View, Image, Text, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react-lite'

import ProductStore from '../../store/productStore';
import FavoriteStore from '../../store/favoriteStore';

const Favorite = () => {
  const products = FavoriteStore.favorites

  const removeFromFavorite = (id) => {
    FavoriteStore.deleteFavorite(id)
    ProductStore.deleteFavorite(id)
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {products.map(({ name, img, price, id }) => (
          <View key={id}>
            <View style={styles.productWrapper}>
              <View style={styles.nameWrapper}>
                <Image style={styles.img} source={img} />
                <View>
                  <Text style={styles.name}> {name} </Text>
                </View>
              </View>
              <Text style={styles.price}> {price} ₽ </Text>
            </View>
            <TouchableOpacity onPress={() => removeFromFavorite(id)}>
              <Text style={styles.remove}> Удалить </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default observer(Favorite);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  img: {
    width: 75,
    height: 75,
    marginRight: 10,
  },
  productWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  nameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    marginVertical: 4,
  },
  price: {
    fontWeight: 'bold',
    color: 'green',
    fontSize: 17,
    marginRight: 40,
  },
  remove: {
    marginBottom: 8,
    color: 'red',
  },
});