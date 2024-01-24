import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import assignmentStyle from '../styles/styles';
import SubmitButtonComponent from './SubmitButtonComponent';

const ProductListItemComponent = (
  item: ProductItem,
  addToCart: (item: ProductItem) => void,
  from: string,
) => {

  const getButtonTitle = () => {
    if (from === 'Cart') {
      return 'Move to Orders';
    } else if (from === 'Product') {
      return 'Add to Cart';
    }else{
      return'Remove from Orders';
    }
  };
  return (
    <TouchableOpacity
      style={
        assignmentStyle.productCardContainer}>
      <View style={assignmentStyle.cardContent}>
        <Image
          source={{uri: item.image}}
          style={assignmentStyle.cardImage}></Image>
        <Text style={assignmentStyle.productCardTitle}>{item.title}</Text>
        <Text style={assignmentStyle.productCardTitle}>{item.price}</Text>
        <SubmitButtonComponent title= {getButtonTitle()} onClick={() => addToCart(item)} />
      </View>
    </TouchableOpacity>
  );
};

export default ProductListItemComponent;
