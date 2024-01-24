/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  DrawerToggleButton,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AboutPage from './src/screens/AboutPage';
import CartScreen from './src/screens/CartScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import OrderScreen from './src/screens/OrdersScreen';
import PrivacyPolicy from './src/screens/PrivacyPolicy';
import ProductScreen from './src/screens/ProductScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const App: React.FC = () => {
  const getUserAuthenticationData = async () => {
    const userData = await AsyncStorage.getItem('UserData');
    console.log("User data " + userData)

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
      <Stack.Navigator initialRouteName='DrawerScreens'>
        <Stack.Screen name="DrawerScreens" component={DrawerScreens} options={{headerShown: false}}/>
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="AboutPage" component={AboutPage} />
      </Stack.Navigator>
    );
  };

  const TabScreens = () => {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return (
              <Ionicons
                name={iconName ?? 'default-icon'}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: true, headerLeft: () => <DrawerToggleButton />}}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{headerShown: true, headerLeft: () => <DrawerToggleButton />}}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{headerShown: true, headerLeft: () => <DrawerToggleButton />}}
        />
      </Tab.Navigator>
    );
  };

  const DrawerScreens = () => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name='Home Screen' component={TabScreens} options={{headerShown: false}}/>
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
            ? 'AuthenticatedScreens'
            : 'UnAuthenticatedScreens'
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
