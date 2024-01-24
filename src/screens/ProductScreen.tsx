import React, { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import RootStackParamList from '../../types/RootStackParamList';
import { Button, FlatList, SafeAreaView, Text, View } from 'react-native';
import ProductListItemComponent from '../components/ProductListItemComponent';
import assignmentStyle from '../styles/styles';
import SubmitButtonComponent from '../components/SubmitButtonComponent';
import Toast from 'react-native-simple-toast';

type ProductScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Product'
>;

interface ProductScreenProp {
    navigation: ProductScreenNavigationProp
}

const products: ProductItem[] = [
    { id: '1', title: 'Product 1', price: '$10', image: 'https://reactnative.dev/img/tiny_logo.png' },
    { id: '2', title: 'Product 2', price: '$10', image: 'https://reactnative.dev/img/tiny_logo.png' },
    { id: '3', title: 'Product 3', price: '$10', image: 'https://reactnative.dev/img/tiny_logo.png' },
    { id: '4', title: 'Product 4', price: '$10', image: 'https://reactnative.dev/img/tiny_logo.png' },
    { id: '5', title: 'Product 5', price: '$10', image: 'https://reactnative.dev/img/tiny_logo.png' },
    { id: '6', title: 'Product 6', price: '$10', image: 'https://reactnative.dev/img/tiny_logo.png' },
  ];

const ProductScreen: React.FC<ProductScreenProp> = ({navigation}) => { 
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<ProductItem[]>([]);

      const toggleSelection = (id: string) => {
        setSelectedItems((prevSelected) =>
          prevSelected.includes(id)
            ? prevSelected.filter((itemId) => itemId !== id)
            : [...prevSelected, id]
        );
      };
    
      const addToCart= (item: ProductItem)  => {
        toggleSelection(item.id);
        selectedProducts.push(item);
        Toast.show(`Item Added: ${item.title}`, Toast.SHORT);
      };

    return (
        <View style={[assignmentStyle.containerStyle, assignmentStyle.alignContentCenterStyle]}>
        <FlatList
          data={products}
          renderItem={({ item }) => ProductListItemComponent(item, () => addToCart(item), 'Product')}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
        <View style={assignmentStyle.buttonStyle}>
        <Button
          title="View Cart"
          onPress={() => navigation.navigate('Cart', { cartItems: selectedProducts })}
        />

        </View>
        </View>
    );
}

export default ProductScreen;
