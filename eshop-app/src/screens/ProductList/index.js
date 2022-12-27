import { StyleSheet, ScrollView, View, Image, TouchableOpacity, Text } from 'react-native';
import ProductStore from '../../store/productStore';
import Header from '../../components/Header';

const ProductList = ({ navigation }) => {
  return (
    <>
      <Header navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          {ProductStore.products.map((item) => (
            <View key={item.id} style={styles.productWrapper}>
              <Image style={styles.img} source={item.img} />
              <TouchableOpacity onPress={() => navigation.navigate('ProductCard', { itemId: ProductStore.products.indexOf(item) })}>
                <Text style={styles.name}> {item.name} </Text>
              </TouchableOpacity>
              <Text style={styles.price}> {item.price} ₽ </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  img: {
    width: 150,
    height: 250,
  },
  productWrapper: {
    width: 170,
    height: 300,
    marginRight: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    marginVertical: 4,
  },
  price: {
    color: 'red',
  }
});