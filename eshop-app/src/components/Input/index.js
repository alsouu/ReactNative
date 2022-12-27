import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react-lite'

import CartStore from '../../store/cartStore';

const Input = ({ fontSize, defaultValue, id }) => {
  const [value, setValue] = useState(defaultValue);

  const increaseValue = () => {
    CartStore.addCartCount(id)
    setValue(value + 1);
  }
  const decreaseValue = () => {
    CartStore.removeCartCount(id)
    setValue(value - 1);
  }

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={increaseValue}>
        <Text style={styles.button}>+</Text>
      </TouchableOpacity>
      <Text style={{ ...styles.value, fontSize: fontSize }}> {value}  шт. </Text>
      <TouchableOpacity disabled={value === 0} onPress={decreaseValue}>
        <Text style={styles.button}>—</Text>
      </TouchableOpacity>
    </View>
  )
}

export default observer(Input);

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  button: {
    fontSize: 18,
    color: 'black',
    borderColor: 'black',
    borderWidth: 1,
    width: 24,
    display: 'flex',
    textAlign: 'center',
  },
  value: {
    marginHorizontal: 4,
  }
});