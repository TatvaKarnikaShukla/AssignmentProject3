/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ProductScreen from './src/screens/ProductScreen';
import CartScreen from './src/screens/CartScreen';
import OrderScreen from './src/screens/OrdersScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const ScreenStack = createNativeStackNavigator()
const App: React.FC = () => {
  return(
    <NavigationContainer>
      <ScreenStack.Navigator>
        <ScreenStack.Screen name='Login' component={LoginScreen}/>
        <ScreenStack.Screen name='Registration' component={RegistrationScreen}/>
        <ScreenStack.Screen name='Home' component={HomeScreen}/>
        <ScreenStack.Screen name='Profile' component={ProfileScreen}/>
        <ScreenStack.Screen name='Settings' component={SettingsScreen}/>
        <ScreenStack.Screen name='Product' component={ProductScreen}/>
        <ScreenStack.Screen name='Cart' component={CartScreen}/>
        <ScreenStack.Screen name='Orders' component={OrderScreen}/>
      </ScreenStack.Navigator>
    </NavigationContainer>
  );
};

export default App;