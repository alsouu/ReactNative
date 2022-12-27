import { useMemo } from 'react';
import { StyleSheet, ScrollView, View, Image, Text, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react-lite'

import CartStore from '../../store/cartStore';
import ProductStore from '../../store/productStore';
import Input from '../../components/Input';

const Cart = () => {
  const products = CartStore.cart
  const totalPrice = useMemo(() => products.reduce(
    (obj, item, i) => obj + (item.price * item.inCart),
    0,
  ), [products]);

  const removeFromCart = (id) => {
    CartStore.deleteFromCart(id)
    ProductStore.removeCartCount(id)
  }

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {products.map(({ name, img, price, id, inCart }) => (
            <View key={id}>
              <View style={styles.productWrapper}>
                <View style={styles.nameWrapper}>
                  <Image style={styles.img} source={img} />
                  <View>
                    <Text style={styles.name}> {name} </Text>
                    <Input defaultValue={inCart} fontSize={14} id={id} />
                  </View>
                </View>
                <Text style={styles.price}> {inCart * price} ₽ </Text>
              </View>
              <TouchableOpacity onPress={() => removeFromCart(id)}>
                <Text style={styles.remove}> Удалить </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
      <Text style={styles.totalPrice}>
        Итого: <Text style={styles.totalPriceNumber}> {totalPrice} ₽ </Text>
      </Text>
    </>
  );
};

export default observer(Cart);

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
  totalPrice: {
    fontWeight: 'bold',
    fontSize: 18,
    margin: 16,
  },
  totalPriceNumber: {
    color: 'green',
    fontSize: 20,
  },
  remove: {
    marginBottom: 8,
    color: 'red'
  },
});