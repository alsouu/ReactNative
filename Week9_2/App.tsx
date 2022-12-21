import React from 'react'
import { View, Button, Text } from 'react-native'
import { observer } from 'mobx-react-lite'
import CounterStore from './Store/CounterStore'
import ClickerStore from './Store/ClickerStore'

const App = observer(() => {
  const onPlusClick = () => {
    CounterStore.increment()
    ClickerStore.increment()
  }

  const onMinusClick = () => {
    CounterStore.decrement()
    ClickerStore.increment()
  }

  const onResetClick = () => CounterStore.reset();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{CounterStore.count}</Text>
      <Button onPress={onPlusClick} title="+" />
      <Button onPress={onMinusClick} title="-" />
      <Button onPress={onResetClick} title="Reset" />
      <Text>Total click count: {ClickerStore.count}</Text>
    </View>
  )
})

export default App