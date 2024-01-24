import React, { useState } from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import RootStackParamList from '../../types/RootStackParamList';
import {Button, FlatList, SafeAreaView, View} from 'react-native';
import assignmentStyle from '../styles/styles';
import ProductListItemComponent from '../components/ProductListItemComponent';
import {useRoute} from '@react-navigation/native';

type CartScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Cart'
>;

interface CartScreenProp {
  navigation: CartScreenNavigationProp;
}
  interface CartRouteParams {
    cartItems: ProductItem[];
  }
const CartScreen: React.FC<CartScreenProp> = ({navigation}) => {
  const route = useRoute();
  const cartItems = (route.params as CartRouteParams)?.cartItems;
  const [selectedItemForOrder, setSelectedItemForOrder] = useState<ProductItem[]>([]);

  const moveItemToOrder = (item: ProductItem) => {
    selectedItemForOrder.push(item)
  };
  return (
    <View>
      <FlatList
        data={cartItems}
        renderItem={({item}) => ProductListItemComponent(item, () => {moveItemToOrder(item)}, 'Cart')}
        keyExtractor={item => item.id}
        numColumns={2}
      />
      <View style={assignmentStyle.buttonStyle}>
        <Button title="View Orders" onPress={() => navigation.navigate('Orders', {orderItems: selectedItemForOrder})}/>
      </View>
    </View>
  );
};

export default CartScreen;
