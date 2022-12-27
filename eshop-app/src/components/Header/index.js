import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { observer } from 'mobx-react-lite'

import CartStore from '../../store/cartStore';


const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconsWrapper}>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <AntDesign style={{ paddingRight: 8 }} name='shoppingcart' size={28} color='black' />
        </TouchableOpacity>
        <View style={styles.counter}>
          <Text>{CartStore.cart.length}</Text>
        </View>
      </View>
      <Text style={styles.title}> OpenMarket </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Favorite')}>
        <AntDesign name='hearto' size={28} color='black' />
      </TouchableOpacity>
    </View>
  );
};

export default observer(Header);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
  },
  iconsWrapper: {
    flexDirection: 'row',
  },
  counter: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'white',
    height: 20,
    width: 20,
    borderRadius: 20,
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 1,
    borderColor: 'black',
  },
});