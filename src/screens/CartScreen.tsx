import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import RootStackParamList from '../../types/RootStackParamList';
import { SafeAreaView } from 'react-native';

type CartScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Cart'
>;

interface CartScreenProp {
    navigation: CartScreenNavigationProp
}

const CartScreen: React.FC<CartScreenProp> = ({navigation}) => { 
    return (
        <SafeAreaView>
            
        </SafeAreaView>
    );
}

export default CartScreen;
