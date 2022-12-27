import { observer } from 'mobx-react-lite';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductList from './src/screens/ProductList';
import ProductCard from './src/screens/ProductCard';
import Cart from './src/screens/Cart';
import Favorite from './src/screens/Favorite';

const Stack = createNativeStackNavigator();

const App = observer(() => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {props => <ProductList {...props} />}
        </Stack.Screen>
        <Stack.Screen name="ProductCard">
          {props => <ProductCard {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Cart">
          {props => <Cart {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Favorite">
          {props => <Favorite {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default App;
