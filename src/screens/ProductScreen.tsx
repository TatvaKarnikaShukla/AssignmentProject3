import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import RootStackParamList from '../../types/RootStackParamList';
import { SafeAreaView } from 'react-native';

type ProductScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Product'
>;

interface ProductScreenProp {
    navigation: ProductScreenNavigationProp
}

const ProductScreen: React.FC<ProductScreenProp> = ({navigation}) => { 
    return (
        <SafeAreaView>
            
        </SafeAreaView>
    );
}

export default ProductScreen;
