import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import RootStackParamList from '../../types/RootStackParamList';
import { Button, FlatList, SafeAreaView, View } from 'react-native';
import ProductListItemComponent from '../components/ProductListItemComponent';
import assignmentStyle from '../styles/styles';
import { useRoute } from '@react-navigation/native';

type OrderScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Orders'
>;

interface OrderScreenProp {
    navigation: OrderScreenNavigationProp
}

interface OrderRouteParams {
    orderItems: ProductItem[];
  }

const OrderScreen: React.FC<OrderScreenProp> = ({navigation}) => { 
    const route = useRoute();
    const cartItems = (route.params as OrderRouteParams)?.orderItems;
    return (
        <View>
      <FlatList
        data={cartItems}
        renderItem={({item}) => ProductListItemComponent(item, () => {}, 'Orders')}
        keyExtractor={item => item.id}
        numColumns={2}
      />
      <View style={assignmentStyle.buttonStyle}>
        <Button title="Go to home" onPress={() => navigation.navigate('Home')}/>
      </View>
    </View>
    );
}

export default OrderScreen;
