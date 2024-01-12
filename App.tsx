/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useContext, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ProductScreen from './src/screens/ProductScreen';
import CartScreen from './src/screens/CartScreen';
import OrderScreen from './src/screens/OrdersScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ScreenStack = createNativeStackNavigator();
const App: React.FC = () => {

  const getUserAuthenticationData = async () => {
    const userData = await AsyncStorage.getItem('userDate');

    if (userData !== null) {
      return true
    }else {return false}
  };
  const authorizationState = getUserAuthenticationData;

  return (
    <NavigationContainer>
      <ScreenStack.Navigator>
        {!!authorizationState ? (
        <>
          <ScreenStack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <ScreenStack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{headerShown: false}}
          />
          <ScreenStack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
          />
        </>
        ) : (
        <>
          <ScreenStack.Screen name="Home" component={HomeScreen} />
          <ScreenStack.Screen name="Profile" component={ProfileScreen} />
          <ScreenStack.Screen name="Settings" component={SettingsScreen} />
          <ScreenStack.Screen name="Product" component={ProductScreen} />
          <ScreenStack.Screen name="Cart" component={CartScreen} />
          <ScreenStack.Screen name="Orders" component={OrderScreen} />
        </>
        )}
      </ScreenStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
