import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import RootStackParamList from '../../types/RootStackParamList';
import { SafeAreaView } from 'react-native';

type OrderScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Orders'
>;

interface OrderScreenProp {
    navigation: OrderScreenNavigationProp
}

const OrderScreen: React.FC<OrderScreenProp> = ({navigation}) => { 
    return (
        <SafeAreaView>
            
        </SafeAreaView>
    );
}

export default OrderScreen;
