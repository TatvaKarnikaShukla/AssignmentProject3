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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RootStackParamList from './types/RootStackParamList';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ScreenStack = createNativeStackNavigator<RootStackParamList>();
const App: React.FC = () => {
  const getUserAuthenticationData = async () => {
    const userData = await AsyncStorage.getItem('userData');

    if (userData !== null) {
      return true;
    } else {
      return false;
    }
  };
  const authorizationState = getUserAuthenticationData();
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  const UnAuthenticatedScreens = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      </Stack.Navigator>
    );
  };

  const AuthenticatedScreens = () => {
    return (
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Settings" component={SettingsScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Orders" component={OrderScreen} /> */}
        <Stack.Screen name="TabScreens" component={TabScreens}  />
        <Stack.Screen name="DrawerScreens" component={DrawerScreens} />
      </Stack.Navigator>
    );
  };

  const TabScreens = () => {
    return (
      <Tab.Navigator 
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName ?? 'default-icon'} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>
        <Tab.Screen name="Settings" component={SettingsScreen} options={{headerShown: false}}/>
      </Tab.Navigator>
    );
  };

  const DrawerScreens = () => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Product" component={ProductScreen} />
        <Drawer.Screen name="Cart" component={CartScreen} />
        <Drawer.Screen name="Orders" component={OrderScreen} />
      </Drawer.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={
          !authorizationState
            ? 'UnAuthenticatedScreens'
            : 'AuthenticatedScreens'
        }>
        <Stack.Screen
          name="UnAuthenticatedScreens"
          component={UnAuthenticatedScreens}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AuthenticatedScreens"
          component={AuthenticatedScreens}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
